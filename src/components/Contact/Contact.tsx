import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { initialState as AboutDefault, setAboutDetails } from '@/components/AboutYou/aboutSlice';
import { useStoreDispatch, useStoreSelector } from '@/store';
import { useAddUserMutation } from '@/store/usersSlice';

import { initialState as ContactDefault, setContactDetails } from './contactSlice';
import { type FormPayloadType, schema } from './schema';

export function Contact() {
  const [addUser] = useAddUserMutation();
  const navigate = useNavigate();
  const dispatch = useStoreDispatch();
  const storedData = useStoreSelector((state) => state.contact);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormPayloadType>({
    defaultValues: storedData,
    resolver: zodResolver(schema),
  });

  const onSubmit = async(data: FormPayloadType) => {
    dispatch(setContactDetails(data));

    await addUser()
      .unwrap()
      .then(() => {
        dispatch(setAboutDetails(AboutDefault));
        dispatch(setContactDetails(ContactDefault));
      }).then(() => {
        navigate('/');
      });
  };

  return (
    <>
      <label htmlFor="email">Enter email</label>
      <span>{errors?.email?.message}</span>
      <input
        id="email"
        {...register('email')}
        type="email"
      />

      <label htmlFor="phone">Enter phone</label>
      <span>{errors?.phone?.message}</span>
      <input
        id="phone"
        {...register('phone')}
        type="tel"
      />

      <div>
        <button onClick={handleSubmit(onSubmit)}>Submit</button>
      </div>
    </>
  );
}

import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';

import { useStoreDispatch, useStoreSelector } from '@/hooks/redux';

import { setAboutDetails } from './aboutSlice';
import { type FormPayloadType, schema } from './schema';

export function AboutYou() {
  const navigate = useNavigate();
  const dispatch = useStoreDispatch();
  const storedData = useStoreSelector((state) => state.about);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormPayloadType>({
    defaultValues: storedData,
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormPayloadType) => {
    dispatch(setAboutDetails(data));

    navigate({ to: '/contact' });
  };

  return (
    <>
      <label htmlFor="title">Enter title</label>
      <span>{errors?.title?.message}</span>
      <select id="title" {...register('title')}>
        <option value="">Please select</option>
        <option value="Mr">Mr</option>
        <option value="Ms">Ms</option>
        <option value="Mrs">Mrs</option>
        <option value="Mx">Mx</option>
      </select>

      <label htmlFor="first">Enter first name</label>
      <span>{errors?.first?.message}</span>
      <input id="first" {...register('first')} />

      <label htmlFor="last">Enter last name</label>
      <span>{errors?.last?.message}</span>
      <input id="last" {...register('last')} />

      <label htmlFor="gender">Enter gender</label>
      <span>{errors?.gender?.message}</span>
      <select id="gender" {...register('gender')}>
        <option value="">Please select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <label htmlFor="dob">Enter date of birth</label>
      <span>{errors?.dob?.message}</span>
      <input
        id="dob"
        {...register('dob')}
        type="date"
      />

      <div>
        <button onClick={handleSubmit(onSubmit)}>Submit</button>
      </div>
    </>
  );
}

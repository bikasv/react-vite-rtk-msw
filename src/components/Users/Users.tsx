import { useDeleteUserMutation, useGetUsersQuery } from '@/store/usersSlice';

import css from './Users.module.css';

export function Users() {
  const [deleteUser] = useDeleteUserMutation();
  const { data, isLoading, error } = useGetUsersQuery();

  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }

  if (error) {
    return null;
  }

  function handleDelete(id: number) {
    deleteUser(id);
  }

  return (
    <div className={css.container}>
      {data?.map((user) => (
        <div key={user.id} className={css.card}>
          <p className={css.name}>
            {user.name}
            <span className={css.gender}>{user.gender}</span>
          </p>

          <p>{user.dob}</p>

          <p>
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </p>

          <p>
            <a href={`tel:${user.phone}`}>{user.phone}</a>
          </p>

          <span className={css.cross} onClick={() => handleDelete(user.id)}>&times;</span>
        </div>
      ))}
    </div>
  );
}

import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import type { RootState } from '@/store';
import type { FormattedUserType, UsersType, UserType } from '@/types/UsersTypes';
import { formatDate } from '@/utilities';

import { api } from './api';

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<FormattedUserType[], void>({
      query: () => '/users',
      providesTags: ['UsersTag'],
      transformResponse: (response: UsersType) => {
        const formattedResponse = response?.results.map((result) => {
          const name = `${result.name.title} ${result.name.first} ${result.name.last}`;
          const dob = formatDate(result.dob);

          return {
            ...result,
            dob,
            name,
          };
        });

        return formattedResponse;
      },
    }),
    getUser: builder.query<UserType, number>({
      query: (id) => `/users/${id}`,
    }),
    addUser: builder.mutation<UserType, void>({
      invalidatesTags: ['UsersTag'],
      queryFn: async(_arg, { getState }, _extraOptions, fetchWithBaseQuery) => {
        const { about, contact } = getState() as RootState;

        const body = {
          dob: (new Date(about.dob)).toISOString(),
          email: contact.email,
          gender: about.gender,
          name: {
            first: about.first,
            last: about.last,
            title: about.title,
          },
          phone: contact.phone,
        };

        const addedUser = await fetchWithBaseQuery({
          url: '/users',
          method: 'POST',
          body,
        });

        if (addedUser.error) {
          return { error: addedUser.error as FetchBaseQueryError };
        }

        const addedUserData = addedUser.data as UserType;

        return { data: addedUserData };
      },
    }),
    deleteUser: builder.mutation<object, string | number>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['UsersTag'],
      onQueryStarted(id, { dispatch, queryFulfilled }) {
        const update = dispatch(
          usersApi.util.updateQueryData('getUsers', undefined, ((users) => {
            const res = users.filter((entry) => entry.id !== Number(id));

            return res;
          })),
        );

        queryFulfilled.catch(() => update.undo());
      },
    }),
  }),
  overrideExisting: true,
});

export const {
  useAddUserMutation,
  useDeleteUserMutation,
  useGetUserQuery,
  useGetUsersQuery,
} = usersApi;

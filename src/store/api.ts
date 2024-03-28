import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import constants from '../constants';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: constants.base,
    prepareHeaders: (headers) => {
      headers.set('content-type', 'application/json');

      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ['UsersTag'],
});

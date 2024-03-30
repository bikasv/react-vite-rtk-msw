import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import aboutReducer from '@/components/AboutYou/aboutSlice';
import contactReducer from '@/components/Contact/contactSlice';

import { api } from './api';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    about: aboutReducer,
    contact: contactReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    api.middleware,
  ]),
});

setupListeners(store.dispatch);

export const useStoreDispatch: () => StoreDispatch = useDispatch;
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import aboutReducer from '@/components/AboutYou/aboutSlice';
import contactReducer from '@/components/Contact/contactSlice';

import { api } from './api';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  about: aboutReducer,
  contact: contactReducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
      api.middleware,
    ]),
  });
};

export const useStoreDispatch: () => StoreDispatch = useDispatch;
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type StoreDispatch = AppStore['dispatch'];

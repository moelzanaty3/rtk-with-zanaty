import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import usersReducer from '../features/users/usersSlice'
import { apiSlice } from '../features/dogs/dogsApiSlice'
/**
 * configureStore -> this is a wrapper around the basic Redux Create Store Function.
 * It automatically  a store with the right defaults. For example,
 *  1. turns on the Redux Dev Tools Extensions.
 *  2. adds whatever Redux middleware you supply, includes redux-thunk by default
 *  3. automatically combine your slice reducers
 */

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(apiSlice.middleware)
  },
})

/**
 * we're taking the store's dispatch function and we're asking TypeScript, "what is this thing?
 * We're exporting the type of that function as a thing we can use.
 */
export type AppDispatch = typeof store.dispatch

/**
 * There's nothing specific to Redux Toolkit about this. It's using TypeScript's inference to figure out as much as possible, so that we don't have to declare this ourselves. And so if we add more slice reducers to our store, that type updates automatically.
 */
export type RootState = ReturnType<typeof store.getState>

import { configureStore } from '@reduxjs/toolkit'
import darkReducer from './slices/darkSlice'

export const store = configureStore({
  reducer: {
    darkMode: darkReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
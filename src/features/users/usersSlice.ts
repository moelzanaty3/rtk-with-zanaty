import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import IUser from './IUser'

type UserState = {
  // In `status` we will watch
  // if users are being loaded.
  status: 'loading' | 'idle'
  // `error` will contain an error message.
  error: string | null
  list: IUser[]
}

type FetchUserError = {
  message: string
}

export const fetchUsers = createAsyncThunk<IUser[], number, { rejectValue: FetchUserError }>(
  'users/fetch',
  async (limit: number, thunkApi) => {
    const response = await fetch(`https://randomuser.me/api/?results=${limit}&nat=us,ca`)

    // Check if status is not okay:
    if (response.status !== 200) {
      // Return the error message:
      return thunkApi.rejectWithValue({
        message: 'Failed to fetch Users.',
      })
    }
    // Get the JSON from the response:
    const data = await response.json()
    const users: IUser[] = data.results
    // Return result:
    return users
  },
)

const initialState = {
  list: [],
  error: null,
  status: 'idle',
} as UserState

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // ...
  },
  // In `extraReducers` we declare
  // all the actions:
  extraReducers: builder => {
    // When we send a request,
    // `fetchTodos.pending` is being fired:
    builder.addCase(fetchUsers.pending, state => {
      // At that moment,
      // we change status to `loading`
      // and clear all the previous errors:
      state.status = 'loading'
      state.error = null
    })

    // When a server responses with the data,
    // `fetchTodos.fulfilled` is fired:
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      // We add all the new todos into the state
      // and change `status` back to `idle`:
      state.list.push(...payload)
      state.status = 'idle'
    })

    // When a server responses with an error:
    builder.addCase(fetchUsers.rejected, (state, { payload }) => {
      // We show the error message
      // and change `status` back to `idle` again.
      if (payload) state.error = payload.message
      state.status = 'idle'
    })
  },
})
export default usersSlice.reducer

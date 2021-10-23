import { createSlice, PayloadAction } from '@reduxjs/toolkit'

/**
 * createSlice -> accepts an object of reducer functions, a slice name, and an initial state value,
 * automatically generates a slice reducer with corresponding action creators and action types.
 */

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      // it's okay to do this because immer make it immutable under the hood
      state.value++
    },
    decrement: state => {
      state.value--
    },
    reset: state => {
      state.value = 0
    },
    incrementBy: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, reset, incrementBy } = counterSlice.actions

export default counterSlice.reducer

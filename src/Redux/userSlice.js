
import { createSlice } from '@reduxjs/toolkit'



const userSlice = createSlice({
  name: 'users',

  initialState: {
    generatedUsers: [],
    savedUsers: [],
  },

  reducers: {
    addUser: (state, action) => {
    state.generatedUsers.push(action.payload)
    },

    saveUser: (state, action) => {
      const userExists = state.savedUsers.some(
        (user) => user.login.uuid === action.payload.login.uuid
      )

      if (!userExists) {
        state.savedUsers.push(action.payload)
      }
    },

    removeUser: (state, action) => {
      state.savedUsers = state.savedUsers.filter(
        (user) => user.login.uuid !== action.payload
      )
    },

    clearUsers: (state) => {
      state.generatedUsers = []
    },
  },
})

export const { addUser, saveUser, removeUser, clearUsers } =
  userSlice.actions

export default userSlice.reducer

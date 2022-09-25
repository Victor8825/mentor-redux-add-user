import { createSlice } from '@reduxjs/toolkit';

const usersInitialState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.users.push(payload);
    },
    deleteUser: (state, { payload }) => {
      state.users = state.users.filter(({ id }) => id !== payload);
    },
    toggleStatus: (state, { payload }) => {
      const index = state.users.findIndex(user => user.id === payload);
      const status = state.users[index].status === 'yes' ? 'no' : 'yes';
      state.users[index] = {
        ...state.users[index],
        status,
      };
    },
  },
});

export const { addUser, deleteUser, toggleStatus } = usersSlice.actions;
export default usersSlice.reducer;

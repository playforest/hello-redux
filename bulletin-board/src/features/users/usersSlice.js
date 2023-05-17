import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'dude lebowski' },
    { id: '1', name: 'neil young' },
    { id: '1', name: 'dave gray' },
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer
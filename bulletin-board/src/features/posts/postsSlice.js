import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'learning redux toolkit', content: "i've heard good things" },
    { id: '2', title: 'slices...', content: 'the more i say slice, the more i want pizza' }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload)
        }
    }
})

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer
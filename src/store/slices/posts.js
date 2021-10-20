import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        authors: [],
        search: ""
    },
    reducers: {
        setPosts(state,action){
            state.posts = action.payload;
        },
        setSearch(state,action){
            state.search = action.payload;
        }
    }
});

export const actions = {...slice.actions};

export default slice.reducer;

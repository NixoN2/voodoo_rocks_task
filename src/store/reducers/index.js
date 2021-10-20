import {combineReducers} from "redux";
import posts from "../slices/posts";

export const rootReducer = combineReducers({
    posts: posts
});

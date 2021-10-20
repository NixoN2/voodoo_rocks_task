import {
    instance,
} from "./instance";

const getPosts = async () => {
    return await instance.get("/posts");
}

const getPostsAuthors = async () => {
    return await instance.get("/users");
}


export {
    getPosts,
    getPostsAuthors
}


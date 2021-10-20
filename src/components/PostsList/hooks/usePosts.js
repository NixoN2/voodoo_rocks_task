import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getPosts, getPostsAuthors} from "../../../api";
import {actions} from "../../../store/store";
import {useSelector} from "react-redux";
export const usePosts = () => {
    const {search} = useSelector(state=>state.posts);
    const dispatch = useDispatch();
    useEffect(()=>{
        getPostsAuthors()
        .then(({data})=> {
            return data
        })
        .then((authors)=>{
            getPosts().then(({data}) =>{
                const findAuthor = (post) => authors.find(author=>author.id === post.userId).name;
                const postsWithAuthors = data.map(post => Object.assign({...post, author:findAuthor(post)})).filter(post=>post.author.toLowerCase().includes(search.toLowerCase()));
                dispatch(actions.setPosts(postsWithAuthors));
            })
        })
    },[search])
}

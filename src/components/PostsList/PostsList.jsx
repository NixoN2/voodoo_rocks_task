import {useSelector} from "react-redux";
import {usePosts} from "./hooks/usePosts";
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle
} from 'reactstrap';
const PostsList = () => {
    usePosts();
    const {posts} = useSelector(state=>state.posts);
    return (
        <div className="flex-wrap d-flex mt-5 justify-content-around">
            {posts && posts.map((post) =>
                <div key={post.id} className="m-1 col-sm-12 col-md-3">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">{post.title}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{post.author}</CardSubtitle>
                            <CardText>{post.body}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )}
        </div>
    )
}
export default PostsList;
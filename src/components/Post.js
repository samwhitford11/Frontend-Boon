import { Link } from "react-router-dom";

const Post = (props) => {
    const post = props.post;

    return (
      <div>
          <Link to={`/post/${post._id}`}>
            <h1>{post.name}</h1>
          </Link>  
        </div>
    );
  };
  
  export default Post;



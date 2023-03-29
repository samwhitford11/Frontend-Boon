import { Link, Form } from "react-router-dom";

const Post = (props) => {
    const post = props.post;

    return (
      <div>
          <Link to={`/post/${post._id}`}>
            <h1 className="text-xl" >{post.name}</h1>
          </Link>  
          <Form action={`/update/${post._id}`} method="post">
                <input type="text" name="name" placeholder='Name'/>
                <button>Update</button>
             </Form>
             <Form action={`/delete/${post._id}`} method="post">
                <button>Delete</button>
             </Form>   
        </div>
    );
  };
  
  export default Post;



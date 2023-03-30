import { Link, Form } from "react-router-dom";
import {AiFillEdit} from 'react-icons/ai'
import {TiDelete} from 'react-icons/ti'

const Post = (props) => {
    const post = props.post;

    return (
      <Form>
      <fieldset>
          <Link to={`/post/${post._id}`}>
            <h1 className="text-xl bg-gray-200" >{post.name}</h1>
          </Link>  
          <Form action={`/update/${post._id}`} method="post">
                <input type="text" name="name" placeholder='Name'/>
                <button className="bg-transparent hover:bg-black-500 text-black-700 hover:text-white py-1 px-1"><AiFillEdit size={20}/></button>
             </Form>
             <Form action={`/delete/${post._id}`} method="post">
                <button className="bg-transparent hover:bg-black-500 text-black-700 hover:text-red-400 py-1 px-1"><TiDelete size={20}/></button>
             </Form>   
        </fieldset>
       </Form> 
    );
  };
  
  export default Post;



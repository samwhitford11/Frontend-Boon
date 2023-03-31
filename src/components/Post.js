import { Link, Form } from "react-router-dom";
import {AiFillEdit} from 'react-icons/ai'
import {TiDelete} from 'react-icons/ti'

const Post = (props) => {
    const post = props.post;

    return (
      <div className="flex justify-center py-2 w-96 py-4flex flex-col max-w-[600px] bg-gray-200 p-5 rounded overflow-hidden shadow-lg">
          <Link className="bg-gray-200 my-5 max-w-sm rounded overflow-hidden shadow-lg" to={`/post/${post._id}`}>
            <h1 className="text-xl bg-green-100 py-1 flex justify-center" >{post.name}</h1>
          </Link>  
          <Form action={`/update/${post._id}`} method="post">
                <input className="my-4 pl-2 mb-2 bg-gray-50 border border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 bg-white dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="name" placeholder='Edit Name'/>
                <button className="bg-transparent hover:bg-black-500 text-black-700 hover:text-white py-1 px-1"><AiFillEdit size={20}/></button>
             </Form>
             <Form className="flex justify-center" action={`/delete/${post._id}`} method="post">
                <button className="flex justify-items-center bg-transparent hover:bg-black-500 text-black-700 hover:text-red-400 py-1 px-1 inline"><TiDelete size={30}/>Delete</button>
             </Form>   
       </div> 
    );
  };
  
  export default Post;



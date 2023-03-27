import React from 'react';
import { useLoaderData, Form } from "react-router-dom";
import Post from "../components/Post";


const Index = (props) => {
    const people = useLoaderData()
    
    return <>

  <div>
    <h1>Your People:</h1>
  </div>
   <div>{people.map(post => { 
    return (
        
        <div key={post._id}>
            <Post  post={post}/>
             <Form action={`/delete/${post._id}`} method="post">
                <button>Delete</button>
             </Form>
             <Form action={`/update/${post._id}`} method="post">
                <input type="text" name="name" placeholder='Name'/>
                <button>Update</button>
             </Form>
        </div>
       ) 
    })}  
   </div> 
    
    <div>
        <h1>Add New Person</h1>
        
        <Form action="/create" method="post">
            <input type="text" name="name" placeholder="Name"/>
            <button>ADD</button>
        </Form>

    </div>
    
    </>
}

export default Index
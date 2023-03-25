import React from 'react';
import { useLoaderData, Form } from "react-router-dom";
import Post from "../components/Post";


const Index = (props) => {
    const people = useLoaderData()
console.log("people", people)
    return <>

  <div>
    <h1>Your People:</h1>
  </div>
   <div>{people.map(post => <Post key={post._id} post={post}/>)}
   </div> 
    
    <div>
        <h1>Add New Person</h1>
        
        <Form className="indexForm" action="/create" method="post">
            <input type="text" name="name" placeholder="Name"/>
            <button>ADD</button>
        </Form>

    </div>
    
    </>
}

export default Index
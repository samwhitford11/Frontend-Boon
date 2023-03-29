import React from 'react';
import { useLoaderData, Form } from "react-router-dom";
import Post from "../components/Post";


const Index = (props) => {
    const people = useLoaderData()
    
    return <>
<div>
  <div>
    <h1 className='text-2xl font-medium'>Your List</h1>
  </div>

   <div className='bg-blue-200'>{people.map(post => { 
    return (
        
        <div key={post._id}>
            <Post  post={post}/>
            
        </div>
       ) 
    })}  
   </div> 
</div>
<div>
    <div className=' bg-gray-200 p-5 place-content: center' >
        
        
        <Form className="max-w-md py-4" action="/create" method="post">
            <h1 className='text-black pt-3 pb-4 text-xl'>Add New Person</h1>
            <input type="text" name="name" placeholder="Name" className='bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
            <button className='mt-3 bg-blue-400 hover:bg-blue-300 text-white font-bold py-1 px-4 border-b-4 border-blue-500 hover:border-blue-300 rounded'>ADD</button>
        </Form>

    </div>
 </div>
    </>
}

export default Index

{/* <div class="mb-6">
    <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default input</label>
    <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div> */}

// className='flex flex-col max-w-[600px] w-full'
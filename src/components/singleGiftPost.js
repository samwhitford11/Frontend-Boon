import { Link, useLoaderData, Form} from "react-router-dom";
import {GrFormNextLink} from "react-icons/gr"
import {TiDelete} from 'react-icons/ti'
import { useNavigate } from "react-router-dom";

const SingleGiftPost = (props) => {
    const gift = props.gift;
    const person = useLoaderData()
    const navigate = useNavigate()
    return (
      <div className="flex justify-center">
          <Link  
          onClick={(e)=>{
        e.preventDefault()
        
        if (e.target.tagName==="A"){
            // navigate (gift.link)
            window.open(gift.link)
        }
      }} className="bg-gray-200 border my-5 max-w-sm rounded overflow-hidden shadow-lg" to={`/post/${gift._id}`}>
            <img className="w-full" src={gift.image} alt="item"/>
            <div className="px-6 py-4">
            <h1 className="font-bold text-xl mb-2">{gift.item}</h1></div>
            <div>
            <a className="inline-block bg-blue-300 rounded-full px-3 py-1 font-semibold mr-2 mb-2 hover:bg-blue-200 text-black-700 hover:text-white-100 overflow-hidden shadow-lg" href={gift.link} target="_blank" rel="noopener noreferrer">Link<GrFormNextLink size={20}/></a>
            <h2>Notes: </h2>
            </div>
            <p className="px-6 pt-2 pb-2">{gift.notes}</p>
          </Link>
          <Form action={`/delete/post/${gift._id}`} method="post">
                <button className="bg-transparent hover:bg-black-500 text-black-700 hover:text-red-400 py-1 px-1"><TiDelete size={20}/></button>
                </Form>

          <Form className='flex flex-col justify-center max-w-[600px] bg-gray-200 w-full p-5 border my-5 max-w-sm rounded overflow-hidden shadow-lg' action={`/update/post/${gift._id}`} method="post">
                <h1 className="text-xl">Edit Item</h1>
                    <input type="hidden" name="personid" value={person._id}/>
                    
                    <input defaultValue={gift.item} className="my-4 pl-2 mb-2 bg-gray-50 border border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 bg-white dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"  type="text" name="item" placeholder="Item"/>

                    <input defaultValue={gift.image}className="my-1 pl-2 mb-2 bg-gray-50 border border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 bg-white dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"  type="text" name="image" placeholder="Image URL"/>

                    <input defaultValue={gift.link} className="my-1 pl-2 mb-2 bg-gray-50 border border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 bg-white dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"  type="text" name="link" placeholder="Link to item"/>

                    <textarea defaultValue={gift.notes} className="my-2 pl-2 mb-2 bg-gray-50 border border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 bg-white dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" name='notes' rows='3' placeholder='Notes'></textarea>
                <button className='bg-blue-400 hover:bg-blue-300 text-white font-bold py-1 px-4 border-b-4 border-blue-500 hover:border-blue-300 rounded '>Update</button>
                </Form>      
        </div>
    );
  };
  
  export default SingleGiftPost;

//   <div class="max-w-sm rounded overflow-hidden shadow-lg">
//   <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains">
//   <div class="px-6 py-4">
//     <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
//     <p class="text-gray-700 text-base">
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
//     </p>
//   </div>
//   <div class="px-6 pt-4 pb-2">
//     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
//     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
//     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
//   </div>
// </div>
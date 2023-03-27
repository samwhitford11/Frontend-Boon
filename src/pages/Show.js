import { Link, useLoaderData, Form} from "react-router-dom";
import SingleGiftPost from "../components/singleGiftPost";

const Show = (props) => {
    const person = useLoaderData()
console.log("person", person.gifts)
   
    return(
        <div>
            <h1>{person.name}</h1>
            <div>{person.gifts.map(post => <SingleGiftPost key={post._id} gift={post}/>)}
            </div> 

            <div className="flex justify-center items-center py-4">
                <h1>Add New Gift Idea</h1>
                <Form action="/create" method="post" className='flex flex-col max-w-[600px] w-full bg-gray-200 p-5'>
                    <input type="text" name="item" placeholder="Item"/>
                    <input type="text" name="image" placeholder="Image URL"/>
                    <input type="text" name="link" placeholder="Link to item"/>
                    <textarea name='notes' rows='3' placeholder='Notes'></textarea>
                    <button>Add</button>

                </Form>
            </div>
                <Link to="/">
                    <button>Return</button>
                </Link>
        </div>
    )
}

export default Show
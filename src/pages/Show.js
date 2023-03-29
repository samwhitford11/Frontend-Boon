import { Link, useLoaderData, Form} from "react-router-dom";
import SingleGiftPost from "../components/singleGiftPost";


const Show = (props) => {
    const person = useLoaderData()

    return <>

    <div>
        <h1 className="text-2xl py-4">{person.name}</h1>
    </div>

    <div>{person.gifts.map(post => {
        return (

            <div key={post._id}>
                <SingleGiftPost  gift={post}/>
                <Form action={`/delete/${post._id}`} method="post">
                <button>Delete</button>
                </Form>
                <Form action={`/update/${post._id}`} method="post">
                    <input type="text" name="item" placeholder="Item"/>
                    <input type="text" name="image" placeholder="Image URL"/>
                    <input type="text" name="link" placeholder="Link to item"/>
                    <textarea name='notes' rows='3' placeholder='Notes'></textarea>
                <button>Update</button>
                </Form>
            </div>
        )
    })}
    </div> 
    
    <div>
            <div className="py-4">
                
                <Form action="/create/post" method="post" className='flex flex-col max-w-[600px] w-full bg-gray-200 p-5'>
                    <h1>Add New Gift Idea</h1>
                    <input type="hidden" name="personid" value={person._id}/>
                    <input className="my-4 py-1 pl-2" type="text" name="item" placeholder="Item"/>
                    <input className="mb-4 py-1 pl-2" type="text" name="image" placeholder="Image URL"/>
                    <input className="mb-4 py-1 pl-2" type="text" name="link" placeholder="Link to item"/>
                    <textarea className="mb-4 py-1 pl-2" name='notes' rows='3' placeholder='Notes'></textarea>
                    <button className='bg-blue-400 hover:bg-blue-300 text-white font-bold py-1 px-4 border-b-4 border-blue-500 hover:border-blue-300 rounded'>Add</button>

                </Form>
            </div>
                <Link to="/">
                    <button className='bg-blue-400 hover:bg-blue-300 text-white font-bold py-1 px-4 border-b-4 border-blue-500 hover:border-blue-300 rounded'>Return</button>
                </Link>
        </div>
    </>
}

export default Show
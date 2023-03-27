import { useLoaderData, Form, Link } from "react-router-dom"
import SingleGiftPost from "../components/singleGiftPost";

const Update = (props) => {
    const gift = useLoaderData()

    return (
        <div>
            <h1>Update</h1>
            <Form action={`/update/${gift.id}`} method="post">
                <input type="text" name="item" placeholder="Item"/>
                    <input type="text" name="image" placeholder="Image URL"/>
                    <input type="text" name="link" placeholder="Link to item"/>
                    <textarea name='notes' rows='3' placeholder='Notes'></textarea>
                    <button>Update</button>
            </Form>
            <Link to="/addgift">
                 <button>Return</button>
            </Link>
        </div>
    )
}

export default Update
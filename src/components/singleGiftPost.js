import { Link } from "react-router-dom";

const SingleGiftPost = (props) => {
    const gift = props.gift;

    return (
      <div>
          <Link to={`/post/${gift._id}`}>
            <h1>{gift.item}</h1>
            <img src={gift.image}/>
            <a href={gift.link}/>
            <h2>{gift.notes}</h2>
          </Link>
        </div>
    );
  };
  
  export default SingleGiftPost;
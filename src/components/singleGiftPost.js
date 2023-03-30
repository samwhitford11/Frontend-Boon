import { Link } from "react-router-dom";

const SingleGiftPost = (props) => {
    const gift = props.gift;

    return (
      <div>
          <Link className="bg-gray-200" to={`/post/${gift._id}`}>
            <h1>{gift.item}</h1>
            <img src={gift.image} alt="item"/>
            <a href={gift.link} target="_blank" rel="noopener noreferrer">Link</a>
            <h2>{gift.notes}</h2>
          </Link>
        </div>
    );
  };
  
  export default SingleGiftPost;
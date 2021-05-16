// Tools
import { Link } from "react-router-dom";

const CardComicChar = ({ title, picture, comicId }) => {
  return (
    <div>
      <Link to={`/comic/${comicId}`}>
        <img src={picture} alt={title + " pic"} style={{ width: "100px" }} />
        <p>{title}</p>
      </Link>
    </div>
  );
};

export default CardComicChar;

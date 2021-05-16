// Tools
import { Link } from "react-router-dom";

const CardComicFav = ({ title, picture, comicId, favComics, setFavComics }) => {
  const handleRemoveFav = () => {
    const newFavComics = [...favComics];
    for (let i in newFavComics) {
      if (newFavComics[i].comicId === comicId) {
        newFavComics.splice(i, 1);
        setFavComics(newFavComics);
      }
    }
  };

  return (
    <div>
      <Link to={`/comic/${comicId}`}>
        <img src={picture} alt={title + " pic"} style={{ width: "100px" }} />
        <p>{title}</p>
      </Link>
      <button onClick={handleRemoveFav}>Retirer à mes favoris</button>
    </div>
  );
};

export default CardComicFav;

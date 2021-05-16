// Tools
import { Link } from "react-router-dom";

const CardComic = ({
  title,
  description,
  picture,
  comicId,
  favComics,
  setFavComics,
}) => {
  const handleAddFav = () => {
    const newFavComics = [...favComics];
    let isPresent = false;
    for (let i of newFavComics) {
      if (i.comicId === comicId) {
        isPresent = true;
      }
    }
    if (!isPresent) {
      newFavComics.push({
        title: title,
        picture: picture,
        comicId: comicId,
      });
      setFavComics(newFavComics);
    }
  };

  return (
    <div>
      <Link to={`/comic/${comicId}`}>
        <img src={picture} alt={title + " pic"} />
        <p>{title}</p>
        <p>{description}</p>
      </Link>
      <button onClick={handleAddFav}>Ajouter à mes favoris</button>
    </div>
  );
};

export default CardComic;

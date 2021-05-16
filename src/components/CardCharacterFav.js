// Tools
import { Link } from "react-router-dom";

const CardCharacterFav = ({
  name,
  picture,
  characterId,
  favCharacters,
  setFavCharacters,
}) => {
  const handleRemoveFav = () => {
    const newFavCharacters = [...favCharacters];
    for (let i in newFavCharacters) {
      if (newFavCharacters[i].characterId === characterId) {
        newFavCharacters.splice(i, 1);
        setFavCharacters(newFavCharacters);
      }
    }
  };

  return (
    <div>
      <Link to={`/comics/${characterId}`}>
        <img src={picture} alt={name + " pic"} style={{ width: "100px" }} />
        <p>{name}</p>
      </Link>
      <button onClick={handleRemoveFav}>Retirer à mes favoris</button>
    </div>
  );
};

export default CardCharacterFav;

// Tools
import { Link } from "react-router-dom";

const CardCharacter = ({
  pictureChar,
  nameChar,
  descriptionChar,
  characterId,
  favCharacters,
  setFavCharacters,
}) => {
  const handleAddFav = () => {
    const newFavCharacters = [...favCharacters];
    let isPresent = false;
    for (let i of newFavCharacters) {
      if (i.characterId === characterId) {
        isPresent = true;
      }
    }

    if (!isPresent) {
      newFavCharacters.push({
        name: nameChar,
        picture: pictureChar,
        characterId: characterId,
      });
      setFavCharacters(newFavCharacters);
    }
  };

  return (
    <div>
      <Link to={`comics/${characterId}`}>
        <img src={pictureChar} alt={nameChar + " pic"} />
        <p>{nameChar}</p>
        <p>{descriptionChar}</p>
      </Link>
      <button onClick={handleAddFav}>Ajouter à mes favoris</button>
    </div>
  );
};

export default CardCharacter;

// Tools
import CardComicFav from "../components/CardComicFav";
import CardCharacterFav from "../components/CardCharacterFav";

const Favourites = ({
  favComics,
  favCharacters,
  setFavComics,
  setFavCharacters,
}) => {
  return (
    <div className="favourites-page">
      <h1>Favoris</h1>
      <section>
        <p>Personnages</p>
        <div>
          {favCharacters.map((elem) => {
            return (
              <CardCharacterFav
                key={elem.characterId}
                characterId={elem.characterId}
                name={elem.name}
                picture={elem.picture}
                favCharacters={favCharacters}
                setFavCharacters={setFavCharacters}
              />
            );
          })}
        </div>
      </section>
      <section>
        <p>Comics</p>
        <div>
          {favComics.map((elem) => {
            return (
              <CardComicFav
                key={elem.comicId}
                comicId={elem.comicId}
                title={elem.title}
                picture={elem.picture}
                favComics={favComics}
                setFavComics={setFavComics}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Favourites;

// Tools
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState, useEffect } from "react";

// Components
import CardCharacter from "../components/CardCharacter";

const Characters = ({ favCharacters, setFavCharacters }) => {
  const [dataCharacters, setDataCharacters] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://beb-marvel-backend.herokuapp.com/characters?skip=${skip}&limit=${limit}&name=${name}`
        );
        if (response.status === 200) {
          setDataCharacters(response.data);
          setIsLoading(false);
          // console.log(response.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [skip, limit, name]);

  const handlePageAdd = () => {
    setPage(page + 1);
    setSkip(skip + limit);
  };
  const handlePageSub = () => {
    setPage(page - 1);
    if (skip >= limit) {
      setSkip(skip - limit);
    } else setSkip(0);
  };

  const handleInput = (event) => {
    setName(event.target.value);
  };

  const handleLimit = async (event) => {
    setLimit(Number(event.target.value));
    if (page > 1 && Number(event.target.value) > skip) {
      setPage(2);
    } else if (page > 1 && Number(event.target.value) <= skip) {
      setPage(skip / Number(event.target.value) + 1);
    }
  };

  return isLoading ? (
    <div className="spin-loading">
      <FontAwesomeIcon icon="spinner" spin />
    </div>
  ) : (
    <div className="characters-page">
      <div className="input-search">
        <input
          type="text"
          name="search-character"
          placeholder="Rechercher un personnage"
          value={name}
          onChange={handleInput}
        />
      </div>

      <div className="page-and-limit">
        <div>
          {page > 1 && <button onClick={handlePageSub}>Page précédente</button>}
          <p>{page}</p>
          {dataCharacters.count > limit * page && (
            <button onClick={handlePageAdd}>Page suivante</button>
          )}
        </div>
        <div>
          <p>Résultats par page : </p>
          <select name="number-per-page" value={limit} onChange={handleLimit}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>

      <div className="content-chars-comics">
        {dataCharacters.results.map((elem) => {
          return (
            <div className="card-chars-comics">
              <CardCharacter
                key={elem._id}
                nameChar={elem.name}
                descriptionChar={elem.description}
                pictureChar={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                characterId={elem._id}
                favCharacters={favCharacters}
                setFavCharacters={setFavCharacters}
              />
            </div>
          );
        })}
      </div>

      <div className="page-and-limit">
        <div>
          {page > 1 && <button onClick={handlePageSub}>Page précédente</button>}
          <p>{page}</p>
          {dataCharacters.count > limit * page && (
            <button onClick={handlePageAdd}>Page suivante</button>
          )}
        </div>
        <div>
          <p>Résultats par page : </p>
          <select name="number-per-page" value={limit} onChange={handleLimit}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Characters;

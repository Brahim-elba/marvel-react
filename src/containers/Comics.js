// Tools
import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import CardComic from "../components/CardComic";

const Comics = ({ favComics, setFavComics }) => {
  const [dataComics, setDataComics] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://beb-marvel-backend.herokuapp.com/comics?skip=${skip}&limit=${limit}&title=${title}`
        );
        if (response.status === 200) {
          setDataComics(response.data);
          setIsLoading(false);
          // console.log(response.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [skip, limit, title]);

  const handlePageAdd = () => {
    setPage(page + 1);
    setSkip(skip + limit);
  };
  const handlePageSub = () => {
    setPage(page - 1);
    if (skip >= limit) {
      setSkip(skip - limit);
    }
  };

  const handleInput = (event) => {
    setTitle(event.target.value);
  };

  const handleLimit = (event) => {
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
    <div className="comics-page">
      <div className="input-search">
        <input
          type="text"
          name="search-comic"
          placeholder="Rechercher un comic"
          value={title}
          onChange={handleInput}
        />
      </div>

      <div className="page-and-limit">
        <div>
          {page > 1 && <button onClick={handlePageSub}>Page précédente</button>}
          <p>{page}</p>
          {dataComics.count > limit * page && (
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
        {dataComics.results.map((elem) => {
          return (
            <div className="card-chars-comics">
              <CardComic
                key={elem._id}
                title={elem.title}
                description={elem.description}
                picture={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                comicId={elem._id}
                setFavComics={setFavComics}
                favComics={favComics}
              />
            </div>
          );
        })}
      </div>

      <div className="page-and-limit">
        <div>
          {page > 1 && <button onClick={handlePageSub}>Page précédente</button>}
          <p>{page}</p>
          {dataComics.count > limit * page && (
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

export default Comics;

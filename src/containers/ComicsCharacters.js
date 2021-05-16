// Tools
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CardComicChar from "../components/CardComicChar";

const ComicsCharacters = ({ favComics, setFavComics }) => {
  const { characterId } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://beb-marvel-backend.herokuapp.com/comics/${characterId}`
        );
        setData(response.data);
        setIsLoading(false);
        // console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [characterId]);

  return isLoading ? (
    <p>En cours de chargement</p>
  ) : (
    <div className="comics-characters-page">
      {data.comics.map((elem) => {
        return (
          <div>
            <CardComicChar
              key={elem._id}
              title={elem.title}
              picture={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
              comicId={elem._id}
              setFavComics={setFavComics}
              favComics={favComics}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ComicsCharacters;

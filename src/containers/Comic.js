// Tools
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CardComic from "../components/CardComic";

const Comic = ({ favComics, setFavComics }) => {
  const { comicId } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://beb-marvel-backend.herokuapp.com/comic/${comicId}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [comicId]);

  return isLoading ? (
    <p>En cours de chargement</p>
  ) : (
    <div className="comic-page">
      <CardComic
        title={data.title}
        description={data.description}
        picture={`${data.thumbnail.path}.${data.thumbnail.extension}`}
        setFavComics={setFavComics}
        favComics={favComics}
        comicId={comicId}
      />
    </div>
  );
};

export default Comic;

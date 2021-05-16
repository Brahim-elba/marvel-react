// Tools
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <nav>
        <Link to="/characters">
          <button className="link-home">Personnages</button>
        </Link>
        <Link to="/comics">
          <button className="link-home">Comics</button>
        </Link>
        <Link to="/favourites">
          <button className="link-home">Favoris</button>
        </Link>
      </nav>
    </div>
  );
};

export default Home;

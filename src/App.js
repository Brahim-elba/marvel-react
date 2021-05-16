import "./App.css";

// TODO LIST - CE QUI RESTE A FAIRE
// 1 - Finaliser le CSS sur toutes les pages et améliorer l'expérience utilisateur
// 2 - Rendre persistante les données Cookies
// 3 - Intégrer des commentaires dans les différents containers et components

// Tools
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";

// Containers
import Home from "./containers/Home";
import Header from "./containers/Header";
import Comics from "./containers/Comics";
import ComicsCharacters from "./containers/ComicsCharacters";
import Characters from "./containers/Characters";
import Favourites from "./containers/Favourites";
import Comic from "./containers/Comic";

// Assets
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSpinner,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
library.add(faSpinner, faHeart, faSearch);

function App() {
  const [favComics, setFavComics] = useState([]);
  const [favCharacters, setFavCharacters] = useState([]);

  Cookies.set("listFavComics", favComics, { expires: 7 });
  Cookies.set("listFavCharacters", favCharacters, { expires: 7 });

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/comics/:characterId">
          <ComicsCharacters setFavComics={setFavComics} favComics={favComics} />
        </Route>
        <Route path="/comic/:comicId">
          <Comic setFavComics={setFavComics} favComics={favComics} />
        </Route>
        <Route path="/comics">
          <Comics setFavComics={setFavComics} favComics={favComics} />
        </Route>
        <Route path="/characters">
          <Characters
            favCharacters={favCharacters}
            setFavCharacters={setFavCharacters}
          />
        </Route>
        <Route path="/favourites">
          <Favourites
            favComics={favComics}
            setFavComics={setFavComics}
            favCharacters={favCharacters}
            setFavCharacters={setFavCharacters}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

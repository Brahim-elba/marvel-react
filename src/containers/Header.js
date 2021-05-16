// Tools
import LogoMarvel from "../assets/img/logo-marvel.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={LogoMarvel} alt="logo-marvel" />
      </Link>
    </div>
  );
};

export default Header;

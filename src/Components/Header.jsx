import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>
        <h3>Home</h3>
      </Link>
      <Link to={"./about"}>
        <h3>About</h3>
      </Link>
      <Link to={"./contact"}>
        <h3>Contact</h3>
      </Link>
      <Link to={"*"}>
        <h3>Error PNF</h3>
      </Link>
    </div>
  );
};

export default Header;

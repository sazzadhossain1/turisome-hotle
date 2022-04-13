import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        <h1 className="title-name">Turisom Hotle</h1>
        <div>
          {" "}
          <Link to="/home">Home</Link>
          <Link to="/login">Login</Link>
          {/* <Link to="/singUp">Sing Up</Link> */}
          <Link to="/singleRoom">Single Room</Link>
          <Link to="/doubleRoom">DoubleRoom</Link>
          <Link to="/familyRoom">Family Room</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);


  const handleSignOut =() =>{
    signOut(auth);
  }
  return (
    <div>
      <div className="header">
        <h1 className="title-name">Turisom Hotle</h1>
        <div>
          {" "}
          <Link to="/home">Home</Link>
          {/* <Link to="/singUp">Sing Up</Link> */}
          <Link to="/singleRoom">Single Room</Link>
          <Link to="/doubleRoom">DoubleRoom</Link>
          <Link to="/familyRoom">Family Room</Link>
          {
            user ?
            <button onClick={handleSignOut} className="button-sign">Sign Out</button>
            :
          <Link to="/login">Login</Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;

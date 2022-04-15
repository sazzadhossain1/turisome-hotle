import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo/google.png";
import "./SingUp.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  if (user) {
    navigate("/home");
  }

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Your two passwords did not match");
      return;
    }
    if (password.length < 6) {
      setError("password must  be 6 characters or longer");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };



  
  return (
    <div className="from-container">
      <div>
        <h1 className="from-title">Sing Up</h1>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <div>
              <label htmlFor="email">Email</label>
              <br />
              <input
                onBlur={handleEmailBlur}
                type="text"
                name="email"
                id=""
                required
              />
            </div>
          </div>

          <div className="input-group">
            <div>
              <label htmlFor="password">Password</label>
              <br />
              <input
                onBlur={handlePasswordBlur}
                type="text"
                name="Password"
                id=""
                required
              />
            </div>
            <div>
              <label className="my-2" htmlFor="password">
                Confirm Password
              </label>
              <br />
              <input
                onBlur={handleConfirmPassword}
                type="password"
                name="confirm-Password"
                id=""
                required
              />
            </div>
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input className="form-submit mt-5" type="submit" value="SingUp" />
        </form>
        <p className="form-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>

        <button className="google-button">
          <img className="google" src={logo} alt="" /> Countinue with Google
        </button>
      </div>
    </div>
  );
};

export default SingUp;

import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../images/logo/google.png";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleUserSingIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate("/home");
  }

  return (
    <div className="from-container">
      <div>
        <h1 className="from-title">Login</h1>
        <form onSubmit={handleUserSingIn}>
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
          </div>

          <br />
          <br />
          <p style={{ color: "red" }}>{error?.message}</p>
          {
              loading && <p>Loading...</p>
          }
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p className="form-link">
          New from this site? <Link to="/singUp">Create an Account</Link>
        </p>

        <button className="google-button">
          <img className="google" src={logo} alt="" /> Countinue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;

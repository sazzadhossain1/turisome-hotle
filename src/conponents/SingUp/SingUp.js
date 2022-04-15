import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo/google.png";
import "./SingUp.css";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SingUp = () => {
  const [agree, setAgree] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

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
    console.log('user', user);
  }

  const handleCreateUser = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    if (password !== confirmPassword) {
      setError("Your two passwords did not match");
      return;
    }
    if (password.length < 6) {
      setError("password must  be 6 characters or longer");
      return;
    }

   await createUserWithEmailAndPassword(email, password);
   await updateProfile({ displayName: name});
          console.log('Updated profile');
          navigate("/home");
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
          <input
            onClick={() => setAgree(!agree)}
            className="mt-4 me-2"
            type="checkbox"
            name="terms"
            id="terms"
          />
          <label
            className={agree ? "text-primary" : "text-danger"}
            htmlFor="terms"
          >
            Accept terms and conditions
          </label>

          <p style={{ color: "red" }}>{error}</p>

          <input
            disabled={!agree}
            className="form-submit mt-5"
            type="submit"
            value="SingUp"
          />
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

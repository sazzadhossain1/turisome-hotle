import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../images/logo/google.png";
import gitHub from "../../images/logo/GitHub-Mark.png";
import facebook from "../../images/logo/facebook.png";
import { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

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
    navigate(from, { replace: true });
  }






  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  let errorElement;

  if (error1) {
    errorElement =<div><p className="text-danger">Error: {error1.message}</p></div>
    
  }
if(user1){
  navigate('/home')
}
  return (
    <div>
      {errorElement }
      <div className="from-container">
        <h1 className="from-title">Login</h1>
        <form className="form-f" onSubmit={handleUserSingIn}>
          <div className="input-group">
            <div>
              <div><label className="email-class" htmlFor="email">Email</label>
             
              
              <input
                onBlur={handleEmailBlur}
                type="text"
                name="email"
                id=""
                required
              /></div>
            </div>
          </div>

          <div className="input-group">
            <div>
              <label className="password-class" htmlFor="password">Password</label>
              
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
          {loading && <p>Loading...</p>}
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p className="form-link">
          New from this site? <Link to="/singUp">Create an Account</Link>
        </p>

       <div>
       <button  onClick={()=>signInWithGoogle()} className="google-button">
          <img className="google" src={logo} alt="" /> Countinue with Google
        </button>
       
       </div>
       <button className="google-button">
          <img className="google" src={gitHub} alt="" /> Countinue with Google
        </button>
        <button className="google-button">
          <img className="google" src={facebook} alt="" /> Countinue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;

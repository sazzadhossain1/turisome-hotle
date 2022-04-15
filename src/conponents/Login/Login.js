import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../images/logo/google.png";
import gitHub from "../../images/logo/GitHub-Mark.png";
import facebook from "../../images/logo/facebook.png";
import { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);


    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

    const [signInWithGithub, gituser, gitloading, giterror] = useSignInWithGithub(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
      auth
    );

  const navigate = useNavigate();




const resetPassword = async() =>{
  // const email = emailRef.current.value;
  await sendPasswordResetEmail(email);
  alert('Sent email');


}
  let errorElement;

  

  if (error1 || giterror) {
    errorElement =<div><p className="text-danger">Error: {error1?.message} {giterror?.message}</p></div>
    
  }
 
if(user1 || gituser){
  navigate('/home')
}






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



  if (loading1 || gitloading) {
    return <p>Loading...</p>;
  }


  
  










  return (
    <div className="row">
      
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
        <p className="form-link">
          Forget Password ? <Link to="/singUp" 
          onClick={resetPassword}>Reset password</Link>
        </p>
        
        {errorElement }
       <div>
       <button  onClick={()=>signInWithGoogle()} className="google-button">
          <img className="google" src={logo} alt="" /> Countinue with Google
        </button>
       
       </div>
       <button onClick={() => signInWithGithub()} className="google-button">
          <img className="google" src={gitHub} alt="" /> Countinue with GitHub
        </button>
        <button className="google-button">
          <img className="google" src={facebook} alt="" /> Countinue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;

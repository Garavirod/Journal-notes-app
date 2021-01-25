import React from "react";
import { Link } from "react-router-dom";
import { startGoogleLogin, startLoginEmailPass } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";

export const LoginScreen = () => {

  /* redux dispathcer*/
  const dispatch = useDispatch();

  /* Extract a property from reducer ui */
  const { loading } = useSelector(state => state.ui)
  /* custom hook form */
  const [formvalues, handleInputChange] = useForm(
    {
      email:'gara2@gmail.com',
      password:'123456',
    }
  );

  const {
    email,
    password
  } = formvalues;


  const handleLogin = (e) => {
    e.preventDefault();    
    dispatch( startLoginEmailPass(email,password));
  };


  const handleGoogleLogin = () => {
    dispatch( startGoogleLogin() );
  }

  return (
    <React.Fragment>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
        <input
          className="auth__input"
          autoComplete="off"
          type="text"
          placeholder="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <button disabled={loading} type="submit" className="btn btn-primary btn-block">login</button>
      </form>      
      {/* GOOGLE AUTH */}
      <div className="auth__social-networks">
        <p>Login with social network</p>
        <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
            <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
            />
            </div>
            <p className="btn-text">
            <b>Sign in with google</b>
            </p>
        </div>
      </div>
      <Link className="link" to="/auth/register">Create new account</Link>
    </React.Fragment>
  );
};

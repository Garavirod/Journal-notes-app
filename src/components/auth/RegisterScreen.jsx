import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
  return (
    <React.Fragment>
      <h3 className="auth__title">Register</h3>
      <form>
      <input
          className="auth__input"
          autoComplete="off"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="auth__input"
          autoComplete="off"
          type="text"
          placeholder="email"
          name="email"
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
        />

        <input
          className="auth__input"
          type="password"
          placeholder="Confirm password"
          name="psdConfirm"
        />
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>
      </form>
      <Link className="link" to="/auth/login">
        Already registrated?
      </Link>
    </React.Fragment>
  );
};

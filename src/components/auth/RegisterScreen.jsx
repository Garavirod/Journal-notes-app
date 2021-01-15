import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export const RegisterScreen = () => {
  const [values, handleInputChange] = useForm({
    name:'Rodrgio',
    email:'gara@gmail.com',
    password1:'123456',
    password2:'123456'
  });

  const {
    name,
    email,
    password1,
    password2
  } = values;

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(values);

  }

  return (
    <React.Fragment>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
      <input
          className="auth__input"
          autoComplete="off"
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
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
          name="password1"
          value={password1}
          onChange={handleInputChange}
        />

        <input
          className="auth__input"
          type="password"
          placeholder="Confirm password"
          name="password2"
          value={password2}
          onChange={handleInputChange}
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

import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from 'validator';

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
    if(isValidForm()){
      console.log("Form was correct");
    }

  }

    const isValidForm = () => {
      if(name.trim.length === 0){
        console.log('Name is not valid');
        return false;
      }else if(!validator.isEmail(email)){
        console.log('Email is not valid');
        return false;
      }else if (password1 !== password2  ||   password1.length < 6) {
        console.log('password are not equal and must be formed by at leat 6 characters');
        return false;
      }
      return true;
    }

  return (
    <React.Fragment>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        <div className="auth__alert-error">
          Hello world!
        </div>
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

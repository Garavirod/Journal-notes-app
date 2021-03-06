import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from 'validator';
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from "../../actions/ui";
import { startRegisterWithEmailPsd } from "../../actions/auth";

export const RegisterScreen = () => {
  const dispatch = useDispatch(); //comes from redux for executing actions
  const { msgError } = useSelector(state => state.ui)

  const [values, handleInputChange] = useForm({
    name:'Rodrgio',
    email:'gara2@gmail.com',
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
      dispatch(removeError());
      dispatch(startRegisterWithEmailPsd(email, password1, name));
    }
    
  }

    const isValidForm = () => {
      let flag = true;
      if(name.trim().length === 0){
        dispatch(setError('Name is not valid'));
        flag= false;
      }else if(!validator.isEmail(email)){
        dispatch(setError('Email is not valid'));
        flag= false;
      }else if (password1 !== password2  ||   password1.length < 6) {
        dispatch(setError('password are not equal and must be formed by at leat 6 characters'));
        flag= false;
      }
      return flag;
    }

  return (
    <React.Fragment>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        {
          msgError && 
          (
            <div className="auth__alert-errors">
              {msgError}
            </div>
          )
        }
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

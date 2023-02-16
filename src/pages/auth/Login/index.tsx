import React, { useRef, useState } from "react";
import "./index.scss";
import icon from "../../../assets/images/icon.jpg";
import pablo from "./assets/images/pablo-sign-in.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { RegisteredUsers } from "./types/RegisteredUsers";

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const showPasswordButtonRef =
    useRef() as React.MutableRefObject<HTMLButtonElement>;

  function showPassword() {
    passwordRef.current.focus();

    showPasswordButtonRef.current.innerText =
      passwordRef.current.type === "password" ? "HIDE" : "SHOW";

    passwordRef.current.type =
      passwordRef.current.type === "password" ? "text" : "password";
  }

  const [loginForm, setLoginForm] = React.useState({
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  }

  const [errorMessage, setErrorMessage] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (loginForm.email === "" || loginForm.password === "") {
      setErrorMessage("Please fill in all fields");
      return;
    }

    let encryptedUsers = localStorage.getItem("registeredUsers")
      ? atob(localStorage.getItem("registeredUsers")!)
      : "[]";

    var registeredUsers: RegisteredUsers[] = JSON.parse(encryptedUsers);

    if (
      registeredUsers.find(
        (el) =>
          el.email === loginForm.email && el.password === loginForm.password
      )
    ) {
      navigate("/users");
      return;
    } else {
      setErrorMessage("Wrong credentials, Please signup again after logout");
    }
  }
  return (
    <div className="login">
      <img src={icon} alt="icon" className="login__icon" />
      <div className="login__content">
        <img src={pablo} alt="pablo-image" className="login__hero" />
        <form onSubmit={onSubmit} className="login__form">
          <h1 className="login__form__header">Welcome!</h1>
          <p className="login__form__sub-header">Enter details to login.</p>

          {errorMessage.length > 0 && (
            <div className="signup__alert-error">{errorMessage}</div>
          )}

          <input
            name="email"
            onChange={handleChange}
            className="login__form__input"
            placeholder="Email"
          />
          <div className="login__form__input-password__container">
            <input
              ref={passwordRef}
              name="password"
              onChange={handleChange}
              type="password"
              className="login__form__input-password"
              placeholder="Password"
            />
            <button
              ref={showPasswordButtonRef}
              onClick={showPassword}
              className="login__form__input-password__show-button"
            >
              SHOW
            </button>
          </div>
          <button className="login__form__forgot-password-button">
            Forgot Password?
          </button>

          <button className="login__form__submit-button">LOG IN</button>
          <NavLink to="/signup" className="login__form__signup-button">
            SIGN UP
          </NavLink>
        </form>
      </div>
    </div>
  );
};

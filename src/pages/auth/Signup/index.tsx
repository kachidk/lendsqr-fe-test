import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import icon from "../../../assets/images/icon.jpg";
import pablo from "./assets/images/pablo-sign-in.jpg";
import "./index.scss";
import { RegisteredUsers } from "./types/RegisteredUsers";

export const Signup: React.FC = () => {
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

  const passwordConfirmationRef =
    useRef() as React.MutableRefObject<HTMLInputElement>;
  const showPasswordConfirmationButtonRef =
    useRef() as React.MutableRefObject<HTMLButtonElement>;

  function showPasswordConfirmation() {
    passwordConfirmationRef.current.focus();

    showPasswordConfirmationButtonRef.current.innerText =
      passwordConfirmationRef.current.type === "password" ? "HIDE" : "SHOW";

    passwordConfirmationRef.current.type =
      passwordConfirmationRef.current.type === "password" ? "text" : "password";
  }

  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSignupForm({
      ...signupForm,
      [e.target.name]: e.target.value,
    });
  }

  const [errorMessage, setErrorMessage] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      signupForm.email === "" ||
      signupForm.password === "" ||
      signupForm.passwordConfirmation === ""
    ) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    if (signupForm.password !== signupForm.passwordConfirmation) {
      setErrorMessage("Passwords do not match");
      return;
    }

    let encryptedUsers = localStorage.getItem("registeredUsers")
      ? atob(localStorage.getItem("registeredUsers")!)
      : "[]";

    var registeredUsers: RegisteredUsers[] = JSON.parse(encryptedUsers);

    if (registeredUsers.find((el) => el.email === signupForm.email)) {
      setErrorMessage("User already exists");
      return;
    }

    registeredUsers.push({
      email: signupForm.email,
      password: signupForm.password,
    });

    localStorage.setItem(
      "registeredUsers",
      btoa(JSON.stringify(registeredUsers))
    );

    navigate("/users");
  }

  return (
    <div className="signup">
      <img src={icon} alt="icon" className="signup__icon" />
      <div className="signup__content">
        <img src={pablo} alt="pablo-image" className="signup__hero" />
        <form onSubmit={onSubmit} className="signup__form">
          <h1 className="signup__form__header">Welcome!</h1>
          <p className="signup__form__sub-header">Enter details to Signup.</p>

          {errorMessage.length > 0 && (
            <div className="signup__alert-error">{errorMessage}</div>
          )}

          <input
            name="email"
            onChange={handleChange}
            className="signup__form__input"
            placeholder="Email"
          />
          <div className="signup__form__input-password__container">
            <input
              ref={passwordRef}
              name="password"
              onChange={handleChange}
              type="password"
              className="signup__form__input-password"
              placeholder="Password"
            />
            <button
              ref={showPasswordButtonRef}
              onClick={showPassword}
              className="signup__form__input-password__show-button"
            >
              SHOW
            </button>
          </div>

          <div className="signup__form__input-password__container">
            <input
              ref={passwordConfirmationRef}
              name="passwordConfirmation"
              onChange={handleChange}
              type="password"
              className="signup__form__input-password"
              placeholder="Confirm Password"
            />
            <button
              ref={showPasswordConfirmationButtonRef}
              onClick={showPasswordConfirmation}
              className="signup__form__input-password__show-button"
            >
              SHOW
            </button>
          </div>

          <button type="submit" className="signup__form__submit-button">
            SIGN UP
          </button>
          <NavLink to="/login" className="signup__form__login-button">
            LOG IN
          </NavLink>
        </form>
      </div>
    </div>
  );
};

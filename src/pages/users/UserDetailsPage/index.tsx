import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { User } from "../UsersPage/types/User";
import { GeneralDetails } from "./components/GeneralDetails";
import "./index.scss";

enum TABS {
  GENERAL_DETAILS = "general-details",
}

export const UserDetailsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TABS>(TABS.GENERAL_DETAILS);

  const { userID } = useParams();

  const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

  const user = users.find((user) => user.id === userID);

  return (
    <div className="user-details">
      <NavLink to="/users" className="user-details__back-button">
        <svg
          className="user-details__back-button__icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <p className="user-details__back-button__text">Back to Users</p>
      </NavLink>

      <div className="user-details__header">
        <h1 className="user-details__header__text">User Details</h1>
        <div className="user-details__header__buttons">
          <button className="user-details__header__button user-details__header__button--red">
            Blacklist User
          </button>
          <button className="user-details__header__button user-details__header__button--cyan">
            Activate User
          </button>
        </div>
      </div>

      <div className="user-details__info">
        <div className="user-details__info__small-profile user-details__info__small-profile--divide">
          <div className="user-details__info__small-profile__column-one">
            <img
              src={user?.profile.avatar}
              className="user-details__info__small-profile__column-one__image"
            />
            <div>
              <p className="user-details__info__small-profile__column-one__name">
                {user?.profile.firstName} {user?.profile.lastName}
              </p>
              <p className="user-details__info__small-profile__column-one__text">
                {user?.userName}
              </p>
            </div>
          </div>
          <div className="user-details__info__small-profile__column-two">
            <p className="user-details__info__small-profile__column-two__text">
              User's Tier
            </p>
            <div>
              <span className="fa fa-star user-details__info__small-profile__column-two--star-checked"></span>
              <span className="fa fa-star user-details__info__small-profile__column-two--star-checked"></span>
              <span className="fa fa-star user-details__info__small-profile__column-two--star-checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>
          </div>
          <div className="user-details__info__small-profile__column-three">
            <div className="user-details__info__small-profile__column-three__amount">
              {Intl.NumberFormat("en-NG", {
                style: "currency",
                currency: "NGN",
              }).format(user?.accountBalance ?? 0)}
            </div>
            <div className="user-details__info__small-profile__column-three__account-info">
              {user?.accountNumber}/Providus Bank
            </div>
          </div>
        </div>
        <div className="user-details__info__tab">
          <div
            onClick={() => setActiveTab(TABS.GENERAL_DETAILS)}
            className={[
              "user-details__info__tab__item",
              activeTab === TABS.GENERAL_DETAILS
                ? "user-details__info__tab__item--active"
                : null,
            ].join(" ")}
          >
            General Details
          </div>
          <div className="user-details__info__tab__item">Documents</div>
          <div className="user-details__info__tab__item">Bank Details</div>
          <div className="user-details__info__tab__item">Loans</div>
          <div className="user-details__info__tab__item">Savings</div>
          <div className="user-details__info__tab__item">App and System</div>
        </div>
      </div>

      {activeTab === TABS.GENERAL_DETAILS && <GeneralDetails user={user} />}
    </div>
  );
};

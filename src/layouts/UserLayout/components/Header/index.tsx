import React, { Dispatch, SetStateAction } from "react";
import icon from "../../../../assets/images/icon.jpg";
import "./index.scss";
import avatar from "./images/image 4.jpg";
import { useLogout } from "../../../../utils/useLogout";

type Props = {
  showSiderbar: boolean;
  useShowSiderbar: Dispatch<SetStateAction<boolean>>;
};

export const Header: React.FC<Props> = ({ showSiderbar, useShowSiderbar }) => {
  const logout = useLogout();
  return (
    <div className="user-layout__header">
      <div className="user-layout__header-left">
        <div className="user-layout__header-left__icon-container">
          {showSiderbar ? (
            <svg
              onClick={() => useShowSiderbar(false)}
              className="user-layout__header-left__menu-icon"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <path
                d="M400 145.49L366.51 112L256 222.51L145.49 112L112 145.49L222.51 256L112 366.51L145.49 400L256 289.49L366.51 400L400 366.51L289.49 256L400 145.49z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <svg
              onClick={() => useShowSiderbar(true)}
              className="user-layout__header-left__menu-icon"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={48}
                d="M88 152h336"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={48}
                d="M88 256h336"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={48}
                d="M88 360h336"
              />
            </svg>
          )}

          <img
            src={icon}
            alt="icon"
            className="user-layout__header-left__icon"
          />
        </div>

        <div className="user-layout__header-left__search-container">
          <input type="text" placeholder="Search for anything" />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 12 12"
            >
              <g fill="none">
                <path
                  d="M5 1a4 4 0 1 0 2.452 7.16l2.694 2.693a.5.5 0 1 0 .707-.707L8.16 7.453A4 4 0 0 0 5 1zM2 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0z"
                  fill="currentColor"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div className="user-layout__header-right">
        <a href="#" className="user-layout__header-right__docs-button">
          Docs
        </a>
        <a href="#" className="user-layout__header-right__notification-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
          >
            <path
              d="M427.68 351.43C402 320 383.87 304 383.87 217.35C383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53c-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43C73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
            />
            <path
              d="M320 384v16a64 64 0 0 1-128 0v-16"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
            />
          </svg>
        </a>
        <div className="user-layout__header-right__avatar-container user-layout__header-right__dropdown">
          <img src={avatar} alt="avatar" />
          <p>Adedeji</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
          >
            <path d="M7 10l5 5l5-5z" fill="currentColor" />
          </svg>
          <div className="user-layout__header-right__dropdown-content">
            <div
              onClick={() => logout()}
              className="user-layout__header-right__dropdown-content__item user-layout__header-right__dropdown-content__item--red"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

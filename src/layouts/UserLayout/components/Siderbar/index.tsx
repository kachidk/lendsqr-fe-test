import React, { Dispatch, Fragment, SetStateAction } from "react";
import "./index.scss";
import { useLogout } from "../../../../utils/useLogout";

const routes = [
  {
    path: "#",
    name: "Dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fillRule="evenodd"
          d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    header: "Customers",
    children: [
      {
        path: "/users",
        name: "Users",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
          </svg>
        ),
      },
      {
        path: "#",
        name: "Guarantors",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
          </svg>
        ),
      },
      {
        path: "#",
        name: "Loans",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        path: "#",
        name: "Decision Models",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 640 512"
          >
            <path
              d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4c-16.6 15.6-16.3 40.5-2.1 56c12.7 13.9 39.4 17.6 56.1 2.7c.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1c6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4c-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2l17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6l5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"
              fill="currentColor"
            />
          </svg>
        ),
      },
      {
        path: "#",
        name: "Savings",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 16 16"
          >
            <g fill="none">
              <path
                d="M13.5 8.162a4 4 0 0 0 1.23-1.646c.178.52.27 1.102.27 1.752c0 1.552-.548 2.64-1.11 3.34a4.603 4.603 0 0 1-.89.85V13.5a1.5 1.5 0 0 1-1.5 1.5H11a1 1 0 0 1-1-1H8a1 1 0 0 1-1 1h-.5a1.5 1.5 0 0 1-1.5-1.5v-.213a4.16 4.16 0 0 1-1.69-1.035c-.591-.601-.923-1.352-1.09-1.823a.43.43 0 0 0-.269-.282A1.307 1.307 0 0 1 1 8.891v-.794c0-.576.382-1.082.935-1.24c.104-.03.216-.131.271-.298c.135-.407.394-1.009.87-1.491a5.815 5.815 0 0 1 1.39-1.028V2.163a.76.76 0 0 1 .481-.704a.774.774 0 0 1 .826.15c.253.239.585.524.94.757c.365.239.707.39.986.418h.005a4.009 4.009 0 0 0-.658 2.705c.121 1.029.917 1.647 1.585 1.924l2.39.989c.667.277 1.667.402 2.48-.24zM4.75 7.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5zm3.48-3.58a3 3 0 1 1 4.65 3.458c-.416.328-.987.303-1.477.1l-2.39-.99c-.49-.202-.912-.589-.974-1.115a2.983 2.983 0 0 1 .01-.766l.181-.687zm0 0l-.136.438a3.014 3.014 0 0 1 .136-.438z"
                fill="currentColor"
              />
            </g>
          </svg>
        ),
      },
      {
        path: "#",
        name: "Loan Requests",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 576 512"
          >
            <path
              d="M565.3 328.1c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6c3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9z"
              fill="currentColor"
            />
          </svg>
        ),
      },
      {
        path: "#",
        name: "Whitelist",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 640 512"
          >
            <path
              d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104l-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z"
              fill="currentColor"
            />
          </svg>
        ),
      },
      {
        path: "#",
        name: "Karma",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 640 512"
          >
            <path
              d="M589.6 240l45.6-45.6c6.3-6.3 6.3-16.5 0-22.8l-22.8-22.8c-6.3-6.3-16.5-6.3-22.8 0L544 194.4l-45.6-45.6c-6.3-6.3-16.5-6.3-22.8 0l-22.8 22.8c-6.3 6.3-6.3 16.5 0 22.8l45.6 45.6l-45.6 45.6c-6.3 6.3-6.3 16.5 0 22.8l22.8 22.8c6.3 6.3 16.5 6.3 22.8 0l45.6-45.6l45.6 45.6c6.3 6.3 16.5 6.3 22.8 0l22.8-22.8c6.3-6.3 6.3-16.5 0-22.8L589.6 240zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
              fill="currentColor"
            />
          </svg>
        ),
      },
    ],
  },
  {
    header: "Business",
    children: [
      {
        path: "#",
        name: "Orgainization",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
          >
            <path
              d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"
              fill="currentColor"
            />
          </svg>
        ),
      },
      {
        path: "#",
        name: "Loan Products",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 576 512"
          >
            <path
              d="M565.3 328.1c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6c3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9z"
              fill="currentColor"
            />
          </svg>
        ),
      },
      {
        path: "#",
        name: "Savings Products",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 16 16"
          >
            <g fill="none">
              <path
                d="M7.292 1.712c.418-.32.999-.32 1.417 0l4.962 3.793c.632.483.293 1.491-.501 1.495H2.83c-.793-.004-1.133-1.012-.5-1.495l4.962-3.793zM8 5.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5zM3.5 8v3H5V8H3.5zM6 8v3h1.5V8H6zm2.5 0v3H10V8H8.5zM11 8v3h1.5V8H11zm-9 5.25c0-.69.56-1.25 1.25-1.25h9.5c.69 0 1.25.56 1.25 1.25v.25a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-.25z"
                fill="currentColor"
              />
            </g>
          </svg>
        ),
      },
      {
        path: "#",
        name: "Fees and Charges",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
          >
            <path
              d="M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0S128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80s192-35.8 192-80s-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8c29.5 14.3 51.2 33.5 60 57.2z"
              fill="currentColor"
            />
          </svg>
        ),
      },
      {
        path: "#",
        name: "Transactions",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                d="M17.75 2a2.25 2.25 0 0 1 2.245 2.096L20 4.25v3.517a1.748 1.748 0 0 0-1.488.495a1.728 1.728 0 0 0-.427 1.742l.055.153l.042.092h-1.525c-.848 0-1.505.65-1.634 1.459l-.017.144l-.006.147c0 .799.514 1.513 1.333 1.71l.157.03l.166.01h1.515l-.017.034a1.769 1.769 0 0 0 .047 1.512l.09.162l.098.143l.123.138a1.72 1.72 0 0 0 1.488.485v3.527a2.25 2.25 0 0 1-2.096 2.245L17.75 22H6.25a2.25 2.25 0 0 1-2.245-2.096L4 19.75v-3.528a1.718 1.718 0 0 0 1.488-.485l.123-.137l.097-.143a1.785 1.785 0 0 0 .138-1.675l-.017-.034h1.515l.166-.01C8.42 13.6 9 12.848 9 11.998l-.006-.147c-.07-.875-.754-1.603-1.65-1.603H5.818l.042-.092a1.735 1.735 0 0 0-.372-1.895A1.747 1.747 0 0 0 4 7.766L4 4.25a2.25 2.25 0 0 1 2.096-2.245L6.25 2h11.5zM4.781 8.968a.75.75 0 0 1 .073.977l-.073.084l-1.221 1.22h3.784c.362 0 .656.335.656.75c0 .379-.247.693-.567.742l-.09.007H3.56l1.221 1.222a.75.75 0 0 1 .073.976l-.073.084a.75.75 0 0 1-.976.073l-.085-.073l-2.37-2.367A.77.77 0 0 1 1 12a.77.77 0 0 1 .35-.664l2.37-2.367a.75.75 0 0 1 1.061 0zm14.438-.003a.75.75 0 0 1 .976-.073l.084.073l2.37 2.367a.77.77 0 0 1 .351.664a.786.786 0 0 1-.276.611l-.075.053l-2.37 2.367l-.084.073a.75.75 0 0 1-.882.007l-.094-.08l-.073-.084a.75.75 0 0 1-.007-.882l.08-.094l1.221-1.222h-3.784l-.089-.006c-.32-.05-.567-.364-.567-.744s.247-.693.567-.743l.09-.007h3.783l-1.221-1.22l-.073-.083a.75.75 0 0 1 .073-.977z"
                fill="currentColor"
              />
            </g>
          </svg>
        ),
      },
      {
        path: "#",
        name: "Services",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 32 32"
          >
            <path
              d="M29 25h-2v-2h1v-4h-4v1h-2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z"
              fill="currentColor"
            />
            <path
              d="M24 30h-6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1zm-5-2h4v-4h-4z"
              fill="currentColor"
            />
            <path
              d="M15 19.858A3.993 3.993 0 1 1 20 16h2a6 6 0 1 0-7 5.91z"
              fill="currentColor"
            />
            <path
              d="M28.89 13.55l-2.31 2.03l-1.42-1.42l2.41-2.12l-2.36-4.08l-3.44 1.16a9.368 9.368 0 0 0-2.7-1.57L18.36 4h-4.72l-.71 3.55a8.86 8.86 0 0 0-2.71 1.57L6.79 7.96l-2.36 4.08l2.72 2.39a8.895 8.895 0 0 0 0 3.13l-2.72 2.4l2.36 4.08l3.44-1.16a9.368 9.368 0 0 0 2.7 1.57l.71 3.55H15v2h-1.36a2 2 0 0 1-1.96-1.61l-.51-2.52a11.412 11.412 0 0 1-1.31-.75l-2.43.82a2.038 2.038 0 0 1-.64.1a1.973 1.973 0 0 1-1.73-1L2.7 20.96a2 2 0 0 1 .41-2.51l1.92-1.68C5.01 16.51 5 16.26 5 16s.02-.51.04-.76l-1.93-1.69a2 2 0 0 1-.41-2.51l2.36-4.08a1.973 1.973 0 0 1 1.73-1a2.038 2.038 0 0 1 .64.1l2.42.82a11.542 11.542 0 0 1 1.32-.75l.51-2.52A2 2 0 0 1 13.64 2h4.72a2 2 0 0 1 1.96 1.61l.51 2.52a11.412 11.412 0 0 1 1.31.75l2.43-.82a2.038 2.038 0 0 1 .64-.1a1.973 1.973 0 0 1 1.73 1l2.36 4.08a2 2 0 0 1-.41 2.51z"
              fill="currentColor"
            />
          </svg>
        ),
      },
      {
        path: "#",
        name: "Service Account",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
          >
            <path
              d="M10.67 13.02c-.22-.01-.44-.02-.67-.02c-2.42 0-4.68.67-6.61 1.82c-.88.52-1.39 1.5-1.39 2.53V19c0 .55.45 1 1 1h8.26a6.963 6.963 0 0 1-.59-6.98z"
              fill="currentColor"
            />
            <circle cx={10} cy={8} r={4} fill="currentColor" />
            <path
              d="M20.75 16c0-.22-.03-.42-.06-.63l.84-.73c.18-.16.22-.42.1-.63l-.59-1.02a.488.488 0 0 0-.59-.22l-1.06.36c-.32-.27-.68-.48-1.08-.63l-.22-1.09a.503.503 0 0 0-.49-.4h-1.18c-.24 0-.44.17-.49.4l-.22 1.09c-.4.15-.76.36-1.08.63l-1.06-.36a.496.496 0 0 0-.59.22l-.59 1.02c-.12.21-.08.47.1.63l.84.73c-.03.21-.06.41-.06.63s.03.42.06.63l-.84.73c-.18.16-.22.42-.1.63l.59 1.02c.12.21.37.3.59.22l1.06-.36c.32.27.68.48 1.08.63l.22 1.09c.05.23.25.4.49.4h1.18c.24 0 .44-.17.49-.4l.22-1.09c.4-.15.76-.36 1.08-.63l1.06.36c.23.08.47-.02.59-.22l.59-1.02c.12-.21.08-.47-.1-.63l-.84-.73c.03-.21.06-.41.06-.63zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z"
              fill="currentColor"
            />
          </svg>
        ),
      },
      {
        path: "#",
        name: "Settlements",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 640 512"
          >
            <path
              d="M48 0C21.53 0 0 21.53 0 48v64c0 8.84 7.16 16 16 16h80V48C96 21.53 74.47 0 48 0zm208 412.57V352h288V96c0-52.94-43.06-96-96-96H111.59C121.74 13.41 128 29.92 128 48v368c0 38.87 34.65 69.65 74.75 63.12C234.22 474 256 444.46 256 412.57zM288 384v32c0 52.93-43.06 96-96 96h336c61.86 0 112-50.14 112-112c0-8.84-7.16-16-16-16H288z"
              fill="currentColor"
            />
          </svg>
        ),
      },
      {
        path: "#",
        name: "Reports",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
          >
            <path
              d="M500 384c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v308h436zM372.7 159.5L288 216l-85.3-113.7c-5.1-6.8-15.5-6.3-19.9 1L96 248v104h384l-89.9-187.8c-3.2-6.5-11.4-8.7-17.4-4.7z"
              fill="currentColor"
            />
          </svg>
        ),
      },
    ],
  },
  {
    header: "Settings",
    children: [
      {
        path: "#",
        name: "Preferences",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 32 32"
          >
            <g fill="none">
              <path
                d="M28.832 18.472c.248.18.433.436.528.728c.098.294.1.61.009.906a14.269 14.269 0 0 1-3.156 5.443a1.478 1.478 0 0 1-1.671.347l-1.955-.858a1.501 1.501 0 0 0-.68-.128a1.474 1.474 0 0 0-.66.2a1.472 1.472 0 0 0-.727 1.124l-.235 2.13a1.48 1.48 0 0 1-1.13 1.276c-2.076.495-4.24.495-6.316 0a1.484 1.484 0 0 1-1.125-1.27l-.235-2.126a1.483 1.483 0 0 0-.485-.94a1.5 1.5 0 0 0-1.58-.255l-1.955.859a1.477 1.477 0 0 1-1.668-.343a14.267 14.267 0 0 1-3.16-5.45a1.484 1.484 0 0 1 .536-1.632l1.725-1.275a1.488 1.488 0 0 0 0-2.4l-1.725-1.273a1.48 1.48 0 0 1-.536-1.623A14.249 14.249 0 0 1 5.79 6.467c.14-.151.31-.271.5-.351a1.5 1.5 0 0 1 1.17 0l1.947.858a1.493 1.493 0 0 0 2.073-1.206l.236-2.122a1.482 1.482 0 0 1 1.148-1.281a15.462 15.462 0 0 1 3.146-.362c1.052.012 2.1.133 3.127.362a1.476 1.476 0 0 1 1.147 1.284l.236 2.12a1.483 1.483 0 0 0 2.067 1.2l1.946-.857a1.483 1.483 0 0 1 1.674.346a14.231 14.231 0 0 1 3.157 5.44a1.476 1.476 0 0 1-.537 1.63l-1.72 1.273a1.48 1.48 0 0 0-.004 2.395l1.729 1.276zM16 20a4 4 0 1 0 0-8a4 4 0 0 0 0 8z"
                fill="currentColor"
              />
            </g>
          </svg>
        ),
      },
      {
        path: "#",
        name: "Fees and Pricing",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                d="M12 8V2H6a2 2 0 0 0-2 2v7.035A3.5 3.5 0 0 1 7 14.5v.025l2.013-2.012a1.75 1.75 0 1 1 2.474 2.474L9.475 17H9.5a3.5 3.5 0 0 1 3.163 5H18a2 2 0 0 0 2-2V10h-6a2 2 0 0 1-2-2zm-6.873 8.398A2.492 2.492 0 0 1 3.5 17a2.5 2.5 0 1 1 1.627-.602zM4 13.634a1 1 0 1 0-1 1.732a1 1 0 0 0 1-1.732zm6.78.646a.75.75 0 1 0-1.06-1.06l-7.5 7.5a.75.75 0 1 0 1.06 1.06l7.5-7.5zM7 20.5A2.496 2.496 0 0 0 9.5 23a2.496 2.496 0 0 0 2.5-2.5a2.5 2.5 0 0 0-5 0zm3.5 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0zm3-12.5V2.5l6 6H14a.5.5 0 0 1-.5-.5z"
                fill="currentColor"
              />
            </g>
          </svg>
        ),
      },
      {
        path: "#",
        name: "Audit Logs",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 32 32"
          >
            <path d="M18 19h12v2H18z" fill="currentColor" />
            <path d="M18 23h12v2H18z" fill="currentColor" />
            <path d="M18 27h8v2h-8z" fill="currentColor" />
            <path
              d="M24 4a3.996 3.996 0 0 0-3.858 3H12V4H4v8h8V9h8.142a3.94 3.94 0 0 0 .425 1.019L10.019 20.567A3.952 3.952 0 0 0 8 20a4 4 0 1 0 3.858 5H16v-2h-4.142a3.94 3.94 0 0 0-.425-1.019l10.548-10.548A3.952 3.952 0 0 0 24 12a4 4 0 0 0 0-8zm-14 6H6V6h4zM8 26a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2zm16-16a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2z"
              fill="currentColor"
            />
          </svg>
        ),
      },
      {
        path: "#",
        name: "System Messages",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
          >
            <path
              d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 12H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z"
              fill="currentColor"
            />
          </svg>
        ),
      },
    ],
  },
];

type Props = {
  showSiderbar: boolean;
  useShowSiderbar: Dispatch<SetStateAction<boolean>>;
};

export const Sidebar: React.FC<Props> = ({ showSiderbar }) => {
  const logout = useLogout();
  return (
    <div className="user-layout__sidebar">
      <div
        className={[
          "user-layout__sidebar-left",
          showSiderbar ? "user-layout__sidebar--overlay-ontop" : null,
        ].join(" ")}
      >
        <div className="user-layout__siderbar-left__mobile-contents">
          <div className="user-layout__siderbar-left__mobile-contents__search-container">
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
          <div className="user-layout__siderbar-left__mobile-contents__buttons">
            <a href="#">Docs</a>
            <a href="#">
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
          </div>
        </div>
        <div className="user-layout__sidebar-left__item">
          <svg
            className="user-layout__sidebar-left__item-icon"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
          >
            <path
              d="M336 288H176v-32H16v196a12 12 0 0 0 12 12h456a12 12 0 0 0 12-12V256H336z"
              fill="currentColor"
            />
            <path
              d="M496 124a12 12 0 0 0-12-12H384V56a8 8 0 0 0-8-8H136a8 8 0 0 0-8 8v56H28a12 12 0 0 0-12 12v100h480zm-152-12H168V88h176z"
              fill="currentColor"
            />
          </svg>
          <p className="user-layout__sidebar-left__item-text">
            Switch Organization
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="user-layout__sidebar-left__item-icon__slot-end"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <ul>
          {routes.map((route, index) => (
            <Fragment key={index}>
              {!route.children && (
                <li className="user-layout__sidebar-left__item">
                  <div className="user-layout__sidebar-left__item-icon">
                    {route.icon}
                  </div>
                  <a
                    href={route.path}
                    className="user-layout__sidebar-left__item-text"
                  >
                    {route.name}
                  </a>
                </li>
              )}
              {route.children && (
                <li>
                  <p className="user-layout__sidebar-left__header">
                    {route.header}
                  </p>
                  <ul>
                    {route.children.map((child, index) => (
                      <li
                        key={index}
                        className={[
                          "user-layout__sidebar-left__item",
                          child.path === "/users"
                            ? "user-layout__sidebar-left__item--active"
                            : null,
                        ].join(" ")}
                      >
                        <div className="user-layout__sidebar-left__item-icon">
                          {child.icon}
                        </div>
                        <a
                          href={child.path}
                          className="user-layout__sidebar-left__item-text"
                        >
                          {child.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
            </Fragment>
          ))}
        </ul>

        <div className="user-layout__sidebar-left__footer">
          <div
            onClick={() => logout()}
            className="user-layout__sidebar-left__footer__item"
          >
            <svg
              className="user-layout__sidebar-left__footer__item-icon"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 24 24"
            >
              <path
                d="M6 2h9a2 2 0 0 1 2 2v1a1 1 0 0 1-2 0V4H6v16h9v-1a1 1 0 0 1 2 0v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
                fill="currentColor"
              />
              <path
                d="M16.795 16.295c.39.39 1.02.39 1.41 0l3.588-3.588a1 1 0 0 0 0-1.414l-3.588-3.588a.999.999 0 0 0-1.411 1.411L18.67 11H10a1 1 0 0 0 0 2h8.67l-1.876 1.884a.999.999 0 0 0 .001 1.411z"
                fill="currentColor"
              />
            </svg>
            <p className="user-layout__sidebar-left__footer__item-text">
              Logout
            </p>
          </div>
        </div>
        <div className="user-layout__sidebar-left__app-version">v1.2.0</div>
      </div>
    </div>
  );
};

import React from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/User";
import { UsersPagination } from "../UsersPagination";
import "./index.scss";

export const UsersTable: React.FC = () => {
  const navigate = useNavigate();

  const [users, setUsers] = React.useState({
    isLoadng: false,
    data: [] as User[],
  });

  const [usersPagination, setUsersPagination] = React.useState({
    currentPage: 1,
    perPage: 10,
  });

  const indexOfLastUser = usersPagination.currentPage * usersPagination.perPage;
  const indexOfFirstUser = indexOfLastUser - usersPagination.perPage;
  const currentUsers = users.data.slice(indexOfFirstUser, indexOfLastUser);

  React.useEffect(() => {
    let ignore = false;
    setUsers((prev) => ({ ...prev, isLoadng: true, data: [] }));

    fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!ignore) {
          setUsers((prev) => ({ ...prev, isLoadng: false, data }));
          localStorage.setItem("users", JSON.stringify(data));
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  function changePage(pageNumber: number) {
    setUsersPagination((prev) => ({ ...prev, currentPage: pageNumber }));
  }

  function setPerPage(newPerPage: number) {
    setUsersPagination((prev) => ({ ...prev, perPage: newPerPage }));
  }

  const tableFilterRef =
    React.useRef() as React.MutableRefObject<HTMLDivElement>;

  function toggleFilter() {
    tableFilterRef.current.style.display === "none"
      ? (tableFilterRef.current.style.display = "block")
      : (tableFilterRef.current.style.display = "none");
  }

  function stopPropagationOnFilter(e: React.MouseEvent) {
    e.stopPropagation();
  }

  if (users.isLoadng) {
    return <div className="users-page__table-loading">Loading&#8230;</div>;
  }

  return (
    <>
      <div className="users-page__table-container">
        <div
          ref={tableFilterRef}
          onClick={toggleFilter}
          className="users-page__table__filter-wrapper"
        >
          <div
            onClick={stopPropagationOnFilter}
            className="users-page__table__filter"
          >
            <div className="users-page__table__filter__item-container">
              <div className="users-page__table__filter__item-header">
                Organization
              </div>
              <select
                name="organization"
                id="organization"
                className="users-page__table__filter__item-input"
              >
                <option value="">Select</option>
              </select>
            </div>
            <div className="users-page__table__filter__item-container">
              <div className="users-page__table__filter__item-header">
                Username
              </div>
              <input
                className="users-page__table__filter__item-input"
                placeholder="User"
              />
            </div>
            <div className="users-page__table__filter__item-container">
              <div className="users-page__table__filter__item-header">
                Email
              </div>
              <input
                className="users-page__table__filter__item-input"
                placeholder="Email"
              />
            </div>
            <div className="users-page__table__filter__item-container">
              <div className="users-page__table__filter__item-header">Date</div>
              <input
                type="date"
                className="users-page__table__filter__item-input"
              />
            </div>
            <div className="users-page__table__filter__item-container">
              <div className="users-page__table__filter__item-header">
                Phone Number
              </div>
              <input
                className="users-page__table__filter__item-input"
                placeholder="Phone Number"
              />
            </div>
            <div className="users-page__table__filter__item-container">
              <div className="users-page__table__filter__item-header">
                Status
              </div>
              <select
                name="status"
                id="status"
                className="users-page__table__filter__item-input"
              >
                <option value="">Select</option>
              </select>
            </div>

            <div className="users-page__table__filter__buttons">
              <button className="users-page__table__filter__buttons__secondary-button">
                Reset
              </button>
              <button className="users-page__table__filter__buttons__primary-button">
                Filter
              </button>
            </div>
          </div>
        </div>
        <table className="users-page__table">
          <thead>
            <tr>
              <th>
                <p>
                  <span>ORGANIZATION</span>
                  <svg
                    onClick={() => toggleFilter()}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11 18h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm4 6h10c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1z"
                      fill="currentColor"
                    />
                  </svg>
                </p>
              </th>
              <th>
                <p>
                  <span>USERNAME</span>
                  <svg
                    onClick={() => toggleFilter()}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11 18h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm4 6h10c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1z"
                      fill="currentColor"
                    />
                  </svg>
                </p>
              </th>
              <th>
                <p>
                  <span>EMAIL</span>
                  <svg
                    onClick={() => toggleFilter()}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11 18h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm4 6h10c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1z"
                      fill="currentColor"
                    />
                  </svg>
                </p>
              </th>
              <th>
                <p>
                  <span>PHONE NUMBER</span>
                  <svg
                    onClick={() => toggleFilter()}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11 18h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm4 6h10c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1z"
                      fill="currentColor"
                    />
                  </svg>
                </p>
              </th>
              <th>
                <p>
                  <span>DATE JOINED</span>
                  <svg
                    onClick={() => toggleFilter()}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11 18h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm4 6h10c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1z"
                      fill="currentColor"
                    />
                  </svg>
                </p>
              </th>
              <th>
                <p>
                  <span>STATUS</span>
                  <svg
                    onClick={() => toggleFilter()}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11 18h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm4 6h10c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1z"
                      fill="currentColor"
                    />
                  </svg>
                </p>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td>
                  <p>{user.orgName}</p>
                </td>
                <td>
                  <p>{user.userName}</p>
                </td>
                <td>
                  <p>{user.email}</p>
                </td>
                <td>
                  <p>{user.phoneNumber}</p>
                </td>
                <td>
                  <p>
                    {new Date(user.createdAt).toLocaleString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </td>
                <td>
                  <p className="users-page__table__chip">Active</p>
                </td>
                <td>
                  <div className="users-page__table__actions-dropdown">
                    <svg
                      className="users-page__table__actions-dropdown__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 512 512"
                    >
                      <circle cx={256} cy={256} r={48} fill="currentColor" />
                      <circle cx={256} cy={416} r={48} fill="currentColor" />
                      <circle cx={256} cy={96} r={48} fill="currentColor" />
                    </svg>
                    <div className="users-page__table__actions-dropdown__content">
                      <div
                        onClick={() =>
                          navigate("/users/user-details/" + user.id)
                        }
                        className="users-page__table__actions-dropdown__content__item"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <p>View Details</p>
                      </div>
                      <div className="users-page__table__actions-dropdown__content__item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                          />
                        </svg>
                        <p>Blacklist User</p>
                      </div>
                      <div className="users-page__table__actions-dropdown__content__item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                          />
                        </svg>
                        <p>Activate User</p>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <UsersPagination
        currentPage={usersPagination.currentPage}
        perPage={usersPagination.perPage}
        total={users.data.length}
        changePage={changePage}
        setPerPage={setPerPage}
        style={{ maxWidth: "1037px", margin: "20px 0px", padding: "0px 20px" }}
      />
    </>
  );
};

import React from "react";
import { User } from "../../../UsersPage/types/User";
import "./index.scss";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  user?: User;
};

export const GeneralDetails: React.FC<Props> = ({ className, style, user }) => {
  return (
    <div
      className={[
        "user-details__general-details",
        "user-details__general-details--divide",
        className,
      ].join(" ")}
      style={style}
    >
      <section>
        <h2 className="user-details__general-details__section-header">
          Personal Information
        </h2>

        <div className="user-details__general-details__section-content">
          <div className="user-details__general-details__section-content__wrapper">
            <div className="user-details__general-details__section-content__header">
              Full Name
            </div>
            <div className="user-details__general-details__section-content__text">
              {user?.profile.firstName} {user?.profile.lastName}
            </div>
          </div>
          <div className="user-details__general-details__section-content__wrapper">
            <div className="user-details__general-details__section-content__header">
              Phone Number
            </div>
            <div className="user-details__general-details__section-content__text">
              {user?.profile.phoneNumber}
            </div>
          </div>
          <div className="user-details__general-details__section-content__wrapper">
            <div className="user-details__general-details__section-content__header">
              Email Address
            </div>
            <div className="user-details__general-details__section-content__text">
              {user?.email}
            </div>
          </div>
          <div className="user-details__general-details__section-content__wrapper">
            <div className="user-details__general-details__section-content__header">
              BVN
            </div>
            <div className="user-details__general-details__section-content__text">
              {user?.profile.bvn}
            </div>
          </div>
          <div className="user-details__general-details__section-content__wrapper">
            <div className="user-details__general-details__section-content__header">
              Gender
            </div>
            <div className="user-details__general-details__section-content__text">
              {user?.profile.gender}
            </div>
          </div>
          <div className="user-details__general-details__section-content__wrapper">
            <div className="user-details__general-details__section-content__header">
              Marital Status
            </div>
            <div className="user-details__general-details__section-content__text">
              Single
            </div>
          </div>
          <div className="user-details__general-details__section-content__wrapper">
            <div className="user-details__general-details__section-content__header">
              Children
            </div>
            <div className="user-details__general-details__section-content__text">
              None
            </div>
          </div>
          <div className="user-details__general-details__section-content__wrapper">
            <div className="user-details__general-details__section-content__header">
              Type of Residence
            </div>
            <div className="user-details__general-details__section-content__text">
              Parent's Apartment
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="user-details__general-details__section-header">
          Education and Employment
        </h2>

        <div className="user-details__general-details__section-content">
          <div className="user-details__general-details__section-content__wrapper">
            <div className="user-details__general-details__section-content__header">
              Level of Education
            </div>
            <div className="user-details__general-details__section-content__text">
              {user?.education.level}
            </div>
          </div>
          <div className="user-details__general-details__section-content__wrapper">
            <div className="user-details__general-details__section-content__header">
              Employment Status
            </div>
            <div className="user-details__general-details__section-content__text">
              {user?.education.employmentStatus}
            </div>
          </div>
          <div className="user-details__general-details__section-content__wrapper">
            <div className="user-details__general-details__section-content__header">
              Sector of Employment
            </div>
            <div className="user-details__general-details__section-content__text">
              {user?.education.sector}
            </div>
          </div>
          <div className="user-details__general-details__section-content__wrapper">
            <div className="user-details__general-details__section-content__header">
              Duration of Employment
            </div>
            <div className="user-details__general-details__section-content__text">
              {user?.education.duration}
            </div>
          </div>
          <div className="user-details__general-details__section-content__wrapper">
            <div className="user-details__general-details__section-content__header">
              Office Email
            </div>
            <div className="user-details__general-details__section-content__text">
              {user?.education.officeEmail}
            </div>
          </div>
          <div className="user-details__general-details__section-content__wrapper">
            <div className="user-details__general-details__section-content__header">
              Monthly Income
            </div>
            <div className="user-details__general-details__section-content__text">
              {user?.education.monthlyIncome}
            </div>
          </div>
          <div className="user-details__general-details__section-content__wrapper">
            <div className="user-details__general-details__section-content__header">
              Loan Repayment
            </div>
            <div className="user-details__general-details__section-content__text">
              {user?.education.loanRepayment}
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="user-details__general-details__section-header">
          Socials
        </h2>

        <div className="user-details__general-details__section-content">
          <div className="user-details__general-details__section-content__wrapper">
            <div className="user-details__general-details__section-content__header">
              Twitter
            </div>
            <div className="user-details__general-details__section-content__text">
              {user?.socials.twitter}
            </div>
          </div>
          <div className="user-details__general-details__section-content__wrapper">
            <div className="user-details__general-details__section-content__header">
              Facebook
            </div>
            <div className="user-details__general-details__section-content__text">
              {user?.socials.facebook}
            </div>
          </div>
          <div className="user-details__general-details__section-content__wrapper">
            <div className="user-details__general-details__section-content__header">
              Instagram
            </div>
            <div className="user-details__general-details__section-content__text">
              {user?.socials.instagram}
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="user-details__general-details__section-header">
          Guarantor
        </h2>

        <div className="user-details__general-details__section-content">
          <div className="user-details__general-details__section-content__wrapper">
            <div className="user-details__general-details__section-content__header">
              full name
            </div>
            <div className="user-details__general-details__section-content__text">
              {user?.guarantor.firstName} {user?.guarantor.lastName}
            </div>
          </div>
          <div className="user-details__general-details__section-content__wrapper">
            <div className="user-details__general-details__section-content__header">
              Phone Number
            </div>
            <div className="user-details__general-details__section-content__text">
              {user?.guarantor.phoneNumber}
            </div>
          </div>
          <div className="user-details__general-details__section-content__wrapper">
            <div className="user-details__general-details__section-content__header">
              Email Address
            </div>
            <div className="user-details__general-details__section-content__text">
              {user?.guarantor.firstName}@gmail.com
            </div>
          </div>
          <div className="user-details__general-details__section-content__wrapper">
            <div className="user-details__general-details__section-content__header">
              Relationship
            </div>
            <div className="user-details__general-details__section-content__text">
              Sister
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

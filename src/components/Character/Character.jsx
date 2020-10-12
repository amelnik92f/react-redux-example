import React from "react";
import cx from "classnames";

import "./Character.scss";

export const Character = ({ user }) => {
  const { name, species, gender, status, image } = user;
  const classNames = cx("Character", {
    "Character--Dead": status === "Dead",
  });

  return (
    <div className={classNames}>
      <img src={image} alt={name} className="Character__Image" />
      <div className="Character__Details">
        <p>Name: {name}</p>
        <p>Gender: {gender}</p>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
      </div>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
      <p>
        Please, explore <Link className="link" to="/users">users page</Link> or{" "}
        <Link className="link" to="/location">location page</Link>
      </p>
  );
};

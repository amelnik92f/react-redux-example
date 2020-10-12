import React from "react";
import { Home } from "./Home";
import { Page } from "../Page";

export const HomePage = () => {
  return (
    <Page
      title={() => <h1>Hello, it's Rick and Morty API!</h1>}
      body={() => <Home />}
    />
  );
};

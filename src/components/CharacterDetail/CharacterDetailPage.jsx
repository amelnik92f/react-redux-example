import React from "react";
import { CharacterDetail } from "./CharacterDetail";
import { Page } from "../Page";

export const CharacterDetailPage = ({ match }) => {
  return (
    <Page
      title={() => <h2>Character Details</h2>}
      body={() => <CharacterDetail id={match.params.id} />}
    />
  );
};

import React from "react";
import { CharacterList } from "./CharacterList";
import { Page } from "../Page";
import { CharacterPagination } from "./CharacterPagination";

export const CharacterPage = (props) => {
  return (
    <Page
      title={() => (
        <div>
          <h2>Characters</h2>
          <CharacterPagination />
        </div>
      )}
      body={() => <CharacterList />}
    />
  );
};

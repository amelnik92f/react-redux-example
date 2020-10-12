import React from "react";
import { Location } from "./Location";
import { Page } from "../Page";

export const LocationPage = () => {
  return (
    <Page 
        title={() => <h2>Location</h2>} 
        body={() => <Location />} 
    />
  );
};

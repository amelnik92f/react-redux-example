import React from "react";

import "./Page.scss";

export const Page = ({ title, body }) => {
  return (
    <div className="Page">
      {title && <div className="Page__Title">{title()}</div>}
      {body && <div className="Page__Body">{body()}</div>}
    </div>
  );
};



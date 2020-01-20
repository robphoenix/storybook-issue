/**@jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

const Heading: React.FC = ({ children }) => {
  return (
    <h1
      css={{
        fontFamily: "Roboto"
      }}
    >
      {children}
    </h1>
  );
};

export default Heading;

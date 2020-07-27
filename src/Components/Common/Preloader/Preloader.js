import React from "react";
import spinner from "../../../asses/images/Spinner.gif";

let Preloader = (props) => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <img src={spinner} />
    </div>
  );
};

export default Preloader;

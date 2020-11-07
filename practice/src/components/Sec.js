import React from "react";

const Sec = (props) => {
  return <section>{props.toggling ? <h1>hello</h1> : ""}</section>;
};

export default Sec;

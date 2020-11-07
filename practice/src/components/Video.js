import React from "react";

const Video = (props) => {
  return (
    <section>
      <h1>Video {props.count}</h1>
      <button onClick={props.toggling}>Click</button>
    </section>
  );
};

export default Video;

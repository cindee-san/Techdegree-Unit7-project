import React from "react";

//creates each photo
const Photo = (props) => (
    <li>
      <img src={props.url} alt="" />
    </li>
);

export default Photo;

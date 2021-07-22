import React from "react";
import "../styles/PersonalInfo.css";

function PersonalInfo(props) {
  const { name, title } = props.personalInfo;

  return (
    <div className="personalInfo">
      <h1 onClick={props.edit} onBlur={props.stopEdit} data-name="name">
        {name}
      </h1>
      <h3 data-name="title" onClick={props.edit} onBlur={props.stopEdit}>
        {title}
      </h3>
    </div>
  );
}

export default PersonalInfo;

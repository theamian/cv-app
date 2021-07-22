import React from "react";
import "../styles/SideComponent.css";

function SideComponent(props) {
  const data = props.data;
  return (
    <div
      className="sideComponent"
      onClick={props.edit}
      onBlur={(event) => {
        props.stopEditForm(event, data.id);
      }}
    >
      {data.text}
    </div>
  );
}

export default SideComponent;

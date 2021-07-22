import React from "react";
import "../styles/RightContainer.css";
import ContactContainer from "./ContactContainer";
import SkillsContainer from "./SkillsContainer";

function RightContainer(props) {
  return (
    <div className="rightContainer">
      <ContactContainer
        contact={props.contact}
        edit={props.edit}
        addForm={props.addForm}
        stopEditForm={props.stopEditForm}
      />
      <SkillsContainer
        skills={props.skills}
        edit={props.edit}
        addForm={props.addForm}
        stopEditForm={props.stopEditForm}
      />
    </div>
  );
}

export default RightContainer;

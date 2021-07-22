import React from "react";
import SideComponent from "./SideComponent";
import "../styles/SkillsContainer.css";

function SkillsContainer(props) {
  const skillsArray = props.skills;
  const skills = skillsArray.map((str, index) => {
    const skill = { text: str, id: index };
    return (
      <SideComponent
        key={index}
        data={skill}
        edit={props.edit}
        stopEditForm={props.stopEditForm}
      />
    );
  });
  return (
    <div className="skillsContainer" data-name="skills">
      Skills:
      <button onClick={props.addForm} style={{ float: "right" }}>
        add skill
      </button>
      {skills}
    </div>
  );
}

export default SkillsContainer;

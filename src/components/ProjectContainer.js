import React from "react";
import "../styles/FormContainer.css";
import FormComponent from "./FormComponent";

function ProjectContainer(props) {
  const projectArray = props.project;
  const projects = projectArray.map((obj, index) => {
    const project = { ...obj, id: index };
    return (
      <FormComponent
        key={index}
        project={project}
        edit={props.edit}
        stopEditForm={props.stopEditForm}
        editDate={props.editDate}
        deleteForm={props.deleteForm}
      />
    );
  });
  return (
    <div className="formContainer" data-name="project">
      PROJECTS:
      <button onClick={props.addForm} style={{ float: "right" }}>
        add projects
      </button>
      {projects}
    </div>
  );
}

export default ProjectContainer;

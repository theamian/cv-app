import React from "react";
import "../styles/FormContainer.css";
import FormComponent from "./FormComponent";

function EducationContainer(props) {
  const education = props.education;
  const schools = education.map((obj, index) => {
    const school = { ...obj, id: index };
    return (
      <FormComponent
        key={index}
        school={school}
        edit={props.edit}
        stopEditForm={props.stopEditForm}
        editDate={props.editDate}
        deleteForm={props.deleteForm}
      />
    );
  });
  return (
    <div className="formContainer" data-name="education">
      EDUCATION:
      <button onClick={props.addForm} style={{ float: "right" }}>
        add education
      </button>
      {schools}
    </div>
  );
}

export default EducationContainer;

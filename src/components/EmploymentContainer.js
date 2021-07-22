import React from "react";
import "../styles/FormContainer.css";
import FormComponent from "./FormComponent";

function EmploymentContainer(props) {
  const employment = props.employment;
  const jobs = employment.map((obj, index) => {
    const job = { ...obj, id: index };
    return (
      <FormComponent
        key={index}
        job={job}
        edit={props.edit}
        stopEditForm={props.stopEditForm}
        editDate={props.editDate}
        deleteForm={props.deleteForm}
      />
    );
  });
  return (
    <div className="formContainer" data-name="employment">
      EMPLOYMENT:
      <button onClick={props.addForm} style={{ float: "right" }}>
        add employment
      </button>
      {jobs}
    </div>
  );
}

export default EmploymentContainer;

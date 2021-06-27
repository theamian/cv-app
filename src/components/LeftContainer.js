import React from "react";
import "../styles/LeftContainer.css";
import EducationContainer from "./EducationContainer";
import EmploymentContainer from "./EmploymentContainer";
import PersonalInfo from "./PersonalInfo";

function LeftContainer(props) {
    return(
        <div className="leftContainer">
            <PersonalInfo 
                personalInfo={props.personalInfo}
                edit={props.edit}
                stopEdit={props.stopEdit}
            />
            <EducationContainer 
                education={props.education}
                edit={props.edit}
                stopEditForm={props.stopEditForm}
                editDate={props.editDate}
                addForm={props.addForm}
                deleteForm={props.deleteForm}
            />
            <EmploymentContainer 
                employment={props.employment}
                edit={props.edit}
                stopEditForm={props.stopEditForm}
                editDate={props.editDate}
                addForm={props.addForm}
                deleteForm={props.deleteForm}
            />
        </div>
    );
}

export default LeftContainer;
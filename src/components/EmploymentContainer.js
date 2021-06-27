import React from "react";
import "../styles/EmploymentContainer.css"
import FormComponent from "./FormComponent";
import plusImg from "../plus.svg";

function EmploymentContainer(props) {
    const employment = props.employment;
    const jobs = employment.map((obj, index) => {
        const job = {...obj, id: index}
        return(
            <FormComponent 
                key={index} 
                job={job}
                edit={props.edit}
                stopEditForm={props.stopEditForm}
                editDate={props.editDate}
                deleteForm={props.deleteForm}
            />
        )
    })
    return(
        <div 
            className="employmentContainer"
            data-name="employment">
        EMPLOYMENT:
            {jobs}
        <img 
            src={plusImg} 
            className="plusImg" 
            alt=""
            onClick={props.addForm}></img>
        </div>
    )
}

export default EmploymentContainer;
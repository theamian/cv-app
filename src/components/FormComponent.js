import React from "react";
import "../styles/FormComponent.css";
import trash from "../trash.svg";

function FormComponent(props) {
    const {school, job } = props; //TODO triba rewrite cili formcomponent i tako da su imena (data-name) i labels (School: Major: itd) dinamički
    return(
        <div data-name="education" className="formComponent">
        School:&nbsp;
            <div 
                data-name="school"
                onClick={props.edit}
                onBlur={(event) => props.stopEditForm(event, props.school.id)}>
                    {school.school}
            </div>
            <br></br>
            <label htmlFor="start">Start:&nbsp;</label>
            <input 
                data-name="start" 
                name="start" 
                type="date" 
                value={school.start} 
                onClick={props.editDate}
                onChange={(event) => props.stopEditForm(event, props.school.id)}
                readOnly>
            </input>
            <br></br>
            <label htmlFor="end">End:&nbsp;</label>
            <input 
                data-name="end" 
                name="end" 
                type="date" 
                value={school.end} 
                onClick={props.editDate}
                onChange={(event) => props.stopEditForm(event, props.school.id)}
                readOnly>
            </input>
            <br></br>
            Major:&nbsp;
            <div 
                data-name="major"
                onClick={props.edit}
                onBlur={(event) => props.stopEditForm(event, props.school.id)}>
                    {school.major}
            </div>
            <img 
                src={trash} 
                alt="" 
                className="trashImg" 
                onClick={(event) => props.deleteForm(event, props.school.id)}></img>
        </div>
    );
}

export default FormComponent;
import React from "react";
import "../styles/FormComponent.css";
import trash from "../trash.svg";

function FormComponent(props) {
    // const {school, job } = props; //TODO triba rewrite cili formcomponent i tako da su imena (data-name) i labels (School: Major: itd) dinamički
    let category = {}
    if(props.school) {
        category = props.school;
        category.category = "education";
        category.title = "school";
        category.comment = "major";
        category.main = category.school;
        category.side = category.major;
    } else if(props.job) {
        category = props.job;
        category.category = "employment";
        category.title = "employer";
        category.comment = "duties";
        category.main = category.employer;
        category.side = category.duties;
    }

    return(
        <div data-name={category.category} className="formComponent">
        {category.category.charAt(0).toUpperCase() + category.category.slice(1)}:&nbsp;
            <div 
                data-name={category.title}
                onClick={props.edit}
                onBlur={(event) => props.stopEditForm(event, category.id)}>
                    {category.main}
            </div>
            <br></br>
            <label htmlFor="start">Start:&nbsp;</label>
            <input 
                data-name="start" 
                name="start" 
                type="date" 
                value={category.start} 
                onClick={props.editDate}
                onChange={(event) => props.stopEditForm(event, category.id)}
                readOnly>
            </input>
            <br></br>
            <label htmlFor="end">End:&nbsp;</label>
            <input 
                data-name="end" 
                name="end" 
                type="date" 
                value={category.end} 
                onClick={props.editDate}
                onChange={(event) => props.stopEditForm(event, category.id)}
                readOnly>
            </input>
            <br></br>
            {category.comment.charAt(0).toUpperCase() + category.comment.slice(1)}:&nbsp;
            <div 
                data-name={category.comment}
                onClick={props.edit}
                onBlur={(event) => props.stopEditForm(event, category.id)}>
                    {category.side}
            </div>
            <img 
                src={trash} 
                alt="" 
                className="trashImg" 
                onClick={(event) => props.deleteForm(event, category.id)}></img>
        </div>
    );
}

export default FormComponent;
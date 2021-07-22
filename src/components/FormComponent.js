import React from "react";
import "../styles/FormComponent.css";

function FormComponent(props) {
  let category = {};
  let project = null;
  if (props.school) {
    category = props.school;
    category.category = "education";
    category.title = "school";
    category.comment = "major";
    category.main = category.school;
    category.side = category.major;
  } else if (props.job) {
    category = props.job;
    category.category = "employment";
    category.title = "employer";
    category.comment = "responsibilities";
    category.main = category.employer;
    category.side = category.responsibilities;
  } else if (props.project) {
    category = props.project;
    category.category = "project";
    category.title = "name";
    category.comment = "decription";
    category.link = "url";
    category.main = category.name;
    category.side = category.description;
    project = (
      <div style={{ display: "block" }}>
        url:&nbsp;
        <div
          data-name="url"
          onClick={props.edit}
          onBlur={(event) => props.stopEditForm(event, category.id)}
          style={{ display: "inline-block" }}
        >
          <a href={category.url}>{category.url}</a>
        </div>
      </div>
    );
  }

  return (
    <div data-name={category.category} className="formComponent">
      {category.title.charAt(0).toUpperCase() + category.title.slice(1)}:&nbsp;
      <div
        data-name={category.title}
        onClick={props.edit}
        onBlur={(event) => props.stopEditForm(event, category.id)}
      >
        {category.main}
      </div>
      <br></br>
      {project}
      <label htmlFor="start">Start:&nbsp;</label>
      <input
        data-name="start"
        name="start"
        type="date"
        value={category.start}
        onClick={props.editDate}
        onChange={(event) => props.stopEditForm(event, category.id)}
        readOnly
      ></input>
      <br></br>
      <label htmlFor="end">End:&nbsp;</label>
      <input
        data-name="end"
        name="end"
        type="date"
        value={category.end}
        onClick={props.editDate}
        onChange={(event) => props.stopEditForm(event, category.id)}
        readOnly
      ></input>
      <br></br>
      {category.comment.charAt(0).toUpperCase() + category.comment.slice(1)}
      :&nbsp;
      <div
        data-name={category.comment}
        onClick={props.edit}
        onBlur={(event) => props.stopEditForm(event, category.id)}
      >
        {category.side}
      </div>
      <button
        onClick={(event) => props.deleteForm(event, category.id)}
        style={{ float: "right" }}
      >
        remove
      </button>
    </div>
  );
}

export default FormComponent;

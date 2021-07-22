import React, { Component } from "react";
import "./styles/App.css";
import { jsPDF } from "jspdf";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Firstname Lastname aka Click on It to Edit It",
      title: "add title",
      education: [
        {
          school: "add school",
          start: "2020-01-01",
          end: "2020-02-01",
          major: "add major",
        },
        {
          school: "add school #2",
          start: "2020-01-01",
          end: "2020-02-01",
          major: "add major #2",
        },
      ],
      employment: [
        {
          employer: "add employer",
          start: "2020-01-01",
          end: "2020-02-01",
          responsibilities: "add responsibilities",
        },
      ],
      project: [
        {
          name: "add project name",
          url: "example.com",
          start: "2020-01-01",
          end: "2020-02-01",
          description: "add description",
        },
      ],
      contact: [
        "email: add email",
        "phone: add phone",
        "add other contact option",
      ],
      skills: ["add skill 1", "add skill 2", "add skill 3"],
    };
  }

  //methods to enable (and end) editing when the user clicks on the element
  edit = (event) => {
    const el = event.target;
    el.contentEditable = true;

    let range = document.createRange();
    range.selectNodeContents(el);
    let sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  };

  stopEdit = (event) => {
    const el = event.target;
    this.setState({
      [el.dataset.name]: el.innerText.trim(),
    });
  };

  stopEditForm = (event, id) => {
    const el = event.target;
    const parent = el.parentElement;
    const obj = JSON.parse(JSON.stringify(this.state)); //deep copy of state so it's not changed
    let arr = obj[parent.dataset.name];

    if (el.type === "date") {
      arr[id][el.dataset.name] = el.value;
      el.readOnly = true;
    } else if (el.localName === "a") {
      arr = obj[parent.parentElement.parentElement.dataset.name];
      arr[id][el.parentElement.dataset.name] = el.innerText.trim();

      if (arr[id][el.parentElement.dataset.name] === "") {
        delete arr[id][el.parentElement.dataset.name];
        parent.parentElement.remove();
      }
    } else if (
      parent.dataset.name === "contact" ||
      parent.dataset.name === "skills"
    ) {
      arr[id] = el.innerText.trim();

      if (arr[id] === "") {
        arr.splice(id, 1);
      }
    } else {
      arr[id][el.dataset.name] = el.innerText.trim();
    }

    this.setState({ ...obj });
  };

  editDate = (event) => {
    const el = event.target;
    el.readOnly = false;
  };

  // method to add a new "form"
  addForm = (event) => {
    const el = event.target;
    const parent = el.parentElement;
    const obj = JSON.parse(JSON.stringify(this.state));
    const arr = obj[parent.dataset.name];
    let blank = {};

    if (parent.dataset.name === "education") {
      blank = {
        school: "add school",
        start: "2020-01-01",
        end: "2020-02-01",
        major: "add major",
      };
    } else if (parent.dataset.name === "employment") {
      blank = {
        employer: "add employer",
        start: "2020-01-01",
        end: "2020-02-01",
        responsibilities: "add responsibilities",
      };
    } else if (parent.dataset.name === "project") {
      blank = {
        name: "add project name",
        url: "example.com",
        start: "2020-01-01",
        end: "2020-02-01",
        description: "add description",
      };
    } else if (parent.dataset.name === "contact") {
      blank = "add contact option";
    } else if (parent.dataset.name === "skills") {
      blank = "add a skill";
    }
    arr.push(blank);

    this.setState({ ...obj });
  };

  // method to delete the form
  deleteForm = (event, id) => {
    const el = event.target;
    const parent = el.parentElement;
    const obj = JSON.parse(JSON.stringify(this.state));
    const arr = obj[parent.dataset.name];

    arr.splice(id, 1);
    this.setState({ ...obj });
  };

  // to print as PDF
  printPDF = async () => {
    var doc = new jsPDF("p", "mm", [990, 1260]); //the number values are tweaked manually to center the image on the PDF
    var pdfjs = document.querySelector("#main");
    let copy = pdfjs.cloneNode(true);

    copy.classList.remove("mainContainer");
    copy.classList.add("printable");
    let buttons = copy.querySelectorAll("button");
    buttons.forEach((button) => (button.style.visibility = "hidden"));

    let name = this.state.name;

    doc.html(copy, {
      callback: function (doc) {
        doc.save(`${name}.pdf`);
      },
      x: 0,
      y: 0,
    });
  };

  render() {
    console.log(this.state);
    const personalInfo = { name: this.state.name, title: this.state.title };
    return (
      <div className="midContainer">
        <div id="main" className="mainContainer">
          <LeftContainer
            personalInfo={personalInfo}
            education={this.state.education}
            employment={this.state.employment}
            project={this.state.project}
            edit={this.edit}
            editDate={this.editDate}
            stopEdit={this.stopEdit}
            stopEditForm={this.stopEditForm}
            addForm={this.addForm}
            deleteForm={this.deleteForm}
          />
          <RightContainer
            contact={this.state.contact}
            skills={this.state.skills}
            edit={this.edit}
            addForm={this.addForm}
            stopEditForm={this.stopEditForm}
          />
        </div>
        <footer>
          <button id="printBtn" onClick={this.printPDF}>
            print pdf
          </button>
        </footer>
      </div>
    );
  }
}

export default App;

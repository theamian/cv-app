import React, {Component} from "react";
import "./styles/App.css";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";

class App extends Component {

  constructor() {
    super()
    this.state = {
      name: "John Doe",
      title: "title placeholder",
      education: [
        {
          school: "placeholder school",
          start: "2020-01-01",
          end: "2020-02-01",
          major: "placeholder major"
        },
        {
          school: "placeholder school #2",
          start: "2020-01-01",
          end: "2020-02-01",
          major: "placeholder major #2"
        },       
      ],
      employment: [
        {
          employer: "placeholder employer",
          start: "2020-01-01",
          end: "2020-02-01",
          duties: "placeholder duties"
        }
      ],
      project: [
        {
          projectName: "placeholder project name",
          url: "example.com",
          start: "2020-01-01",
          end: "2020-02-01",
          description: "placeholder description"
        }
      ],
      contact: [
        "email: placeholder email",
        "phone: placeholder phone",
        "placeholder entry: text"
      ]
    }
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
  }

  stopEdit = (event) => {
    const el = event.target;
    this.setState({
      [el.dataset.name]: el.innerText.trim()
    })
  }

  stopEditForm = (event, id) => {
    const el = event.target;
    const parent = el.parentElement;
    const obj = JSON.parse(JSON.stringify(this.state)) //deep copy of state so it's not changed 
    let arr = obj[parent.dataset.name]

    if(el.type === "date") {
      arr[id][el.dataset.name] = el.value;
      el.readOnly = true;
    } else if(el.localName === "a") {
      arr = obj[parent.parentElement.parentElement.dataset.name];
      // console.log(arr[id])
      arr[id][el.parentElement.dataset.name] = el.innerText.trim();
    } else if(parent.dataset.name === "contact"){
      arr[id] = el.innerText.trim();
      if(arr[id] === "") {
        arr.splice(id, 1)
      }
    } else {
      arr[id][el.dataset.name] = el.innerText.trim();
    }

    this.setState({...obj});
  }

  editDate = (event) => {
    const el = event.target;
    el.readOnly = false;
  }

  // method to add a new "form"
  addForm = (event) => {
    const el = event.target;
    const parent = el.parentElement;
    const obj = JSON.parse(JSON.stringify(this.state))
    const arr = obj[parent.dataset.name]
    let blank = {}
    
    if(parent.dataset.name === "education") {
      blank = {
        school: "placeholder school",
          start: "2020-01-01",
          end: "2020-02-01",
          major: "placeholder major"
      } 
    } else if(parent.dataset.name === "employment") {
      blank = {
        employer: "placeholder employer",
          start: "2020-01-01",
          end: "2020-02-01",
          duties: "placeholder duties"
    } 
  } else if(parent.dataset.name === "project") {
      blank = {
        projectName: "placeholder project name",
        url: "example.com",
        start: "2020-01-01",
        end: "2020-02-01",
        description: "placeholder description"
      }
    }
    else if(parent.dataset.name === "contact") {
      blank = "placeholder entry: text";
    }
    arr.push(blank)
    
    this.setState({...obj})
  }

  // method to delete the form
  deleteForm = (event, id) => {
    const el = event.target;
    const parent = el.parentElement;
    const obj = JSON.parse(JSON.stringify(this.state))
    const arr = obj[parent.dataset.name]

    arr.splice(id, 1);
    this.setState({...obj})
  }

  render() {
    console.log(this.state)
    const personalInfo = {name: this.state.name, title: this.state.title}
    return (
      <div className="mainContainer">
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
          edit={this.edit}
          addForm={this.addForm}
          stopEditForm={this.stopEditForm}
        />
      </div>
    );
  }
}

export default App;

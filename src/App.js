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
    const arr = obj[parent.dataset.name]

    if(el.type === "date") {
      arr[id][el.dataset.name] = el.value;
      el.readOnly = true;
    } else {
      arr[id][el.dataset.name] = el.innerText;
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
          edit={this.edit}
          editDate={this.editDate}
          stopEdit={this.stopEdit}
          stopEditForm={this.stopEditForm}
          addForm={this.addForm}
          deleteForm={this.deleteForm}
        />
        <RightContainer />
      </div>
    );
  }
}

export default App;

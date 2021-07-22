import React from "react";
import SideComponent from "./SideComponent";
import "../styles/ContactContainer.css";

function ContactContainer(props) {
  const contactArray = props.contact;
  const contacts = contactArray.map((str, index) => {
    const contact = { text: str, id: index };
    return (
      <SideComponent
        key={index}
        data={contact}
        edit={props.edit}
        stopEditForm={props.stopEditForm}
      />
    );
  });
  return (
    <div className="contactContainer" data-name="contact">
      Contact:
      <button onClick={props.addForm} style={{ float: "right" }}>
        add contact
      </button>
      {contacts}
    </div>
  );
}

export default ContactContainer;

import React from "react";
import "../styles/ContactComponent.css";


function ContactComponent(props){
    const contact = props.contact
    console.log(props)
    return(
        <div 
            className="contactComponent"
            onClick={props.edit}
            onBlur={(event)=> {props.stopEditForm(event, contact.id)}}>
            {contact.text}
        </div>
    );
}

export default ContactComponent;
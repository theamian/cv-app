import React from "react";
import ContactComponent from "./ContactComponent";
import "../styles/ContactContainer.css";
import plusImg from "../plus.svg";


function ContactContainer(props) {
    const contactArray = props.contact;
    const contacts = contactArray.map((str, index) => {
        const contact = {text: str, id: index}
        return(
            <ContactComponent 
                key={index}
                contact={contact}
                edit={props.edit}
                stopEditForm={props.stopEditForm}
            />
        );
    })
    return(
        <div 
            className="contactContainer"
            data-name="contact">
                Contact:
                {contacts}
            <img 
                src={plusImg} 
                className="plusImg" 
                alt=""
                onClick={props.addForm}>
            </img>
        </div>
    );
}

export default ContactContainer;
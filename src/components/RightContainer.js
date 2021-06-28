import React from "react";
import "../styles/RightContainer.css";
import ContactContainer from "./ContactContainer";

function RightContainer(props) {
    return(
        <div className="rightContainer">
            <ContactContainer 
                contact={props.contact}
                edit={props.edit}
                addForm={props.addForm}
                stopEditForm={props.stopEditForm}
            />
        </div>
    );
}

export default RightContainer;
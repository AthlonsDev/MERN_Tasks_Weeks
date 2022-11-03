import './App.css'
import React from "react";
const AboutButton = (props) => {

    return (
        <button className="AboutButton" value={props.label} onClick={props.ClickHandle}>
            {props.label}
        </button>
    );

}

export default AboutButton;
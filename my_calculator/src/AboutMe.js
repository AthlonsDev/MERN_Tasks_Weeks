import App from "./App";
import './App.css'
// import './Calculator.css'
import React from "react";
// Create our Button component as a functional component.
const AboutButton = (props) => {

    return (
        <button className="ButtonStyle" value={props.label} onClick={props.ClickHandle}>{props.label}</button>
    );

}

export default AboutButton;
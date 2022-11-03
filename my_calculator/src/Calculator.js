import App from "./Calculator";
import './App.css'
import React from "react";
import Button from "./Button.js";
import AboutButton from './AboutMe';
import {useState} from "react";
import image from './happy.png'

function KeyPadComponent(props){
    const [text1, setText ] = useState("")
    const [pic, setPic] = useState(null)
    const [result, setResult] = useState(0)
    const ClickHandle = (e) => {
        if (e.target.value=="C")
        {
            setPic(null)
            setText("")  
            setResult(0)  
        }
        else if  (e.target.value=="=")
        {
            setResult(eval(text1))
        // alert(eval(text1)) 

        }
        else if (e.target.value === 'About Me') {
            
            setText("my_name")
            setPic(image)
        }
        else
          setText(text1+e.target.value)
      };

   
        return (
            <div className="Calculator">
                <div className="screen-row">
                <input type="text" readOnly value= {text1} />
                <img src= {pic} alt=''></img>
                </div>
               
               <div >
                <Button label="(" ClickHandle={ClickHandle} />
                <Button label="CE" ClickHandle={ClickHandle} />
                <Button label=")" ClickHandle={ClickHandle}/>
                <Button label="C" ClickHandle={ClickHandle}/> 
                </div>

                <div >
                <Button label="1" ClickHandle={ClickHandle}/>
                <Button label="2" ClickHandle={ClickHandle}/>
                <Button label="3" ClickHandle={ClickHandle}/>
                <Button label="+" ClickHandle={ClickHandle}/>
                </div>

                <div >
                <Button label="4" ClickHandle={ClickHandle}/>
                <Button label="5" ClickHandle={ClickHandle}/>
                <Button label="6" ClickHandle={ClickHandle}/>
                <Button label="-" ClickHandle={ClickHandle}/>
                </div>

                <div >
                <Button label="7" ClickHandle={ClickHandle}/>
                <Button label="8" ClickHandle={ClickHandle}/>
                <Button label="9" ClickHandle={ClickHandle}/>
                <Button label="*" ClickHandle={ClickHandle}/>
                </div>

                <div >
                <Button label="." ClickHandle={ClickHandle}/>
                <Button label="0" ClickHandle={ClickHandle}/>
                <Button label="=" ClickHandle={ClickHandle}/>
                <Button label="/" ClickHandle={ClickHandle}/>
                </div>

                <div>
                <AboutButton label="About Me" ClickHandle={ClickHandle} />
                </div>

                <div className="screen-row">
                <input type="text" readOnly value= {result} />
                </div>
                
            </div>
        );
    
}
export default KeyPadComponent;
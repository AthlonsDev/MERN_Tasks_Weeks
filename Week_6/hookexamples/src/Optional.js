import React, {useState, useEffect} from 'react';
import './App.css';
import like from './like.png'
import sad from './sad.png'
import happy from './happy.png'



export default function DisplayImage() {

    const [pic, setPic] = useState(like)
    const [input, setInput] = useState("");

    function updateInput() {
        
        setInput(document.getElementById('input').value)
        console.log(input)
    }

    useEffect(() => {        
        switch(input) {
            case 'like':
                setPic(like);
                break;
            case 'sad':
                setPic(sad);
                break;
            case 'happy':
                setPic(happy);
                break; 
            default:
                setPic(pic);
        }
    }, [input])


    return (
        <div className='App'>
            <form>
                <label>
                    This is a Label for The input form
                    <img src={pic} alt=''/>
                </label>
                <input type='text' placeholder='Insert Emoji Name here' name='Emoji' id='input' onChange={updateInput}/>
                
            </form>

        </div> 
    )

}
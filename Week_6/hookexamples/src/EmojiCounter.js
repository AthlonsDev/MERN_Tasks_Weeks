import React, {useEffect, useState} from 'react';
import Love from './Love.png'
import Sad from './sad.png'
import Like from './like.png'
import Happy from './happy.png'



export default function EmojiCounter(props) {
    console.log('pic is ', props.pic)
    const [pic, setPic] = useState(Love)
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("Emoji Function called", props.pic)
        if(props.pic === 'Love'){setPic(Love)} 
        else if(props.pic === 'happy'){setPic(Happy)}
        else if(props.pic === 'sad'){setPic(Sad)}
        else if(props.pic === 'like'){setPic(Like)}
    })

    const ClickHandle = () => {
        setCount( count + 1)
    }

    return(
        <div className='App'>
            <button type='button' onClick={ClickHandle}>{count}</button>
            <img src={pic} alt=''></img>
        </div>
    )
}
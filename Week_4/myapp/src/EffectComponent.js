import React, {useState, useEffect} from 'react';

export default function effectApp() {
    const [state, setState] = useState('posts')

    useEffect(() => {
        // run every single time app renders
        // runs when state changes when specified in array
        // if array empty runs only once
        // works like a listener
        console.log("state changed")
        fetch('')
        .then(Response => Response.json())
    }, [state])

    return (
        <>
            <div>
                <button onClick={() => setState('posts')}>Posts</button>
                <button onClick={() => setState('users')}>Users</button>
                <button onClick={() => setState('comments')}>Comments</button>
            </div>
            <h1>{state}</h1>
        </>
    )
}
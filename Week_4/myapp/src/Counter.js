import React, {useState} from 'react';


function CountInitial() {
    console.log('this will run at every render')
    return 5
}

function CounterApp() {
    // Hooks have 2 values get and set
    // always at top level cannot be nested
    // cant be called from class, it's a substitute for a class
    // like this will run everytime

    // const [getCount, setCount] = useState(5);

    // as a function wil run only once
    // const [getCount, setCount] = useState(() => {
    //     console.log('this will run only once')
    //     return 5
    // })

    const [getCount, setCount] = useState(CountInitial)

    const [theme, setTheme] = useState('red')

    // function to decrement count
    function decrementCount() {
        // called as a function component - better
        setCount(prevCount => prevCount - 1);
        setTheme(newTheme => 'blue')
        // called as a regular variable - will be overridden by another instance of same hook
        // setCount = count - 1;
    }

    function incrementCount() {
        setCount(nextCount => nextCount + 1);
        setTheme(newTheme => 'green')
    }

    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <span>{theme}</span>
            <button onClick={incrementCount}>+</button>
        
        </>
    )
}
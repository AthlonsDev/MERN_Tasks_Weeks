import React, {useState} from 'react';

function Hook_ControlledBtn() {
    const [count, setCounter] = useState(0)

    const ClickHandle = () => {
        setCounter( count + 1)
    }

    return (
        <div className='App-header'>
            <form>
                <h1>Click Counts Are {count}</h1>
                <button  type='button' onClick={ClickHandle}>Click Me {count}</button>
            </form>
        </div>
    )
}


export default Hook_ControlledBtn;
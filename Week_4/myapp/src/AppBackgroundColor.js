import './App.css'
function AppColor(props) {

    function greetUser(e) {
        document.body.style.background = e.target.value;
    
        alert("Welcome mr " + document.getElementById(props.color).value)
    }

    return (
        <body style={{background: "powderblue", color: "black" }}>
        <div className='App'>
            <h1>
                {props.heading}
            </h1>
            <p style={{color: "blue", font: "30px Arial"}}>
                How to create Function Components
            </p>
            <label class="Label" id="lbl">
                {props.label}
            </label>
            <input id={props.color} type="text" >

            </input>
            <button value={props.color} onClick={greetUser}>
                color me {props.color}
            </button>
        </div>
        </body>
    );
}

export default AppColor;

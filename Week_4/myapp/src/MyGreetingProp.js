import './App.css'

function MyGreetingProp(props) {
    const greetings = "Hello, let's start function Components..."

    console.log("prop is ", props.msg)
    return (
        <div className="App">
            <h1>
                {props.msg};
            </h1>
        </div>
    )

}
export default MyGreetingProp;
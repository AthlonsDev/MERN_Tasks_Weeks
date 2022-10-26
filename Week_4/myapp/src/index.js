import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Greeting from './MyGreetingApp'
import GreetingProp from './MyGreetingProp'
import ColorApp from './AppBackgroundColor'
import Counter from './Counter'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <GreetingProp msg = "Hi it's Monday" /> */}
    {/* <Greeting/> */}
    {/* <ColorApp heading="This is first element" lbl="Name :" color="green"/>
    <ColorApp heading="This is the second element" lbl="Name :" color="red"/>
    <ColorApp heading="This is the third element" lbl="Name :" color="blue"/> */}

    <Counter/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

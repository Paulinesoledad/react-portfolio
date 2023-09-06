import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client'
import App from "./App";
import  './index.css';

// ReactDOM.render(<App />, document.querySelector("#root"));
createRoot(document.getElementById('root')).render(<App />)
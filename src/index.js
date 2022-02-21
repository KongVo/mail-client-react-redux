import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";

//import 'bootstrap/dist/js/bootstrap.bundle.min';
//import $ from 'jquery';
//import Popper from 'popper.js';

//import "../src/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/css/main.css";
import "../src/css/responsive.css";

ReactDOM.render(<App  />, document.getElementById("root"));
registerServiceWorker();
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";
require("./index.html");

import App from "./js/app";


ReactDOM.render(<App className="app" />,
  document.getElementById('root'));


import React from 'react'
import ReactDOM from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./assets/css/main.css";
import Routing from './router';

ReactDOM.createRoot(document.getElementById('root'))
.render(
  <React.StrictMode>
    <Routing></Routing>
  </React.StrictMode>,
)

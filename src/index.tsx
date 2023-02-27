import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./App";
import {state} from "./components/redux/state";
import {BrowserRouter} from "react-router-dom";




ReactDOM.render(

    <App state={state} />,
 document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { RootStateType,} from "./components/redux/state";
import { Provider } from 'react-redux';
import { store } from './components/redux/redux-store';
import {BrowserRouter} from "react-router-dom";



const rerenderEntireTree = () => {
    ReactDOM.render(

        <BrowserRouter>
        <Provider store={store} >
            <App />
        </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

//store.subscribe(rerenderEntireTree)

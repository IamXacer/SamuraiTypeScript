import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./App";
import { RootStateType,} from "./components/redux/state";
import { Provider } from 'react-redux';
import { store } from './components/redux/redux-store';



const rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store} >
        <App
           // state={_state}
           //
//  store={store}
           //  dispatch={store.dispatch.bind(store)}
        />
        </Provider>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

//store.subscribe(rerenderEntireTree)

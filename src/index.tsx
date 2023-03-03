import React from 'react';
import {state, subscribe} from "./components/redux/state";
import ReactDOM from 'react-dom';
import {App} from "./App";
import {addNewPost, RootStateType, updateNewPostText} from "./components/redux/state";




const rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <App state={state} addNewPost={addNewPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)

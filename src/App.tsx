import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Navbar/Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Profile } from './components/Profile/Profile';
import { Dialog } from './components/Dialogs/Dialog';
import {addNewPost, ProfilePageType, RootStateType, state, updateNewPostText} from "./components/redux/state";



export type AppType ={
    state: RootStateType
    addNewPost:(postMessage:string)=>void
    updateNewPostText:(newText:string)=>void
}
export const App =(props:AppType)=> {
  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header />
              <Nav />
              <div >
                  <Routes>
               <Route path="/profile" element={<Profile
                   addNewPost={props.addNewPost}
                   newPostText={props.state.profilePage.newPostText}
                   profilePagestate={state.profilePage.posts}
                   updateNewPostText={props.updateNewPostText}
               />}/>
                      <Route path="/dialogs/*" element= {<Dialog
                          dialogsPage={props.state.dialogsPage}
                      />}/>

                  </Routes>
              </div>
          </div>
      </BrowserRouter>
/*

 */
  );
}



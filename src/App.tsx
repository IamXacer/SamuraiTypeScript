import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Navbar/Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Profile } from './components/Profile/Profile';
import { Dialog } from './components/Dialogs/Dialog';
import {RootStateType, state} from "./components/redux/state";



export type AppType ={
    state: RootStateType
}
export const App =(props:AppType)=> {
  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header />
              <Nav />
              <div >
                  <Routes>
               <Route path="/profile" element={<Profile profilePage={state.profilePage.posts}/>}/>
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



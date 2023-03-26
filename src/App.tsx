import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Navbar/Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Profile } from './components/Profile/Profile';
import { SuperDialogContainer} from "./components/Dialogs/DialogsContainer";
import { UsersContainer } from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";



export type AppType ={
  //  state: RootStateType
  //  addNewPost:(postMessage:string)=>void
   // updateNewPostText:(newText:string)=>void
 // store:StoreType
  //  dispatch:(action:ActionTypes)=>void
}
export const App =(
    props:AppType
)=> {
   // const state = props.store.getState()
  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <HeaderContainer />
              <Nav />
              <div >

                  <Routes>

             {/*  <Route path="/profile/:userId" element={<ProfileContainer/>}/>*/}
                      <Route path={'/profile/:userId?'}>
                      <Route index element={<ProfileContainer /*store={props.store} *//>}/>
                      <Route path=':userId'
                             element={<ProfileContainer /*store={props.store} *//>}/>
                  </Route>

                      <Route path="/dialogs/*" element= {<SuperDialogContainer  />}/>
                      <Route path="/users" element={<UsersContainer />}/>

                  </Routes>
              </div>
          </div>
      </BrowserRouter>
/*

 */
  );
}



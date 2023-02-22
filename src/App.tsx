import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Navbar/Nav";
import {MyPosts} from "./components/Profile/MyPosts/MyPosts";
import {Profile} from "./components/Profile/Profile";

export const App =()=> {
  return (
   <div className='app-wrapper'>
      <Header/>
    <Nav/>
      <Profile/>


   </div>
  );
}



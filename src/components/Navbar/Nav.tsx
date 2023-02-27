import React from "react";
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
export const Nav = () => {
  return (
      <nav className={s.nav}>

          <div className={s.items}>
              <NavLink to='/profile' className = { nav => nav.isActive ? s.active : s.item } >Profile</NavLink>
          </div>

          <div className={s.items}>
              <NavLink to='/dialogs' className = { nav => nav.isActive ? s.active : s.item }>Messages</NavLink>
          </div>
          <div className={s.items}>
              <NavLink to='/news' className = { nav=> nav.isActive? s.active : s.item }>News</NavLink>
          </div>
          <div className={s.items}>
              <NavLink  to='/music' className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
          </div >
          <div className={s.items}>
              <NavLink to='/setting' className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
          </div>
      </nav>
  )
}
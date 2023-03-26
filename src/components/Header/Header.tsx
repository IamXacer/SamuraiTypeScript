import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {mapStateToPropsType} from "./HeaderContainer";

export const Header = (props:mapStateToPropsType) => {
  return (
      <header className={s.header}>
          <img src ='https://dynamic.brandcrowd.com/asset/logo/a2914386-9b94-4a31-96eb-c5ff9fdfe1b9/insta-square?v=637716019321130000'/>
     <div className={s.loginBlock}>
         {props.isAuth ? props.login :<NavLink to={'/login'}>Login</NavLink >}
     </div>
      </header>
  )
}
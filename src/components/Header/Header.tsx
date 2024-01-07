import React, {MouseEventHandler} from "react";
import s from './Header.module.css'
import { NavLink} from "react-router-dom";
import {MapStatePropsType} from "./HeaderContainer";

export const Header = (props:MapStatePropsType) => {
  /*  const LoginClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (props && typeof props.logout === 'function') {
            props.logout;
        }
    }*/
  return (
      <header className={s.header}>
          <img src ='https://dynamic.brandcrowd.com/asset/logo/a2914386-9b94-4a31-96eb-c5ff9fdfe1b9/insta-square?v=637716019321130000'/>
     <div className={s.loginBlock}>
         {props.isAuth ?
            <div> {props.login}
                <button onClick={props.logoutTC ? props.logoutTC : () => {}}>Log out</button>
            {/*    <Navigate to={'/profile'}/>*/}
                {/* <button onClick={props.logout}>Log out</button>*/}
            </div>
             :<NavLink to={'/login'}>Login</NavLink >}
     </div>
      </header>
  )
}
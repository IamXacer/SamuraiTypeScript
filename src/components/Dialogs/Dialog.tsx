import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogPageType, MessageType, ProfilePageType} from "../redux/state";

type DialogType = {
    dialogsPage:DialogPageType

}
const DialogItem = (props: DialogType) => {
    let path = 'dialog/2'+props.dialogsPage.dialogs.map(id=>id.id)
    return (<div>
           <NavLink to={path} >
                {props.dialogsPage.dialogs.map(name=><div>{name.name}</div>)}</NavLink> </div>
    )
}
export const Dialog = (props:DialogType) => {
    let dialogsData = [
        {id: 1, name: 'Dimich'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Sasha'},

    ]
    return (
        <div className={s.imgClas}>

            <div className={s.backgroundIMG}>
                <div className={s.dialogItem}>
                    <div><NavLink to='dialog/*' className={s.dialog}>
                        <div className={s.dialog}><DialogItem dialogsPage={props.dialogsPage}/></div>
                    </NavLink></div>
            {/*        <div><NavLink to='dialog/2' className={s.dialog}>Andrey</NavLink></div>
                    <div><NavLink to='dialog/3' className={s.dialog}>Sveta</NavLink></div>
                    <div><NavLink to='dialog/4' className={s.dialog}>Valera</NavLink></div>
                    <div><NavLink to='dialog/5' className={s.dialog}>Viktor</NavLink></div>
                    <div><NavLink to='dialog/6' className={s.dialog}>Sasha</NavLink></div>*/}

                </div>
                <div className={s.message}>
                    <div className="massages">Hi</div>
                    <div className="massages">How are you</div>
                    <div className="massages">Yo</div>
                </div>
            </div>

        </div>
    )
}
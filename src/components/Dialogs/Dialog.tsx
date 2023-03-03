import React, {useRef} from "react";
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
    let messageElemets = props.dialogsPage.messages.map(m=><div >{m.message}</div>)
    let dialogsElement = props.dialogsPage.dialogs.map(d=><div >{d.name}</div>)
    let dialogsData = [
        {id: 1, name: 'Dimich'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Sasha'},

    ]
    let newDialogEl = useRef<HTMLTextAreaElement>(null)
    const addDialog = () =>{
if (newDialogEl.current !==null){
    alert(newDialogEl.current.value)
}
    }
    return (
        <div className={s.imgClas}>
            <div className={s.backgroundIMG}>
            <div className={s.dialogItem}>
               {dialogsElement}
            </div>
            <div className={s.message}>
                {messageElemets}
                <div><textarea ref={newDialogEl}></textarea></div>
                <div onClick={addDialog}><button>AddDialog</button></div>
            </div>

            </div>
        </div>
    )
}
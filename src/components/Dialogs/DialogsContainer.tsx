import React, {ChangeEvent, useRef} from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {
    ActionTypes,
    DialogPageType, RootStateType, StoreType,
} from "../redux/state";
import {sendTextAC, updateNewMesssageTextAC} from "../redux/dialogs-reducer";
import { Dialog } from "./Dialog";
import StoreContex from "../../StoreContex";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";

type DialogType = {
   // dialogsPage:DialogPageType
  //  dispatch:(action:ActionTypes)=>void
//store:StoreType
}
/*const DialogItem = (props: DialogType) => {
    let path = 'dialog/2'+store.dialogsPage.dialogs.map(id=>id.id)
    return (<div>
           <NavLink to={path} >
                {store.dialogsPage.dialogs.map(name=><div>{name.name}</div>)}</NavLink> </div>
    )
}*/
// export const DialogsContainer = (props:DialogType) => {
//
//     return ( <StoreContex.Consumer>
//             {store => {
//                 let state = store.getState().dialogsPage;
//
//                 //let messageElemets = state.messages.map(m=><div >{m.message}</div>)
//              //   let dialogsElement = state.dialogs.map(d=><div >{d.name}</div>)
//                 let newMessageBody = state.newMessageText
//
//                 const onNewMassageChange = (newText: string) => {
//                     //  let text = e.currentTarget.value
//                     store.dispatch(updateNewMesssageTextAC(newText))
//                 }
//                 const addDialog = () => {
//                     store.dispatch(sendTextAC(newMessageBody))
//
//                 }
//             return    <Dialog
//      //  store={store}
//                         addNewDialog={addDialog}
//                         updateNewMessageText={onNewMassageChange}
//                         dialogsPage={state}/>
//             } }
//     </StoreContex.Consumer>
//     )
// }
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    dialogsPage:DialogPageType
}
let mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsReducer
    }
}
type mapDispatchToPropsType = {
    updateNewMessageText:(newText:string)=>void
    addNewDialog:(newMessageBody:string)=>void
}
let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType =>{
    return {
        updateNewMessageText:(newText:string)=>{
            dispatch(updateNewMesssageTextAC(newText))
        },
        addNewDialog:(newMessageBody:string)=>{
            dispatch(sendTextAC(newMessageBody))
        },
    }
}

export const SuperDialogContainer = connect(mapStateToProps,mapDispatchToProps)(Dialog)
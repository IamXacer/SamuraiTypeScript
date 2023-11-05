import React, {ChangeEvent, useRef} from "react";
import {DialogPageType, sendTextAC} from "../redux/dialogs-reducer";
import { Dialog } from "./Dialog";
import StoreContex from "../../StoreContex";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {compose, Dispatch} from "redux";
import {witchAutchRedirect} from "../../hoc/AutchRedirect";

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
type mapDispatchToPropsType = {
    //updateNewMessageText:(newText:string)=>void
    addNewDialog:(newMassageBody:string)=>void
}
let mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsReducer,

    }
}

/*let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType =>{
    return {
        updateNewMessageText:(newText:string)=>{
            dispatch(updateNewMesssageTextAC(newText))
        },
        addNewDialog:(newMessageBody:string)=>{
            dispatch(sendTextAC(newMessageBody))
        },
    }
}*/
/*export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {updateNewMessageText: updateNewMesssageTextAC,
            addNewDialog:sendTextAC
        }),
    witchAutchRedirect
)(Dialog)*/

let AutchRedirectComponent = witchAutchRedirect(Dialog)


export const SuperDialogContainer = connect(mapStateToProps,
    {
        addNewDialog:sendTextAC
    })
(AutchRedirectComponent)

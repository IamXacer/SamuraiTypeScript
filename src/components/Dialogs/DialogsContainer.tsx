import React, {ChangeEvent, useRef} from "react";
import {DialogPageType, sendTextAC} from "../redux/dialogs-reducer";
import { Dialog } from "./Dialog";
import StoreContex from "../../StoreContex";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {witchAutchRedirect} from "../../hoc/AutchRedirect";

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

let AutchRedirectComponent = witchAutchRedirect(Dialog)


export const SuperDialogContainer = connect(mapStateToProps,
    {
        addNewDialog:sendTextAC
    })
(AutchRedirectComponent)
export default SuperDialogContainer;

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
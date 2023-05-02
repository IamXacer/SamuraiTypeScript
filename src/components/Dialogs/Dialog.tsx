import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogsPropsType} from "./DialogsContainer";
import {Navigate } from 'react-router-dom';
import {Field, InjectedFormProps, reduxForm} from "redux-form";


// type DialogType = {
//     dialogsPage:DialogPageType
//     //  dispatch:(action:ActionTypes)=>void
//     //store:StoreType
//     // newMessageBody:string
//     updateNewMessageText:(newText: string)=>void
//     addNewDialog:(dialogMessage: string)=>void
// }

export const Dialog = (props: DialogsPropsType) => {
    let {messages, dialogs} = props.dialogsPage;

    let messageElemets = messages.map(m=><div key={m.id} >{m.message}</div>)
    let dialogsElement = dialogs.map(d=><div key={d.id}>{d.name}</div>)
    // let newMessageBody = newMessageText


    const onNewMassageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
      //  props.updateNewMessageText(newText)
        //  props.store.dispatch(updateNewMesssageTextAC(newText))
    }

const addNewMessage = (values:any) => {
    props.addNewDialog(values.newMassageBody)
}
    return (
        <div className={s.imgClas}>
            <div className={s.backgroundIMG}>
                <div className={s.dialogItem}>
                    {dialogsElement}
                </div>
                <div className={s.message}>
                    <div>{messageElemets}</div>
        {/*            <div><textarea value={newMessageText}
                                   onChange={onNewMassageChange}
                                   placeholder={'Enter message'}></textarea></div>
                    <div onClick={addDialog}><button>AddDialog</button></div>*/}
<TextareaReduxForm onSubmit={addNewMessage}/>

                </div>

            </div>
        </div>
    )
}
type TextareaFormType = {
    newMassageBody:string
}
const TextareaForm : React.FC<InjectedFormProps<TextareaFormType>> = (props)=>{
    return (
    <form  onSubmit={props.handleSubmit}>
        <div>
            <Field name={'newMassageBody'} component={'input'}
                placeholder={'Enter message'}></Field>
        </div>
        <div ><button>AddDialog</button></div>
    </form>
    )
}
const TextareaReduxForm =reduxForm<TextareaFormType>({form: 'Textarea'})(TextareaForm)
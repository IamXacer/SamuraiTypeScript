import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {Textarea} from "../../../FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../../../utils/validators/validators";

export type TextareaFormType = {
    addnewPostText:string
    postId:string
}
const maxLengthCreator10 = maxLengthCreator(10)
export const addNewPostForm: React.FC<InjectedFormProps<TextareaFormType>>
    = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>

            <div><Field name={'addnewPostText'}  component={Textarea}
                        placeholder={'Enter message'}
                        validate={[requiredField,maxLengthCreator10]}
            />
            </div>
            <div> <button>AddPost</button></div>
        </form>
    )
}

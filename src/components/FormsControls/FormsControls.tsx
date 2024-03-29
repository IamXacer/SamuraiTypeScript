import React from "react";
import s from './FormControls.module.css'
import {Field} from "redux-form";
import {requiredField} from "../../utils/validators/validators";

const FormControl: React.FC<TextareaProps> = ({ input, meta:{touched,error}
                                                  , children,...props }) =>{
  const hasError = touched && error
    return (
        <div className={s.formControl + ' ' +(hasError? s.error : '' )} >
            <div>
           {/*     <div><textarea {...input} {...props} /></div>*/}
                {children}
            </div>
            <div >{
                hasError ? <span>{error}</span> : ''}</div>
        </div>
    );
}
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    input: InputProps;
    meta: MetaProps;
    child:React.ReactNode
}
export const Textarea: React.FC<TextareaProps> = (props) => {
    const { input, meta,child, ...restprops } = props
  return <FormControl {...props}><textarea {...input} {...restprops} /></FormControl>
};

/*export const Textarea: React.FC<TextareaProps> = ({ input, meta, ...props }) => {
   const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + ' ' +(hasError? s.error : '' )} >
            <div><textarea {...input} {...props} /></div>
    <div >{hasError && <span>{meta.error}</span>}</div>
        </div>
    );
};*/

interface inputProps {
    input: any;
    meta: any;
    child:React.ReactNode
}
export const Input: React.FC<inputProps> = (props) => {
    const { input, meta,child, ...restprops } = props
    return <FormControl {...props}><input {...input} {...restprops} /></FormControl>
};

interface InputProps {
    name: string;
    onBlur: () => void;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onDragStart: () => void;
    onDrop: () => void;
    onFocus: () => void;
    value: string;

}
interface MetaProps {
    active: boolean;
    dirty: boolean;
    error?: string;
    initial?: string;
    invalid: boolean;
    pristine: boolean;
    submitFailed: boolean;
    submitting: boolean;
    touched: boolean;
    valid: boolean;
    visited: boolean;
    warning?: string;
}
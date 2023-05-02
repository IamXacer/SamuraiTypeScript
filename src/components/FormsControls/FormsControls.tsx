import React from "react";
import s from './FormControls.module.css'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    input: InputProps;
    meta: MetaProps;
}

export const Textarea: React.FC<TextareaProps> = ({ input, meta, ...props }) => {
   const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + ' ' +(hasError? s.error : '' )} >
            <div><textarea {...input} {...props} /></div>
    <div >{hasError && <span>{meta.error}</span>}</div>
        </div>
    );
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
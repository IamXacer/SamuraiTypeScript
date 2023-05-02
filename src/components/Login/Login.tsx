import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from '../Users/Users.module.css'
type FormDataType = {
    login:string
    password:string
    rememberMe:boolean
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> =(props) => {
    return (
        <div className={s.backgroundIMG}>
            <h1>Login</h1>
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder={'Login'} name={'login'} component={'input'}/></div>
                <div><Field placeholder={'password'}name={'password'}component={'input'}/></div>
                <div><Field type={'checkbox'}name={'rememberMe'}component={'input'}/>rememberMe</div>
                <div>
                    <button>Login</button>
                </div>

            </form>
        </div>)
}
const LoginReduxForm =reduxForm<FormDataType>({form: 'Login'})(LoginForm)
const Login = () => {
    const onSubmit = (formData:FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
export default Login



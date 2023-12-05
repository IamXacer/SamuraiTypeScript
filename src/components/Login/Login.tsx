import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from '../Users/Users.module.css'
import {Input} from "../FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {InitialStateType, login} from "../redux/auth-reducer";
import {witchAutchRedirect} from "../../hoc/AutchRedirect";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";

type FormDataType = {
    email:string
    password:string
    rememberMe:boolean
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> =({handleSubmit,error}) => {
    return (
        <div className={s.backgroundIMG}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder={'Email'} name={'email'}
                            validate={[requiredField]}
                            component={Input}/>
                </div>
                <div><Field placeholder={'password'}name={'password'}
                            type={'password'}
                            validate={[requiredField]}
                            component={Input}/></div>
                <div className={s.checkboxContainer}>
                    <Field  component={Input} name={'rememberMe'}
                              type={"checkbox"}/> rememberMe
                </div>
                { error && <div className={s.formSummaryError}>
                    {error}
                </div>
                }
                <div>
                    <button>Login</button>
                </div>

            </form>
        </div>)
}
const LoginReduxForm = reduxForm<FormDataType>({form: 'Login'})(LoginForm)
const Login = (props:any) => {
    const onSubmit = (formData:FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
       // console.log(formData)
    }
if (props.isAuth){
 return   <Navigate to={'/profile'}/>
}
    return (
        <div>

            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )

}
type mapStateToPropsType = {
    isAuth:InitialStateType


}
let AutchRedirectComponent = witchAutchRedirect(Login)
const mapStateToProps = (state:AppStateType)=>({
    isAuth:state.auth.isAuth
})
export default connect (mapStateToProps,{login,AutchRedirectComponent}) (Login)



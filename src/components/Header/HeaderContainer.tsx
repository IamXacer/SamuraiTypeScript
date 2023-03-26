import React from "react";
import {Header} from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import {setUserAuthDataAC} from "../redux/auth-reducer";
import {AppStateType} from "../redux/redux-store";


class HeaderContainer extends React.Component<any, any>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials:true}).then(res => {
                debugger
                if (res.data.resultCode === 0){
    let {id,email,login} = res.data.data
    this.props.setUserAuthDataAC(id,email,login)

}
        })
    }

    render () {
      return  <Header {...this.props}
                      isAuth={this.props.isAuth}
                      login={this.props.login}/>
}
}
export type mapStateToPropsType ={
    login: null,
    isAuth: true

}
const mapStateToProps = (state:AppStateType) => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login,

})
export default connect (mapStateToProps,{setUserAuthDataAC})
 (HeaderContainer)

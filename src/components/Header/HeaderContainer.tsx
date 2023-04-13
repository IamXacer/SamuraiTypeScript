import React from "react";
import {Header} from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import {getMeTC, setUserAuthDataAC} from "../redux/auth-reducer";
import {AppStateType} from "../redux/redux-store";

type MapDispatchPropsType ={
    getMeTC:(userId: null,
                 email:null,
                 login:any,
                 isAuth:boolean)=>void
}

/*export type mapStateToPropsType = InitialStateType*/
export type HeaderPropsType = MapDispatchPropsType & MapStatePropsType

class HeaderContainer extends React.Component<any, HeaderPropsType>{
    componentDidMount() {
       this.props.getMeTC();
/*        loginAPI.getMe().then(res => {
                if (res.data.resultCode === 0){
    let {id,email,login} = res.data.data
    this.props.setUserAuthDataAC(id,email,login)

}
        })*/
    }

    render () {
      return  <Header {...this.props}
                      isAuth={this.props.isAuth}
                      login={this.props.login}/>
}
}
export type MapStatePropsType ={
    login: null,
    isAuth: true

}
const mapStateToProps = (state:AppStateType) => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login,

})
export default connect (mapStateToProps,{getMeTC})
 (HeaderContainer)

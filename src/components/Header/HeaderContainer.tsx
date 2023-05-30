import React from "react";
import {Header} from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import {getMeTC, logout, setUserAuthDataAC} from "../redux/auth-reducer";
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

    render () {
      return  <Header {...this.props}
                      isAuth={this.props.isAuth}
                      login={this.props.login}
                      logout={this.props.logout}
      />
}
}
export type MapStatePropsType ={
    login: null,
    isAuth: boolean,
    logout:null

}
const mapStateToProps = (state:AppStateType):MapStatePropsType => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login,
logout:state.auth.logout

})
export default connect (mapStateToProps,{logout})
 (HeaderContainer)

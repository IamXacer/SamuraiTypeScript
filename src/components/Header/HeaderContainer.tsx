import React from "react";
import {Header} from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import {getMeTC,  logoutTC} from "../redux/auth-reducer";
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
                      logoutTC={this.props.logoutTC}
      />
}
}
export type MapStatePropsType ={
    login: null,
    isAuth: boolean,
    logoutTC:null

}
const mapStateToProps = (state:AppStateType):MapStatePropsType => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login,
    logoutTC:state.auth.logout

})
export default connect (mapStateToProps,{logoutTC})
 (HeaderContainer)

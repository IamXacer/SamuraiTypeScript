import React from "react";
import {Profile} from "./Profile";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {getProfileStatusTC, getProfileTC, initStateType, savePhoto, updateStatus} from "../redux/profile-reducer";
import {Navigate, useParams} from 'react-router-dom';
import {witchAutchRedirect} from "../../hoc/AutchRedirect";
import {compose} from "redux";

export function withRouter(Children: any) {
    return (props: any) => {

        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class ProfileContainer extends React.Component<any, initStateType> {
    refreshProfile (){
        let userId = this.props.match.params.userId
        if (!userId ) {

            userId = this.props.authorizedUserId
            if  (!userId){
                this.props.history.push('/login')
            }}
        this.props.getProfileTC(userId)
        this.props.getProfileStatusTC(userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps:Readonly<mapStateToPropsType>, prevState:Readonly<initStateType>, snapshot?:any) {
        if (this.props.userId != this.props.match.params.userId )
        this.refreshProfile()
    }
    render() {
        //  if (!this.props.isAuth ) return <Navigate  to={'/login'}/>
        return (
            <Profile {...this.props}
                     goToEditMode={this.props.goToEditMode}
          //photo={this.props.photo}
                isOwner ={!this.props.match.params.userId}
                     profile={this.props.profile}
                     statusss={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}

            />
        )
    }
}
//let witchRedirect = witchAutchRedirect(ProfileContainer)

export type mapStateToPropsType = {
    profile: any,
    status:string,
    authorizedUserId:null,
    isAuth:boolean,

}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profileReducer.profile,
        status: state.profileReducer.statusss,
        authorizedUserId:state.auth.userId,
        isAuth:state.auth.isAuth,


    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {
     //   witchRedirect,
        getProfileTC,getProfileStatusTC,updateStatus,savePhoto}),
    withRouter,
  witchAutchRedirect,
)(ProfileContainer)

/*
let AutchRedirectComponent = witchAutchRedirect(ProfileContainer)



let WitchUrlDataContainerComponent =  withRouter(AutchRedirectComponent)
export default connect(mapStateToProps,{getProfileTC})
(WitchUrlDataContainerComponent);*/

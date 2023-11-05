import React from "react";
import {Profile} from "./Profile";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {getProfileStatusTC, getProfileTC, initStateType, updateStatus} from "../redux/profile-reducer";
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
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 1049
        }
        this.props.getProfileTC(userId)
        this.props.getProfileStatusTC(userId)
        /*   usersAPI.getProfile(userId).then(res => {
               this.props.setUserProfileAC(res.data)
           })*/
    }

    render() {
        //  if (!this.props.isAuth ) return <Navigate  to={'/login'}/>
        return (
            <Profile {...this.props} profile={this.props.profile}
                     statusss={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        )
    }
}

export type mapStateToPropsType = {
    profile: any,
    status:string
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profileReducer.profile,
        status: state.profileReducer.statusss

    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getProfileTC,getProfileStatusTC,updateStatus}),
    withRouter,
  witchAutchRedirect,
)(ProfileContainer)

/*
let AutchRedirectComponent = witchAutchRedirect(ProfileContainer)



let WitchUrlDataContainerComponent =  withRouter(AutchRedirectComponent)
export default connect(mapStateToProps,{getProfileTC})
(WitchUrlDataContainerComponent);*/

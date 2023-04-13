import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {AppStateType} from "../redux/redux-store";
import { connect } from "react-redux";
import {getProfileTC, initStateType, setUserProfileAC} from "../redux/profile-reducer";
import { useParams } from 'react-router-dom';
import {usersAPI} from "../../api/api";

export function withRouter(Children: any) {
    return (props: any) => {

        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}
class ProfileContainer extends React.Component<any, initStateType>{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {userId = 2}
   this.props.getProfileTC(userId)
     /*   usersAPI.getProfile(userId).then(res => {
            this.props.setUserProfileAC(res.data)
        })*/
    }

    render (){
return(
<Profile {...this.props} profile={this.props.profile}/>
)
    }
}
export type mapStateToPropsType = {
    profile:any,

}
let mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return{
profile:state.profileReducer.profile
    }
}
let WitchUrlDataContainerComponent =  withRouter(ProfileContainer)
export default connect(mapStateToProps,{getProfileTC})
(WitchUrlDataContainerComponent);
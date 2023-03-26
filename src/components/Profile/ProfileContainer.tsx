import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {AppStateType} from "../redux/redux-store";
import { connect } from "react-redux";
import {initStateType, setUserProfileAC} from "../redux/profile-reducer";
import {DialogPageType} from "../redux/state";
import { useParams } from 'react-router-dom';

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId ).then(res => {
            this.props.setUserProfileAC(res.data)
        })
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
export default connect(mapStateToProps,{setUserProfileAC})
(WitchUrlDataContainerComponent);
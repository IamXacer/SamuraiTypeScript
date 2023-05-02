import React from "react";
import { connect } from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {
   followTC, getUsersTC,
  setCurrentAC,
  setUsersAC,
  setUsersTotalCountAC,
  ToggleFeathingAC, ToglefollowingInProgress,
   unfollowTC,
  UsersType
} from "../redux/users-reducer";
import {Users} from "./Users";
import s from "../Users/Users.module.css"
import {Preloader} from "../common/Preloader/Preloader";
import {witchAutchRedirect} from "../../hoc/AutchRedirect";
import { compose } from "redux";


export type SuperUserContainerType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = {
  users:UsersType[]
  pageSize:number
  totalUserCount:number
  currenPage:number
  isFetching:boolean
  followingInProgress:string[]
}

type mapDispatchToPropsType = {
  follow:(userId:string)=>void
  unfollow:(userId:string)=>void
  setUser:(users:UsersType[])=>void
  setCurrentPage:(currenPage:number)=>void
  setTotalUserCount:(totalCount:number)=>void
   tofleIsFeathing:(isFetching:boolean)=>void
  ToglefollowingInProgress:(isFetching:boolean, userId:string)=>void
  getUsers:(currenPage:number,pageSize:number)=>void

}
class UsersAPIComponent extends React.Component<SuperUserContainerType, UsersType> {
  componentDidMount() {
    this.props.getUsers(this.props.currenPage,this.props.pageSize)
  }

     onPageChanged = (pageNumber:number)=>{
       this.props.getUsers(pageNumber,this.props.pageSize)

     }
  render (){
    return <div className={s.backgroundIMG}>
      {this.props.isFetching ? <Preloader/>
          :<Users
              totalUserCount={this.props.totalUserCount}
              users={this.props.users}
              currenPage={this.props.currenPage}
              follow={this.props.follow}
              unfollow={this.props.unfollow}
              pageSize={this.props.pageSize}
              setTotalUserCount={this.props.setTotalUserCount}
              setUser={this.props.setUser}
              setCurrentPage={this.props.setCurrentPage}
              isFetching={this.props.isFetching}
              tofleIsFeathing={this.props.tofleIsFeathing}

              followingInProgress={this.props.followingInProgress}
              ToglefollowingInProgress={this.props.ToglefollowingInProgress}
              getUsers={this.props.getUsers}

          />}
      </div>

  }

}
let witchRedirect = witchAutchRedirect(UsersAPIComponent)
let mapStateToProps = (state:AppStateType):mapStateToPropsType => {
  return{
    users:state.userPage.users,
    pageSize:state.userPage.pageSize,
    totalUserCount:state.userPage.totalUserCount,
    currenPage:state.userPage.currenPage,
    isFetching:state.userPage.isFetching,
    followingInProgress:state.userPage.followingInProgress

  }
}
/*let WitchUrlDataContainerComponent =  withRouter(AutchRedirectComponent)*/
/*let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    follow: (userId: number) => {
      dispatch(FollowAC(userId))
    },
    unfollow: (userId: number) => {
      dispatch(ufollowAC(userId))
    },
    setUser: (users: UsersType[]) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber: number) => {
      dispatch(setCurrentAC(pageNumber))
    },
    setTotalUserCount: (totalCount: number) => {
      dispatch(setUsersTotalCountAC(totalCount))
    },
    tofleIsFeathing: (isFetching: boolean) => {
      dispatch(ToggleFeathingAC(isFetching))
    }

  }
}*/


/*export const UsersContainer = connect(mapStateToProps, {
  follow: followTC,
  unfollow: unfollowTC,
  setUser: setUsersAC,//
  setCurrentPage: setCurrentAC,
  setTotalUserCount: setUsersTotalCountAC,//
  tofleIsFeathing: ToggleFeathingAC,//
  ToglefollowingInProgress,
  getUsers:getUsersTC
})(witchRedirect)*/
export default compose<React.ComponentType>(connect(mapStateToProps, {
  //witchRedirect,
  follow: followTC,
  unfollow: unfollowTC,
  setUser: setUsersAC,//
  setCurrentPage: setCurrentAC,
  setTotalUserCount: setUsersTotalCountAC,//
  tofleIsFeathing: ToggleFeathingAC,//
  ToglefollowingInProgress,
  getUsers:getUsersTC,
  witchAutchRedirect
}))(UsersAPIComponent)

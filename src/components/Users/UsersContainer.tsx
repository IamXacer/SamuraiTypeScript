import React from "react";
import { connect } from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {
  followTC, getUsersTC, onPageChengeTC,
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
import {
  getCurrenPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize, getPortionSize,
  getTotalUserCount,
  getUsers
} from "../redux/users-selectors";
import {usersAPI} from "../../api/api";


export type SuperUserContainerType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = {
  users:UsersType[]
  pageSize:number
  totalItemCount:number
  currenPage:number
  isFetching:boolean
  followingInProgress:string[]
  portionSize:number
}

type mapDispatchToPropsType = {
  follow:(userId:string)=>void
  unfollow:(userId:string)=>void
  setUser:(users:UsersType[])=>void
  setCurrentPage:(currenPage:number)=>void
  setTotalUserCount:(totalCount:number)=>void
   tofleIsFeathing:(isFetching:boolean)=>void
  ToggleFeathingInProgress: (isFetching: boolean, userId: string) => void;
  getUsers:(currenPage:number,pageSize:number)=>void
  onPageChengeTC: (pageNumber: number, pageSize: number) => void;

}
class UsersAPIComponent extends React.Component<SuperUserContainerType, UsersType> {

  componentDidMount() {
    this.props.getUsers(this.props.currenPage,this.props.pageSize)

  }

     onPageChanged = (pageNumber:number)=>{
       this.props.getUsers(pageNumber,this.props.pageSize)

     }


  render (){
    console.log(this.props)
    return <div className={s.backgroundIMG}>
      {this.props.isFetching ? <Preloader/> :<Users
              totalItemCount={this.props.totalItemCount}
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
              onPageChengeTC={this.props.onPageChengeTC}
              followingInProgress={this.props.followingInProgress}
              portionSize={this.props.portionSize}
              ToggleFeathingInProgress={this.props.ToggleFeathingInProgress}
              getUsers={this.props.getUsers}

          />}
      </div>

  }


}
let witchRedirect = witchAutchRedirect(UsersAPIComponent)
let mapStateToProps = (state:AppStateType):mapStateToPropsType => {
  return{
    users:getUsers(state),
    pageSize:getPageSize(state),
    totalItemCount:getTotalUserCount(state),
    currenPage:getCurrenPage(state),
    isFetching:getIsFetching(state),
    followingInProgress:getFollowingInProgress(state),
    portionSize:getPortionSize(state),


  }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {
  witchRedirect,
  follow: followTC,
  unfollow: unfollowTC,
  setUser: setUsersAC,//
  setCurrentPage: setCurrentAC,
  setTotalUserCount: setUsersTotalCountAC,//
  tofleIsFeathing: ToggleFeathingAC,//
  ToglefollowingInProgress,
  getUsers:getUsersTC,
  witchAutchRedirect,
  onPageChengeTC,
}))(UsersAPIComponent)

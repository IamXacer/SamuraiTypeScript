import React from "react";
import { connect } from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {
  followSuccess, followTC, getUsersTC,
  setCurrentAC,
  setUsersAC,
  setUsersTotalCountAC,
  ToggleFeathingAC, ToglefollowingInProgress,
  unfollowSuccess, unfollowTC,
  UsersType
} from "../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import prealoader from "../../assets/img/Prealoader.svg"
import s from "../Users/Users.module.css"
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


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
       /*     this.props.setCurrentPage(pageNumber)
       this.props.tofleIsFeathing(true)
       usersAPI.getUsers(pageNumber,this.props.pageSize)
           .then(res => {
             this.props.setUser(res.data.items)
             this.props.tofleIsFeathing(true)
             this.props.setTotalUserCount(res.data.totalCount)
         })*/
     }
  render (){
    /*    let pagesCount = Math.ceil(this.props.totalUserCount/this.props.pageSize)
          let pages=[];
          for (let i=1; i<=pagesCount; i++){
             pages.push(i);
          }*/

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

export const UsersContainer = connect(mapStateToProps, {
  follow: followTC,
  unfollow: unfollowTC,
  setUser: setUsersAC,//
  setCurrentPage: setCurrentAC,
  setTotalUserCount: setUsersTotalCountAC,//
  tofleIsFeathing: ToggleFeathingAC,//
  ToglefollowingInProgress,
  getUsers:getUsersTC
})(UsersAPIComponent)

/*export const UsersContainer = connect(mapStateToProps, {
  follow: followTC,
  unfollow: unfollowTC,
  setCurrentPage: setCurrentAC,
  ToglefollowingInProgress,
  getUsers:getUsersTC
})(UsersAPIComponent)*/

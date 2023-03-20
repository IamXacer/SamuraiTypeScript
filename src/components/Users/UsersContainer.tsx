import React from "react";
import { connect } from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../redux/redux-store";
import {
  FollowAC,
  setCurrentAC,
  setUsersAC,
  setUsersTotalCountAC,
  ToggleFeathingAC,
  ufollowAC,
  UsersType
} from "../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import prealoader from "../../assets/img/Prealoader.svg"
import s from "../Users/Users.module.css"
import {Preloader} from "../common/Preloader/Preloader";


export type SuperUserContainerType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = {
  users:UsersType[]
  pageSize:number
  totalUserCount:number
  currenPage:number
  isFetching:boolean
}

type mapDispatchToPropsType = {
  follow:(userId:number)=>void
  unfollow:(userId:number)=>void
  setUser:(users:UsersType[])=>void
  setCurrentPage:(currenPage:number)=>void
  setTotalUserCount:(totalCount:number)=>void
  tofleIsFeathing:(isFetching:boolean)=>void
}
class UsersAPIComponent extends React.Component<SuperUserContainerType, UsersType> {
  componentDidMount() {
    this.props.tofleIsFeathing(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currenPage}&count=${this.props.pageSize}`).then(res => {
      this.props.tofleIsFeathing(false)
      this.props.setUser(res.data.items)
      this.props.setTotalUserCount(res.data.totalCount)
    })
  }
  /*   onPageChanged = (pageNumber:number)=>{
         this.props.setCurrentPage(pageNumber)
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(res => {
             this.props.setUser(res.data.items)
             this.props.setTotalUserCount(res.data.totalCount)
         })
     }*/
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
              pageSize={this.props.pageSize}
              setTotalUserCount={this.props.setTotalUserCount}
              setUser={this.props.setUser}
              unfollow={this.props.unfollow}
              setCurrentPage={this.props.setCurrentPage}
              isFetching={this.props.isFetching}
              tofleIsFeathing={this.props.tofleIsFeathing}
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
    isFetching:state.userPage.isFetching
  }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
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
}

export const UsersContainer = connect(mapStateToProps, {
  follow: FollowAC,
  unfollow: ufollowAC,
  setUser: setUsersAC,
  setCurrentPage: setCurrentAC,
  setTotalUserCount: setUsersTotalCountAC,
  tofleIsFeathing: ToggleFeathingAC,

    }

)(UsersAPIComponent)
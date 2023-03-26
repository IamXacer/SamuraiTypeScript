import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/img/photo.png";
import {SuperUserContainerType} from "./UsersContainer";
import {UsersType} from "../redux/users-reducer";
import axios from "axios";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

export type UserType ={
    users:UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
}
export const Users = (props:SuperUserContainerType) => {
  const  onPageChanged = (pageNumber:number)=>{
        props.setCurrentPage(pageNumber)
      props.tofleIsFeathing(true)
      usersAPI.getUsers(pageNumber,props.pageSize).then(data => {
            props.tofleIsFeathing(false)
            props.setUser(data.items)
            props.setTotalUserCount(data.totalCount)
        })
    }
    let pagesCount = Math.ceil(props.totalUserCount/props.pageSize)
    let pages=[];
    for (let i=1; i<=pagesCount; i++){
        pages.push(i);
    }
  return(
      <div > <div className={s.backgroundIMG}>
          <div className={s.message} >
              {pages.map(p=>{
                  return <span
                      onClick={(e)=>{onPageChanged(p)}}
                      className={props.currenPage ===p ? s.selectedPage:''}>
<button>{p}</button>
                    </span>
              })}
          </div>
          <div className={s.container}>

              {props.users.map(u=><div key={u.id}>

        <span>
          <div><NavLink to={'/profile/' + u.id} >
              <img className={s.img}src={u.photos.small ?u.photos.small :userPhoto }/>
          </NavLink></div>
        </span>
                      <div>
                          {u.followed ? <button className={s.button}
                                                disabled={props.followingInProgress.some(id=>id === u.id)} onClick={() => {
                                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                      {withCredentials: true,headers:{'API-KEY':'c693924f-e362-47b2-914d-76ccc23dd303'}},
                                  ).then(res=>{
                                      if (res.data.resultCode === 0){
                                          props.unfollow(u.id)
                                      }
                                  })
                          }}>Unfollow</button>

                              :<button  className={s.button}
                                        disabled={props.followingInProgress.some(id=>id === u.id)}
                                        onClick={()=> {
                                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                      {},{withCredentials: true,headers:{'API-KEY':'c693924f-e362-47b2-914d-76ccc23dd303'}}).then(res => {
                                      if (res.data.resultCode === 0){
                                         props.follow(u.id)}})
                              }}>Follow</button>}
                      </div>
                      <div><span className={s.message}>
           <span>
           <div className={s.dialogItem}>
             {u.name}</div><div>{u.status}</div></span>
           <span>
             <div>{"u.location.country"}</div>
             <div>{"u.location.city"}</div>
           </span>
        </span>
                      </div>
                  </div>
              )}
          </div>
      </div>
      </div>
  )
}
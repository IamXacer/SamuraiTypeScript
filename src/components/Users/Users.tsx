import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/img/photo.png";
import {SuperUserContainerType} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {Paginator} from "../common/Paginator/Paginator";



export const Users = (props: SuperUserContainerType) => {

console.log({ users: props.users })
    return (
        <div>
            <div className={s.backgroundIMG}>
{/*<User users={props.users} key={users.id}

/>*/}
                    <Paginator currenPage={props.currenPage}
                               totalItemCount={props.totalItemCount}
                               pageSize={props.pageSize}
                               isFetching={props.isFetching} users={props.users}
                               followingInProgress={props.followingInProgress}
                               ToggleFeathingInProgress={props.ToggleFeathingInProgress}
                               follow={props.follow}
                               unfollow={props.unfollow}
                               getUsers={props.getUsers}
                               setUser={props.setUser} setCurrentPage={props.setCurrentPage}
                               onPageChengeTC={props.onPageChengeTC}
                               setTotalUserCount={props.setTotalUserCount}
                               tofleIsFeathing={props.tofleIsFeathing}
                               portionSize={props.portionSize}

                    />

                <div className={s.container}>

                    {props.users.map(u => <div key={u.id}>

        <span>
          <div><NavLink to={'/profile/' + u.id}>
              <img className={s.img} src={u.photos.small ? u.photos.small : userPhoto}/>
          </NavLink></div>
        </span>
                            <div className={s.buttonContainer}>
                                {u.followed ? <button className={s.button}
                                                      disabled={props.followingInProgress.some
                                                      (id => id === u.id)}
                                                      onClick={() => {
                                                          props.unfollow(u.id)
                                                          //dispatch(unfollowTC(u.id))
                                                      }}>Unfollow</button>
                                    : <button className={s.button}
                                              disabled={props.followingInProgress.some(id => id === u.id)}
                                              onClick={() => {
                                                  props.follow(u.id)
                                                  //  dispatch(followTC(u.id))
                                              }}>Follow</button>}
                            </div>
                            <div>
                                <span className={s.message}>
           <span>
           <div className={s.dialogItem}>
             {u.name}</div><div>{u.status}</div>
           </span>

        </span>
                                <ul className={s.location}>
                                    <div>{"u.location.country"}</div>
                                    <div>{"u.location.city"}</div>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
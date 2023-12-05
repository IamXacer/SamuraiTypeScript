import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/img/photo.png";
import {SuperUserContainerType} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {Paginator} from "../common/Paginator/Paginator";


/*
export const User = (props: SuperUserContainerType) => {

console.log({ users: props.users })
    let users = props.users
    return (
        <div>
            <div className={s.backgroundIMG}>



                <div className={s.container}>



        <span>
          <div><NavLink to={'/profile/' + users.id}>
              <img className={s.img} src={users.photos.small ? users.photos.small : userPhoto}/>
          </NavLink></div>
        </span>
                            <div className={s.buttonContainer}>
                                {users.followed ? <button className={s.button}
                                                      disabled={props.followingInProgress.some(id => id === users.id)}
                                                      onClick={() => {
                                                          props.unfollow(users.id)
                                                          //dispatch(unfollowTC(u.id))
                                                      }}>Unfollow</button>
                                    : <button className={s.button}
                                              disabled={props.followingInProgress.some(id => id === users.id)}
                                              onClick={() => {
                                                  props.follow(users.id)
                                                  //  dispatch(followTC(u.id))
                                              }}>Follow</button>}
                            </div>
                            <div>
                                <span className={s.message}>
           <span>
           <div className={s.dialogItem}>
             {users.name}</div><div>{users.status}</div>
           </span>

        </span>
                                <ul className={s.location}>
                                    <div>{"u.location.country"}</div>
                                    <div>{"u.location.city"}</div>
                                </ul>
                            </div>

                </div>
            </div>
        </div>
    )
}*/

import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/img/photo.png";
import {SuperUserContainerType} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {Paginator} from "./Paginator";



export const Users = (props: SuperUserContainerType) => {
/*    const onPageChanged = (pageNumber: number) => {
        props.setCurrentPage(pageNumber)
        props.tofleIsFeathing(true)
        usersAPI.getUsers(pageNumber, props.pageSize).then(data => {
            props.tofleIsFeathing(false)
            props.setUser(data.items)
            props.setTotalUserCount(data.totalCount)
        })
        /!*props.setCurrentPage(pageNumber)
        props.tofleIsFeathing(true)
        props.onPageChengeTC(pageNumber, props.pageSize);*!/
    }*/
/*
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }*/
    return (
        <div>
            <div className={s.backgroundIMG}>
                <div className={s.message}>
          {/*          {pages.map(p => {
                        return <span
                            onClick={(e) => {
                                onPageChanged(p)
                            }}
                            className={props.currenPage === p ? s.selectedPage : ''}>
<li>{p}</li>
                    </span>
                    })}*/}
                    <Paginator currenPage={props.currenPage}
                    totalUserCount={props.totalUserCount}pageSize={props.pageSize}

                               isFetching={props.isFetching} users={props.users}
                               followingInProgress={props.followingInProgress}
                    />
                </div>
                <div className={s.container}>

                    {props.users.map(u => <div key={u.id}>

        <span>
          <div><NavLink to={'/profile/' + u.id}>
              <img className={s.img} src={u.photos.small ? u.photos.small : userPhoto}/>
          </NavLink></div>
        </span>
                            <div className={s.buttonContainer}>
                                {u.followed ? <button className={s.button}
                                                      disabled={props.followingInProgress.some(id => id === u.id)}
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

        </span> <ul className={s.location}>
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
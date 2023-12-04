import React from "react";
import s from "./Users.module.css";
import { SuperUserContainerType } from "./UsersContainer";
import {usersAPI} from "../../api/api";
import {UsersType} from "../redux/users-reducer";

export const Paginator = (props: SuperUserContainerType) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages:any[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const onPageChanged = (pageNumber: number) => {
        props.setCurrentPage(pageNumber)
        props.tofleIsFeathing(true)
        usersAPI.getUsers(pageNumber, props.pageSize).then(data => {
            props.tofleIsFeathing(false)
            props.setUser(data.items)
            props.setTotalUserCount(data.totalCount)
        })}
    return (
        <div>
            {pages.map(p => (
                <span
                    key={p}
                    onClick={() => {
                        onPageChanged(p);
                    }}
                    className={props.currenPage === p ? s.selectedPage : ''}
                >
          <li>{p}</li>
        </span>
            ))}
        </div>
    );
};

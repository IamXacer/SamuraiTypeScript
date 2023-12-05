import React from "react";
import {InitialStateUserType, UsersType} from "../components/redux/users-reducer";
import {ActionTypes} from "../components/redux/state";

export const inirialState: InitialStateUserType = {
    users: [],
    pageSize: 10,
    totalUserCount: 5,
    currenPage: 10,
    isFetching: true,
    // followingInProgress:true
    followingInProgress: []
}
export const updateObjectArray = (items: UsersType[], itemId: string,newOblProps :{followed:boolean}): UsersType[] => {
    return items.map(u => {
        if (u.id === itemId) {
            return { ...u, followed: newOblProps.followed  };
        }
        return u;
    });
};


import React from "react";
import {AppStateType} from "./redux-store";
export const getUsers = (state:AppStateType) => {
  return state.userPage.users
}
export const getPageSize = (state:AppStateType) => {
    return state.userPage.pageSize
}
export const getTotalUserCount = (state:AppStateType) => {
    return state.userPage.pageSize
}
export const getIsFetching = (state:AppStateType) => {
    return state.userPage.isFetching
}
export const getCurrenPage = (state:AppStateType) => {
    return state.userPage.currenPage
}
export const getFollowingInProgress = (state:AppStateType) => {
    return state.userPage.followingInProgress
}
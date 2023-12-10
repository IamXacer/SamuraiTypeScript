import React from "react";
import {ActionTypes} from "./state";
import {AnyAction, Dispatch} from "redux";
import {CommonResponse1, usersAPI} from "../../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import { AxiosResponse } from "axios";
import {updateObjectArray} from "../../utils/objects-helpers";

export type UsersType = {
    id: string,
    followed: boolean
    name: string
    status: string
    photoUrl: string
    location: UserLocation
    objPropName:string
    photos: {
        small: string,
        large: string
    },
}

type UserLocation = {
    city: string
    country: string
}
export type InitialStateUserType = {
    users: UsersType[]
    pageSize: number
    totalUserCount: number
    currenPage: number
    isFetching: boolean
    //  followingInProgress:boolean
    followingInProgress: string[],
    portionSize:number,
}
export const inirialState: InitialStateUserType = {
    users: [],
    pageSize: 10,
    totalUserCount: 5,
    currenPage: 10,
    isFetching: true,
    // followingInProgress:true
    followingInProgress: [],
    portionSize:10,
}
export const userReducer = (state = inirialState, action: ActionTypes): InitialStateUserType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users:updateObjectArray(state.users,action.userId,{followed:true} )
              /*  users: state.users.map(u => {

                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })*/
            }
        case'UNFOLLOW':
            return {
                ...state,
                users:updateObjectArray(state.users,action.userId,{followed:false} )
            /*    users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })*/
            }
        case "SET_USERS":
            return {...state, users: action.users}
        case "SET_CURRENT_PAGE":
            return {...state, currenPage: action.currenPage}
        case "SET_USER_TOTAL_COUNT":
            return {...state, totalUserCount: action.count}
        case "TOGGLE_IS_FEATHING":
            return {...state, isFetching: action.isFetching}
        case 'FOLOWING_PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        }
        default:
            return state

    }


}

export const followSuccess = (userId: string) => {
    return {type: 'FOLLOW', userId} as const
}
export const unfollowSuccess = (userId: string) => {
    return {type: 'UNFOLLOW', userId} as const

}
export const setUsersAC = (users: UsersType[]) => {
    return {type: 'SET_USERS', users} as const

}
export const setCurrentAC = (currenPage: number) => {
    return {type: 'SET_CURRENT_PAGE', currenPage} as const
}
export const setUsersTotalCountAC = (count: number) => {
    return {type: 'SET_USER_TOTAL_COUNT', count} as const
}
export const ToggleFeathingAC = (isFetching: boolean) => {
    return {type: 'TOGGLE_IS_FEATHING', isFetching} as const
}
export const ToglefollowingInProgress = (isFetching: boolean, userId: string) => {
    return {type: 'FOLOWING_PROGRESS', isFetching, userId} as const
}

export const getUsersTC = (page: number, pageSize: number) => {
    return async (dispatch: Dispatch<ActionTypes>) => {

        dispatch(setCurrentAC(page))
        dispatch(ToggleFeathingAC(true))
        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(ToggleFeathingAC(false))
        dispatch(setUsersAC(data.items))
        dispatch(setUsersTotalCountAC(data.totalCount))

    }
}
async  function followUnfollowFlow (dispatch:Dispatch<ActionTypes>,
                                  userId: string,
                                  apiMethod:(userId: string) => Promise<AxiosResponse<CommonResponse1<{}>, any>>,
                                  actionCreator: (userId: string) => ActionTypes)  {
    dispatch(ToglefollowingInProgress(true, userId))
    let res =await  apiMethod(userId)
    if (res.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(ToglefollowingInProgress(false, userId))
}

export const followTC = (userId: string) => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        let apiMethod = usersAPI.follow.bind(usersAPI)
        let actionCreator = followSuccess
        followUnfollowFlow(dispatch,userId,apiMethod,actionCreator)

  /*      dispatch(ToglefollowingInProgress(true, userId))
        let res = await apiMethod(userId)
        if (res.data.resultCode === 0) {
            dispatch(actionCreator(userId))
        }
        dispatch(ToglefollowingInProgress(false, userId))*/

    }
}
export const unfollowTC = (userId: string): ThunkAction<void, AppStateType, unknown, ActionTypes> => {
    return async (dispatch: Dispatch<ActionTypes>
    ) => {
        followUnfollowFlow(dispatch,userId,usersAPI.unfollow.bind(usersAPI),unfollowSuccess)

     /*   dispatch(ToglefollowingInProgress(true, userId))
        let res = await apiMethod(userId)
        if (res.data.resultCode === 0) {
            dispatch(actionCreator(userId))
        }
        dispatch(ToglefollowingInProgress(false, userId))*/

    }
}

export const onPageChengeTC = (pageNumber: number, pageSize: number) => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        dispatch(setCurrentAC(pageNumber))
        dispatch(ToggleFeathingAC(false))
        let data = await usersAPI.getUsers(pageNumber, pageSize)
       console.log({ pageNumber, pageSize })
        dispatch(ToggleFeathingAC(false));
        dispatch(setUsersAC(data.items));
        dispatch(setUsersTotalCountAC(data.totalCount));

    };
};
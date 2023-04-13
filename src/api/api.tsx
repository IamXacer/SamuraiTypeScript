import React from "react";
import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: ' https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'c693924f-e362-47b2-914d-76ccc23dd303'
    }
})

export const usersAPI = {
    getUsers: (currenPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currenPage}&count=${pageSize}`)
            .then(res => res.data)

    },

    unfollow: (userId: string) => {
        return instance.delete(`follow/${userId}`)
    },

    follow: (userId: string) => {
        return instance.post(`follow/${userId}`)
    },
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    }
}
export const LoginAPI = {
    me () {
        return instance.get(`/auth/me`,)/*.then(response => response.data)*/
    }
}




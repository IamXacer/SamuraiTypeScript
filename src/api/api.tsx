import React from "react";
import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: ' https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'a6e29801-4b3b-42a5-8f19-8130e7a91de7'
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
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
  getProfile(userId:string){
      return instance.get('profile/'+userId)
    },
    getStatus(userId:string){
return  instance.get('/profile/status/'+userId)
    },
    updateStatus(status:string){
        return instance.put('/profile/status',{status:status})
    }

}
export const LoginAPI = {
    me () {
        return instance.get(`/auth/me`,)/*.then(response => response.data)*/
    },
    login(email:null,password:null,rememberMe=false){
        return instance.post( `/auth/login`,{email,password,rememberMe})
    /*login(email:null,password:null,rememberMe=false) {
        return instance.post(`/auth/login`,{email,password,rememberMe})*/
    },
    logout() {
        return instance.delete(`/auth/login`)
    }
}




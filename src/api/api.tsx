import axios, {AxiosResponse} from "axios";
import {ProfileType, saveProfile} from "../components/redux/profile-reducer";
import {ProfileDataFormType} from "../components/Profile/ProfileInfo/ProfileDataMyForm";


const instance = axios.create({
    withCredentials: true,
    baseURL: ' https://social-network.samuraijs.com/api/1.0',
    headers: {
        'API-KEY': 'a6e29801-4b3b-42a5-8f19-8130e7a91de7'
    }
})

type CommonResponse<T = []> = {
    error: string | null
    items: T
    totalCount: number
}

export type CommonResponse1<T = {}> = {
    data: T
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}

export const usersAPI = {
    getUsers: (currenPage = 1, pageSize = 10) => {
       // return instance.get<CommonResponse<any>>(`users?page=${currenPage}&count=${pageSize}`)
        return instance.get<CommonResponse, AxiosResponse<CommonResponse>>(`users?page=${currenPage}&count=${pageSize}`)
            .then(res => res.data)
    },

    unfollow: (userId: string) => {
        return instance.delete<CommonResponse1 , AxiosResponse<CommonResponse1>>(`follow/${userId}`)
    },

    follow: (userId: string) => {
        return instance.post<CommonResponse1 , AxiosResponse<CommonResponse1>>(`follow/${userId}`)
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
    },
    savePhoto (photoFile:string){
      let formData = new FormData()
        formData.append('image', photoFile)
        return instance.put("/profile/photo",formData, {
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
    },
    saveProfile (profile:ProfileDataFormType){
       return instance.put('profile',profile)
    }

}
export const LoginAPI = {
    me () {
        return instance.get(`/auth/me`,)/*.then(response => response.data)*/
    },
    login(email:null, password:null, rememberMe= false,captcha:string | null){
        return instance.post( `/auth/login`,{email,password,rememberMe,captcha})
    /*login(email:null,password:null,rememberMe=false) {
        return instance.post(`/auth/login`,{email,password,rememberMe})*/
    },
    logout() {
        return instance.delete(`/auth/login`)
    }
}


export const securityAPI = {
    getCaptchaUrl () {
        return instance.get('/security/get-captcha-url')
    }
}

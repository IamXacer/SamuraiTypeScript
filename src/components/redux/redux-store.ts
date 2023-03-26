import {combineReducers, createStore, legacy_createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {userReducer} from "./users-reducer";
import { authReducer } from "./auth-reducer";

export const rootReducer = combineReducers({
    profileReducer:profileReducer,
    dialogsReducer:dialogsReducer,
    userPage:userReducer,
    auth:authReducer,
   // sidebarReducer:sidebarReducer,
    })

export type AppStateType = ReturnType<typeof rootReducer>
export let store = legacy_createStore(rootReducer)





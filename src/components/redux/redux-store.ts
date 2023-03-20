import {combineReducers, createStore, legacy_createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {userReducer} from "./users-reducer";

export const rootReducer = combineReducers({
    profileReducer:profileReducer,
    dialogsReducer:dialogsReducer,
    userPage:userReducer,
   // sidebarReducer:sidebarReducer,
    })

export type AppStateType = ReturnType<typeof rootReducer>
export let store = legacy_createStore(rootReducer)
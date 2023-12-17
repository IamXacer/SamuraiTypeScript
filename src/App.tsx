import React, {Suspense } from 'react';
import './App.css';
import {Nav} from "./components/Navbar/Nav";
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
//import {SuperDialogContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {connect} from "react-redux";
import {getMeTC} from "./components/redux/auth-reducer";
import {compose} from "redux";
import {initializeApp} from "./components/redux/app-reducer";
import {AppStateType} from "./components/redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
//import ProfileContainer from "./components/Profile/ProfileContainer";


const SuperDialogContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


export type AppType ={

}
class  App extends React.Component<any, any>  {
   // const state = props.store.getState()
    componentDidMount() {
        console.log(this.props, "PROPS")
        this.props.initializeApp();
    }

    render (){

            if(!this.props.initialized){
          return      <Preloader/>
            }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div>
                    <Suspense fallback={<div><Preloader /></div>}>
                    <Routes >
                        <Route path={'/profile/:userId?'}>
                           <Route index element={<ProfileContainer /*store={props.store} *//>}/>
                            <Route path=':userId'
                                   index
                                   element={
                                <ProfileContainer /*store={props.store} *//>
                            }
                            />
                        </Route>
                        <Route path="/dialogs/*"
                               element={
                            <SuperDialogContainer/>
                        }/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>

                    </Routes>
                        {/*</BrowserRouter>*/}
                    </Suspense>
                </div>
            </div>
        );}
}
 type mapStateToPropsType = {
    initialized:boolean
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        initialized:state.app.initialized
    }
}

export default compose(connect(mapStateToProps,
    {initializeApp})(App))



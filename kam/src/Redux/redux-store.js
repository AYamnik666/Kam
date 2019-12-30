import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReduscer from './profile-reducer';
import dialogsReduscer from './dialogs-reducer';
import sidebarReduscer from './sidebar-reducer';
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReduscer,
    dialogsPage: dialogsReduscer,
    sidebar: sidebarReduscer,
    usersPage: usersReducer,
    auth: authReducer

});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store=store;

export default store;
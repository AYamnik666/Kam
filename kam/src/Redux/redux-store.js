import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReduscer from './profile-reducer';
import dialogsReduscer from './dialogs-reducer';
import sidebarReduscer from './sidebar-reducer';
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReduscer,
    dialogsPage: dialogsReduscer,
    sidebar: sidebarReduscer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer

});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store=store;

export default store;
import { createStore, combineReducers } from "redux";
import profileReduscer from './profile-reducer';
import dialogsReduscer from './dialogs-reducer';
import sidebarReduscer from './sidebar-reducer';
import usersReducer from "./users-reducer";


let reducers = combineReducers({
    profilePage: profileReduscer,
    dialogsPage: dialogsReduscer,
    sidebar: sidebarReduscer,
    usersPage: usersReducer
});


let store = createStore(reducers);

window.store=store;

export default store;
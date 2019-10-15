import { createStore, combineReducers } from "redux";
import profileReduscer from './profile-reducer';
import dialogsReduscer from './dialogs-reducer';
import sidebarReduscer from './sidebar-reducer';


let reducers = combineReducers({
    profilePage: profileReduscer,
    dialogsPage: dialogsReduscer,
    sidebar: sidebarReduscer
});


let store = createStore(reducers);


export default store;
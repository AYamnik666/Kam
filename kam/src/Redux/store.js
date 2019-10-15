
import DialogItem from '../components/Dialogs/DialogItem/DialogItem';
import profileReduscer from './profile-reducer';
import sidebarReduscer from './sidebar-reducer';
import dialogsReduscer from './dialogs-reducer';



let store = {

     _state: {
        profilePage:{
        posts: [ {id: 1, message:'He? how are you?', likesCount:13},
        {id: 2, message:'I\'s my first post', likesCount:11},
        {id: 1, message:'Blabla', likesCount:1},
        {id: 2, message:'Tralala', likesCount:11}],
        newPostText: 'zzzzzzzzzzzzzzzzzzzz'
    },
    _callSubscriber () {
        console.log('state has been chenged');
    },

        dialogsPage:{
            dialogs: [ {    id:1,    name: 'Dima' },
            {    id:2,    name: 'Bred' },
            {    id:3,    name: 'Lola' },
            {    id:4,    name: 'Mary' },
            {    id:5,    name: 'Meth' },
            {    id:6,    name: 'Liza' }],
        messages:[ {id:1, message:'wwww'},
        {id:2, message:'Hi'},
        {id:3, message:'How are you?'},
        {id:4, message:'Yo'}],

        newMessageBody: ""
    },
    sidebar:{}

    },

    getState () {

        return this._state;
    },
    subscribe  (observer) {
        this._callSubscriber = observer;
        },

    dispatch(action){

this._state.profilePage=profileReduscer(this._state.profilePage, action);
this._state.dialogsPage=dialogsReduscer(this._state.dialogsPage, action);
this._state.sidebar=sidebarReduscer(this._state.sidebar, action);

this._callSubscriber(this._state);
    }

}





export default store;


window.store=store;
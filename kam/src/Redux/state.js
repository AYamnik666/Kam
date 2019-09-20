let store = {

     _state: {
        profilePage:{
        posts: [ {id: 1, message:'He? how are you?', likesCount:13},
        {id: 2, message:'I\'s my first post', likesCount:11},
        {id: 1, message:'Blabla', likesCount:1},
        {id: 2, message:'Tralala', likesCount:11}],
        newPostText: 'zzzzzzzzzzzzzzzzzzzz'
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
        {id:4, message:'Yo'}]
    }
    
    },

    getState () {
        return this._state;
    },

    _callSubscriber () {
        console.log('state has been chenged');
    },

    addPost  (postMessage) {
    
        let newPost ={
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
    
        this._state.profilePage.posts.push(newPost);
        
        this._state.state.profilePage.newPostText='';
        this._callSubscriber(this._state);
    },

    updateNewPostText  (newText) {
    
 
        this._state.profilePage.newPostText= newText;
        this._callSubscriber(this._state);
    },

    subscribe  (observer) {
        this._callSubscriber = observer;
        }
    

};











export default store;


window.store=store;
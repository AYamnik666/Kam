

let state ={
    profilePage:{
    posts: [ {id: 1, message:'He? how are you?', likesCount:13},
    {id: 2, message:'I\'s my first post', likesCount:11},
    {id: 1, message:'Blabla', likesCount:1},
    {id: 2, message:'Tralala', likesCount:11}]
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

}

export let addPost = (postMessage) =>{
    debugger;
    let newPost ={
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
}

export default state;
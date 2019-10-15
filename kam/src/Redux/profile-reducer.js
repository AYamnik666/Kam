const ADD_POST ='ADD-POST';

const UPDATE_NEWPOST_TEXT ='UPDATE-NEWPOST-TEXT';


let initialState = {
    posts: [ {id: 1, message:'He? how are you?', likesCount:13},
    {id: 2, message:'I\'s my first post', likesCount:11},
    {id: 1, message:'Blabla', likesCount:1},
    {id: 2, message:'Tralala', likesCount:11}],
    newPostText: 'zzzzzzzzzzzzzzzzzzzz'
};

const profileReduscer = (state = initialState, action) =>{
switch(action.type){
    case ADD_POST:


        let newPost ={
            id: 5,
            message: state.newPostText,
            likesCount: 0
        };

      state.posts.push(newPost);

        state.newPostText='';
return state;

        case UPDATE_NEWPOST_TEXT:
                state.newPostText= action.newText;
                return state;
default:
    return state;
    }



    }



    export const addPostActionCreator =()=>({type: ADD_POST})



    export const updateNewPostTextActionCreator =(text)=>
    ({type: UPDATE_NEWPOST_TEXT, newText: text

    })




export default profileReduscer;
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
	{/*}
	let posts=[
		{id: 1, message:'He? how are you?', likesCount:13},
		{id: 2, message:'I\'s my first post', likesCount:11},
		{id: 1, message:'Blabla', likesCount:1},
		{id: 2, message:'Tralala', likesCount:11}
	]
*/}
	let postsElements= props.posts.map(p => <Post message={p.message} like={p.likesCount}  />)
 
let newPostElement = React.createRef();

let addPost =() =>{
	
	let text=newPostElement.current.value;
	alert(text);
}


        return (
     
		<div className={s.postsBlock}>
	<h3> My posts</h3>
		<div>
		<div>
			<textarea ref={newPostElement}> </textarea>
			</div>
			<div>
			<button onClick={ addPost}>Add post</button>
			</div>
			
		</div>
		<div className={s.posts}>

		{postsElements }
	
					</div>
					</div>
				
        )

        }
    


export default MyPosts;
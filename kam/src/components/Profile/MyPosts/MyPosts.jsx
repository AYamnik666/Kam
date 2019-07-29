import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
	
	let posts=[
		{id: 1, message:'He? how are you?', likesCount:13},
		{id: 2, message:'I\'s my first post', likesCount:11},
		{id: 1, message:'Blabla', likesCount:1},
		{id: 2, message:'Tralala', likesCount:11}
	]

	let postsElements= posts.map(p => <Post message={p.message} like={p.likesCount}  />)
 
        return (
     
		<div className={s.postsBlock}>
	<h3> My posts</h3>
		<div>
		<div>
			<textarea> </textarea>
			</div>
			<div>
			<button>Add post</button>
			</div>
			
		</div>
		<div className={s.posts}>

		{postsElements }
	
					</div>
					</div>
				
        )

        }
    


export default MyPosts;
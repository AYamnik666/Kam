import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
	
	let postsData=[
		{id: 1, message:'He? how are you?', likesCount:13},
		{id: 2, message:'I\'s my first post', likesCount:11}
	]
 
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

				<Post message={postsData[0].message} like={postsData[0].likesCount}  />
				<Post message={postsData[1].message} like={postsData[1].likesCount} />
	
					</div>
					</div>
				
        )

        }
    


export default MyPosts;
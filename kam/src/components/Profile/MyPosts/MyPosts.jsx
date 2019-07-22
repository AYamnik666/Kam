import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

class MyPosts extends React.Component{
    render(){
        return (
     <div>
		<div>
			My post
		</div>
		<div>
			<textarea> </textarea>
			<button>Add post</button>>
			<button>Remove</button>>
		</div>
		<div className={s.posts}>
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
					</div>
					</div>
        )

        }
    
}

export default MyPosts;
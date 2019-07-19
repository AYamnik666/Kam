import React from 'react';
import s from './Profile.module.css';

class Profile extends React.Component{
    render(){
        return (
            <div className={s.content}>
			<div>
			<img src='http://www.baltana.com/files/wallpapers-4/Rain-Background-Best-Wallpaper-14520.jpg'></img>
			</div>
			<div>
				<img id='ava' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Red_Square._Visual_Realism_of_a_Peasant_Woman_in_Two_Dimensions.jpg/350px-Red_Square._Visual_Realism_of_a_Peasant_Woman_in_Two_Dimensions.jpg'></img>
			</div>
		
			<div>
			ava + description
		</div>
		<div>
			My post
		</div>
		<div>
			New post
		</div>
		<div className={s.posts}>
				<div className={s.item}>
				post 1
			</div>
					<div className={s.item}>
					post 2
				</div>
						<div className={s.item}>
						post 3
					</div></div>
					</div>
        )

        }
    
}

export default Profile;
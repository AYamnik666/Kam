import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            	<img src='https://pixelbox.ru/wp-content/uploads/2018/02/tumblr_ofqybrbmf21rpwm80o1_250.jpg' />
        {props.message}
        <div>
<span> like </span>
            </div>
            </div>
    )
}

export default Post;
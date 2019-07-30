import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts=[
    {id: 1, message:'He? how are you?', likesCount:13},
    {id: 2, message:'I\'s my first post', likesCount:11},
    {id: 1, message:'Blabla', likesCount:1},
    {id: 2, message:'Tralala', likesCount:11}
]



let dialogs=[
    {    id:1,    name: 'Dima' }, 
    {    id:2,    name: 'Bred' },
    {    id:3,    name: 'Lola' },
    {    id:4,    name: 'Mary' },
    {    id:5,    name: 'Meth' },
    {    id:6,    name: 'Liza' }
]

let messages=[
    {id:1, message:'wwww'},
    {id:2, message:'Hi'},
    {id:3, message:'How are you?'},
    {id:4, message:'Yo'}
]


ReactDOM.render(<App posts={posts} dialogs={dialogs}  messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

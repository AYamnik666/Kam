import React from 'react';
import './App.css';

function App() {
  return (
	<div className='app-wrapper'>
		<header className='header'>
			<img src='https://www.designfreelogoonline.com/wp-content/uploads/2016/03/00106-3D-company-logo-design-free-logo-online-Template-03.png'></img>
		</header>
		<nav className='nav'>
			<div>
				<a>Profile</a>
			</div>
			<div>
				<a>Messages</a>
				</div>
			<div>
			<a>News</a>
				</div>
			<div>
			<a>Music</a>
				</div>
				<div>
			<a>Settinngs</a>
				</div>
		</nav>
		<div className='content'>
			<div>
			<img src='http://www.baltana.com/files/wallpapers-4/Rain-Background-Best-Wallpaper-14520.jpg'></img>
			</div>
			<div>
				<img id='ava' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQMwm-IRC1-94jdBN3ls8yGwfXXmtr4cLDVQVmO3exuTKSvp9sg'></img>
			</div>
		</div>
		<footer></footer>
	</div>
	);

}

export default App;

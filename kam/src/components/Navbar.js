import React from 'react';

class Navbar extends React.Component{
    render(){
        return (
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
        )

        }
    
}

export default Navbar;
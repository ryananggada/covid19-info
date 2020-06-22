import React from 'react';

function NavBar() {
    return (
        <nav className='navbar is-transparent'>
            <div className='navbar-brand'>
                <a className='navbar-item'>COVID-19</a>
            </div>

            <div className='navbar-menu'>
                <a className='navbar-item'>Home</a>
            </div>
        </nav>
    );
}

export default NavBar;
import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/components/NavBar.css';

const NavBar = () => {
    return (
        <header className="App-header">
            <div className="header">
                <h1>Socialize</h1>
                <button className='post-btn'>Post</button>
                <p><Link to="/login">Log in / </Link><Link to="/sign-up">Sign up</Link></p>
            </div>
        </header>
    )
}

export default NavBar;
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark mb-5">
            <Link to="/" className="mx-auto">
                <img src={Logo} alt="Logo" className="logo" />
                <span className="navbar-brand mb-0 h1">Lyrics Finder</span>
            </Link>
        </nav>
    )
}

export default Navbar;

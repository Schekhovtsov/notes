import React from 'react';
import {NavLink} from 'react-router-dom';

const NavbarContainer = () => {
    return (

        <div>
            <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="#">Notes</a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-item nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-item nav-link" to="/about">About</NavLink>
                            </li>
                        </ul>
                </div>
            </nav>
        </div>

    );
};

export default NavbarContainer;
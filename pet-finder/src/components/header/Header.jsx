
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="s">
                <h1>PetFinder</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/gallery">Galeria</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
    return (
        <section className="home-section container">
            <h2>Bem-vindo ao <span className="highlight">PetFinder</span></h2>
            <p>Conectamos você a pets incríveis que estão procurando um novo lar!</p>
            <div>
                <Link to="/gallery" className="button-primary">Explorar galeria</Link>
            </div>
        </section>
    );
};

export default Home;
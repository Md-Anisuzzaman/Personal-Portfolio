import React from 'react';

import './Header.css'
import logoImage from '../../images/logo.jpg';
// import myImage from '../../images/p-image.jpg';
import image1 from '../../images/blue-pic.png';
import Typical from 'react-typical'
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className='header-body'>

            <nav>
                <div className='logo'>
                    <img src={logoImage} alt="" />
                    <span>Portfolio</span>
                </div>
                <ul className='ul-responsive'>
                    <Link className='nav-link' to='/home'>Home</Link>
                    <Link className='nav-link' to='/skill'>Skill</Link>
                    <Link className='nav-link' to='/project'>project</Link>
                    <Link className='nav-link' to='/about'>About</Link>
                    <Link className='nav-link' to='/contact'>Contact</Link>
                </ul>
            </nav>

            <div className='header-div'>
                <div className='content'>
                    <h1>Hi!, I'm <br /> Anisuzzaman</h1>
                    <Typical
                        className="font"
                        steps={['Front End Developer', 'MERN Stack Developer', "React Developer", 1000]}
                        loop={Infinity}
                        wrapper="p"
                    />
                    <p>Agile, dynamic, determine and focused to explore and want to utilize my merit in web development industry.
                        can adapt onto any
                        technology rapidly making myself flexible upon
                        any tech stack.
                    </p>

                    <div className='links'>
                        <button className='btn-style'>Learn More</button>
                    </div>
                </div>


                <div className='image-div'>
                    <div>
                        <img src={image1} alt="" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Header;
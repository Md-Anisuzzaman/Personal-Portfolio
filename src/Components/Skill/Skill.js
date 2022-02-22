import React, { useEffect, useRef} from 'react';
import './Skill.css'
import skillImage from '../../images/skill-image.jpg';

const Skill = () => {
    const skillRef = useRef(null);

    useEffect(() => {
        executeScroll();
    }, [])
    const executeScroll = () => skillRef.current.scrollIntoView();

    return (
        <div  ref={skillRef} className="skill-container">

            <div className="skil-content">
                <ul>
                    <span className='skill-title'>Skill</span>
                    <li><span>Programming Language:</span> JavaScript</li>
                    <li><span>Front End:</span> React JS</li>
                    <li><span>Backend:</span> Node JS, Express JS</li>
                    <li><span>CSS Framework:</span> Bootstrap, Tailwind</li>
                    <li> Firebase Authentication</li>
                    <li> GitHub, Netlify, Heroku</li>
                    <li> Email JS</li>
                </ul>
            </div>

            <div className='skill-image-body'>
                <img src={skillImage} alt=""/>
            </div>


        </div>
    );
};

export default Skill;
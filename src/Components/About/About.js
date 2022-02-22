import React, { useEffect, useRef } from 'react';
import './About.css'

const About = () => {

    const aboutRef = useRef(null)

    useEffect(() => {
        executeScroll();
    }, [])
    const executeScroll = () => aboutRef.current.scrollIntoView();
    return (
        <>
            <section ref={aboutRef} className='about'>
                <div className='main container'>
                    {/* <img src="https://onlineedubd.com/wp-content/uploads/2021/01/study-in-UK-without-IELTS.jpg" alt="" /> */}
                    <div className="row">
                        <div className='about-text'>
                            <h1>About Me</h1>
                            <p>
                                Agile, dynamic, determined, focused to explore,
                                and want to utilize my merit in the web development industry.
                                Can adapt to any technology rapidly making myself flexible upon any tech stack.
                                A passionate, diligent person who wants to learn continuously.
                                <br />
                                <br />
                                Currently, I am working on some exciting projects. Have already worked on 12+ projects which have taught me a lot about front-end development
                                and last two projects I worked with backend where there was Node JS, Express JS, and MongoDB also those projects received praises from some experts.
                                Have sound knowledge in React-JS, Node-JS, Express-JS, JavaScript, HTML5, CSS3, Firebase Authentication,
                                and some deployment tools GitHub, Heroku, Netlify, etc. In addition, completed a web development
                                course from Programming-Hero which give me more confidence to work with a company like yours.
                                However, I am well conversant and a good team player having state with the art of interpersonal skills.
                                I can make a comfortable relationship with any stranger.</p>



                            <button className="about-button">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default About;

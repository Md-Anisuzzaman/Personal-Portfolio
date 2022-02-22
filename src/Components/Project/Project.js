import React, { useEffect, useRef } from 'react';
import './Project.css'
import bikePic from '../../images/bike-pic-2.jpg';
import tourPic from '../../images/tour-pic_2.jpg';
import doctorPic from '../../images/doctor-pic-3.1.jpg';

const Project = () => {
    const projectRef = useRef(null);

    useEffect(() => {
        executeScroll();
    }, [])
    const executeScroll = () => projectRef.current.scrollIntoView();
    return (
        <div ref={projectRef}>
            <h1 className='project-title'>Projects</h1>
            <div className='project-body'>
                <div className='project-image-div1'>
                    <img src={bikePic} alt="" />
                    <button><a href="https://tender-lichterman-7fc81d.netlify.app/">Project View</a></button>
                </div>

                <div className='project-image-div1'>
                    <img src={tourPic} alt="" />
                    <button><a href="https://gracious-morse-d722f5.netlify.app/">Project View</a></button>
                </div>

                <div className='project-image-div1'>
                    <img src={doctorPic} alt="" />
                    <button><a href="https://gallant-ritchie-dfaa92.netlify.app/">Project View</a></button>
                </div>
            </div>

        </div>
    );
};

export default Project;
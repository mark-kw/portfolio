import React from 'react';
import './AboutMe.css'
import logo from '../images/coding.gif'

const AboutMe = () => {
    return (
        <section id="aboutMe">
            <div >
                <img className='gif' src={logo} alt="" />
            </div>
            <div className=''>
                <p>I'm Mark, a software developer based in France. I have a preference for back-end development, and I enjoy building robust web applications. My expertise lies in creating efficient and scalable solutions to meet diverse technical challenges.<strong>PHP</strong> and <strong>React</strong>.</p>
            </div>
        </section>
    );
}

export default AboutMe;

import React, { forwardRef } from 'react';
import './AboutMe.css'
import logo from '../images/coding.gif'


const AboutMe = forwardRef((props, ref) => {
    return (
        <section id="aboutMe" >
            <div ref={ref} className='mb-10'></div>
            <div className="text-center mt-20 mb-5">
                <h1 className="text-3xl font-bold">ABOUT ME</h1>
            </div>
            <div className='flex'>

                <div className='flex-1 flex items-center justify-around'>
                    <img className='gif' src={logo} alt="" />
                </div>
                <div className='flex-1 space-y-4 flex flex-col justify-around mr-6'>
                    <div><p>I'm Mark, a software developer with a primary focus on React and PHP technologies. My expertise lies in crafting dynamic and efficient web applications using the power of <strong>React</strong> on the front-end and the versatility of <strong>PHP</strong> on the back-end.</p></div>
                    <div ><p>I am also honing my skills in developing front-end applications with Angular and back-end with JAVA. This ongoing learning process adds a dynamic layer to my skill set, empowering me to tackle a diverse range of challenges in both back-end and front-end development. The pursuit of knowledge in Java and Angular is a key element of my continuous evolution in the ever-evolving landscape of web development.</p></div>
                    <div><p> My commitment to constant evolution fuels my pursuit of knowledge and proficiency in crafting innovative solutions.</p></div>

                </div>
            </div>
        </section>
    );
})

export default AboutMe;

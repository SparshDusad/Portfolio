<<<<<<< HEAD
    // About.js
    import React from 'react';
    import Skills from './Skills.js';
    import Tilt from 'react-parallax-tilt';
    import Lottie from "lottie-react";
    import Coder from '../LottieFiles/coder.json';

    const About = () => {
        return (
            <>
                <div className='AboutPage'>
                    <div className='AboutText'>
                        <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>
                        <p>
                            Hi, my name is <b>Sparsh Dusad</b> and I am from Jaipur, India.
                            I'm a <b>Software developer</b> and a pre-final year college student pursuing <b>BTech in ECE</b> from <b>NIT, Kurukshetra</b>. <br/><br/>
                            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
                            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
                        </p>
                    </div>

                    <div>
                        <Tilt>
                            <Lottie 
                                className="illustration" 
                                animationData={Coder} 
                                loop={true} 
                            />
                        </Tilt>
                    </div>
                </div>
                
                <h1 className='SkillsHeading'>Professional Skillset</h1>
                <div className='skills'>
                    <Skills skill='React' />
                    <Skills skill='Node' /> 
                    <Skills skill='Express' />
                    <Skills skill='MongoDb' /> 
                    <Skills skill='Git' />
                    <Skills skill='Github' />
                    <Skills skill='Javascript' />
                    <Skills skill='C++' />
                    <Skills skill='Python' />
                    <Skills skill='Figma' />
                    <Skills skill='Vercel' />
                    <Skills skill='Npm' />
                    <Skills skill='Bootstrap'/>
                    <Skills skill='Firebase' />    {/* Add Firebase skill */}
                    <Skills skill='OAuth' />      {/* Add OAuth skill */}
                    <Skills skill='Tailwind CSS' />  {/* Add Tailwind CSS skill */}
                
                </div>
            </>
        )
    }

    export default About;
=======
// About.js
import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react";
import Coder from '../LottieFiles/coder.json';

const About = () => {
    return (
        <>
            <div className='AboutPage'>
                <div className='AboutText'>
                    <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>
                    <p>
                        Hi, my name is <b>Sparsh Dusad</b> and I am from Jaipur, India.
                        I'm a <b>Software developer</b> and a pre-final year college student pursuing <b>BTech in ECE</b> from <b>NIT, Kurukshetra</b>. <br/><br/>
                        I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
                        I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
                    </p>
                </div>

                <div>
                    <Tilt>
                        <Lottie 
                            className="illustration" 
                            animationData={Coder} 
                            loop={true} 
                        />
                    </Tilt>
                </div>
            </div>
            
            <h1 className='SkillsHeading'>Professional Skillset</h1>
            <div className='skills'>
                <Skills skill='React' />
                <Skills skill='Node' /> 
                <Skills skill='Express' />
                <Skills skill='MongoDb' /> 
                <Skills skill='Git' />
                <Skills skill='Github' />
                <Skills skill='Javascript' />
                <Skills skill='C++' />
                <Skills skill='Python' />
                <Skills skill='Figma' />
                <Skills skill='Vercel' />
                <Skills skill='Npm' />
                <Skills skill='Bootstrap'/>
                <Skills skill='Firebase' />    {/* Add Firebase skill */}
                <Skills skill='OAuth' />      {/* Add OAuth skill */}
                <Skills skill='Tailwind CSS' />  {/* Add Tailwind CSS skill */}
               
            </div>
        </>
    )
}

export default About;
>>>>>>> a39f6d19bacd9e8af6ec4d53020089e193297da5

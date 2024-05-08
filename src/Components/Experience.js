// Experience.js

import React from 'react';

const Experience = () => {
    return (
        <div className='ExperiencePage'>
            <div className='experienceDetails'>
                <div className='experienceItem'>
                    <h2>Software Development Intern</h2>
                    <p>Tech Mahindra</p>
                    <p>April-24 - Present</p>
                    <ul>
                        <li>Worked as a Software development intern in Database Managment Of MTN services based in South Africa</li>
                        <li>The Database ETL works 24*7 and approximately we get a 0.1 Million data upstreams daily</li>
                        <li>Skills Used SQL , Linux , DBMS , Unix </li>
                    </ul>
                </div>
                <div className='experienceItem'>
                    <h2>Contributor</h2>
                    <p>GSSoC'24</p>
                    <p>May-24 - Present</p>
                    <ul>
                        <li>GirlScript Summer of Code (GSSoC) is a global initiative ,is a three-month-long open-source program that runs during the summer, where participants work on real-world projects, learn from mentors, and contribute to the open-source community.</li>
                    </ul>
                </div>
                <div className='experienceItem'>
                    <h2>Freelancing Full Stack Developer </h2>
                    <p>Self</p>
                
                    <ul>
                        <li>Optimized school website code for a 30% efficiency boost and accelerated site speed by 15%</li>
                        <li>Enhanced functionality, leading to a 20% increase in user engagement and ensuring 100% stakeholder satisfaction</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Experience;

import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { CgFileDocument } from 'react-icons/cg';

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    TodoDesc: 'A React To-do App',
    TodoGithub: 'https://github.com/SparshDusad/React-To-Do', // Updated GitHub URL

    NewsletterDesc: 'A Real-time Crypto Price Tracker',
    NewsletterGithub: 'https://github.com/SparshDusad/Cryptocurrency-Price-Tracker',
    
    RealEstateDesc: 'A Modern Real Estate Marketplace',
    RealEstateGithub: 'https://github.com/SparshDusad/Real-Estate',
    RealEstateWebsite: 'https://mern-estate-32g0.onrender.com/',
  };

  const githubLink = desc[projectName + 'Github'];
  const websiteLink = desc[projectName + 'Website'];
  const showGithubButton = githubLink !== '';
  const showWebsiteButton = websiteLink !== '';

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt='Project display' />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + 'Desc']}
        <br />

        {showGithubButton && (
          <a href={githubLink} target='_blank' rel='noopener noreferrer'>
            <button className='projectbtn'>
              <FaGithub /> Github
            </button>
          </a>
        )}

        {showWebsiteButton && (
          <a href={websiteLink} target='_blank' rel='noopener noreferrer'>
            <button className='projectbtn'>
              <CgFileDocument /> Demo
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;

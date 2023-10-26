import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import RogfreeImage from '../images/RogfreeImage.png';
import RealEstateImage from '../images/a.jpeg';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        {<ProjectBox projectPhoto={RealEstateImage} projectName="RealEstate" /> }
        <ProjectBox projectPhoto={RogfreeImage} projectName="CryptoCurrency" />
        <ProjectBox projectPhoto={NewsletterImage} projectName="Todo" />
      </div>
    </div>
  )
}

export default Projects;

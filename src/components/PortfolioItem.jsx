import React from 'react';
import '../styles.css/Portfolio.css'; //keep or delete?
import '../data/portfolio.js';

function PortfolioItem ({name, image, description, link, repository}) {
    return (
        <div>
            <img 
                src={image} 
                alt='project-img'
                className='portfolioImg'
            />
            <div className='portfolioLinks'>
                <h3 className='projectName'>{name}</h3>
                <p className='description'>{description}</p>
                <a target='_blank' rel='noreferrer noopener' className='link' href={link}><button className='button-link'>Link to Application</button></a>
                <a target='_blank' rel='noreferrer noopener' className='repository' href={repository}><button className='button-repository'>Github Repository</button></a>
            </div>
        </div>
    )
}

export default PortfolioItem;
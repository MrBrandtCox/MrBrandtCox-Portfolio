// imports
// import images here to projects
import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from '../components/PortfolioItem';
import '../styles.css/Portfolio.css';
import '../assets/editButton.png';


function Portfolio () {
    return (
        <div className='grid-parent'>
            <div className='grid'>
                {portfolio.map(project => (
                    <PortfolioItem 
                        image={project.image}
                        name={project.name}
                        description={project.description}
                        link={project.link}
                        repository={project.repository}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;
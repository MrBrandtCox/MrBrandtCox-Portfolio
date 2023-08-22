// import the pages here from path
import '../styles.css/Nav.css';
import React, { useState } from 'react';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';

function Nav() {
    const [content, setContent] = useState(About);
    // if statements for active content, add or change className ?

    // const renderPage = () => {
    //     // if statements
    // }

    return (
        <div className='Nav'>
            
            {/* Make these Links? */}
            <ul>
            <h1>Brandt Cox | Full-Stack Developer</h1>
                <li className = 'NavList' onClick={() => setContent(About)}>About</li>
                <li className = 'NavList' onClick={() => setContent(Portfolio)}>Portfolio</li>
                <li className = 'NavList' onClick={() => setContent(Resume)}>Resume</li>
                <li className = 'NavList' onClick={() => setContent(Contact)}>Contact</li>
            </ul>
            <main>{content}</main>
        </div>
    );
}

export default Nav;
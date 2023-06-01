// import the pages here from path
import React, { useState } from 'react';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';

function Nav() {
    const [content, setContent] = useState();
    // const renderPage = () => {
    //     // if statements
    // }

    return (
        <div className='Nav'>
            {/* Make these Links? */}
            <ul>
                <li onClick={() => setContent(About)}>About</li>
                <li onClick={() => setContent(Portfolio)}>Portfolio</li>
                <li onClick={() => setContent(Resume)}>Resume</li>
                <li onClick={() => setContent(Contact)}>Contact</li>
            </ul>
            <main>{content}</main>
        </div>
    );
}

export default Nav;
import React from 'react';
import '../styles.css/Footer.css';

function Footer() {

    return (
        <div className='Footer'>
            {/* <Link>to= '/' className='LinkedIn'</Link>
            <Link to= '/https://www.linkedin.com/in/brandt-cox-89bbbb254' className='LinkedIn'>LinkedIn</Link> */}

            {/* Create Links for the contacts, Email and Phone will be added to About page*/}
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer noopener' href = 'https://www.linkedin.com/in/brandt-cox-89bbbb254/'>LinkedIn</a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer noopener' href = 'https://github.com/MrBrandtCox'>Github</a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer noopener' href = 'https://twitter.com/MrBrandtCox'>Twitter</a>
                </li>
            </ul>
        </div>
    );
}

export default Footer;
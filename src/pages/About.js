//imports
import React from 'react';
import '../styles.css/About.css';
//import profile img here using path
import brandtCode from '../assets/brandtCode.jpg';

function About () {
    return (
        <div>
            <h2 className='about-title'>About Me</h2>
            <img src={brandtCode} className='profile-img' alt='Brandt Cox'/>
            <section className='about-container'>
                <p className='p-1'>I'm Brandt, I'm from Louisiana and currently reside in SLC, Utah. Within the past two years my interest with coding began with attending an online webinar with SheCodes which my wife didn't want to attend so she handed the baton to me; it was then I realized how fun this nerdy stuff really is. I then began teaching myself to code using Codecademy's platform which has been a great experience and which I still continue to use. I wanted to accelerate and expand my learning in the field of software development which led me to attend the University of Utah Full-Stack Web Development Bootcamp (long name right). During my 6 months in the bootcamp I got to meet really great friends and work with them in a fast paced curriculum along with great TAs to make my experience enjoyable. With them I learned to work in a team environment and to have effective communication skills so that we're all on track to meet our planned goal within projects and graduation itself. </p>
                <p className='p-2'>Aside from my interest in coding, I also enjoy my time outside with my wife when I'm able. I love to scuba dive and freedive/spearfish when the lake water is above 60 degrees. In the summer I enjoy backpacking through the Wasatch National Forest while in the winter I enjoy going to the many hot springs in Idaho and parts of Utah. </p>
            </section>
        </div>
    );
}



export default About;
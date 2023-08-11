// imports
import '../styles.css/Contact.css';

function Contact () {
    return (
        <div>
            <h2 className='contact-title'>Contact Me</h2>
            <section>
                <ul className='contact-container'>
                    <li className = 'email'><a target='_blank' rel='noreferrer noopener' href='https://mail.google.com/mail/u/0/#inbox?compose=new'>brandtleydev@gmail.com</a></li>
                    <li className = 'linkedin'><a target='_blank' rel='noreferrer noopener' href='https://www.linkedin.com/in/brandt-cox-89bbbb254/'>LinkedIn</a></li>
                    <li className = 'phone'><p>Cell: (801)949-6230</p></li>
                </ul>
            </section>
        </div>
    );
}



export default Contact;
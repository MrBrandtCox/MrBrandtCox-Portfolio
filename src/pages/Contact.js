// imports
import '../styles.css/Contact.css';

function Contact () {
    return (
        <div>
            <h2 className='contact-title'>Contact Me</h2>
            <section>
                <ul className='contact-container'>
                    <li className = 'email'>Email: <a href='https://mail.google.com/mail/u/0/#inbox?compose=new'>brandtleydavis@gmail.com</a></li>
                    <li className = 'phone'>Phone: (801)949-6230</li>
                    <li className = 'linkedin'><a href='https://www.linkedin.com/in/brandt-cox-89bbbb254/'>LinkedIn</a></li>
                </ul>
            </section>
        </div>
    );
}



export default Contact;
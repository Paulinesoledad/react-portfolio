import React from 'react';
import './contact.css';
import { MdOutlineEmail} from 'react-icons/md';
import { BsTwitter} from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
   e.preventDefault();

   emailjs.sendForm('service_nmqvedi', 'template_299y2vx', form.current, 'WYx-cUd1YUg7Pb8-8')

   e.target.reset()     
 };

  return (
     <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact</h2>

        <div className="container contact__container">
           <div className="contact__options">
               <article className="contact__option">
                  <MdOutlineEmail className='contact__option-icon'/>
                  <h4>Email</h4>
                  <h5>paulinesoledad1@gmail.com</h5>
                  <a href="mailto:paulinesoledad1@gmail.com" target='_blank'>Send a message</a>
               </article>

               <article className="contact__option">
                  <BsTwitter className='contact__option-icon'/>
                  <h4>Twitter</h4>
                  <h5>paulinesoledad</h5>
                  <a href="https://twitter.com/paulinesoledad" target='_blank'>Send a message</a>
               </article>

               <article className="contact__option">
                  <BsWhatsapp className='contact__option-icon'/>
                  <h4>Whatsapp</h4>
                  <h5>+2348135321576</h5>
                  <a href="https://api.whatsapp.com/send?phone=+2348135321576" target='_blank'>Send a message</a>
               </article>

           </div>
           {/* END OF CONTACT OPTIONS */}

           <form ref={form} onSubmit={sendEmail}>
              <input type="text" name='name' placeholder='Your Full Name' required />
              <input type="email" name='email' placeholder='Your Email' required />
              <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>
           </form>

        </div>
     </section>
  )
};

export default Contact;

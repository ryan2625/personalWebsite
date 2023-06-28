import "./contact.css"
import { ContactPic } from "./contactPic"
import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
export const Contacts = () =>{

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_0imj7ux', 'template_ztal4bg', form.current, '9maxplic_lZJYMXPZ')
        .then((result) => {
            console.log("Congrats this works");
        }, (error) => {
            console.log(error.text);
        });
    };

    return <div className="contactContainer">
                <div className="leftContact">
            <ContactPic>ASDasds</ContactPic>
        </div>

            <div className="rightContact">
                <div className="emailForm">
        <h1>Contact</h1>
        <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" id="submitContact"/>
    </form>
    </div>
        </div>
    </div>
}
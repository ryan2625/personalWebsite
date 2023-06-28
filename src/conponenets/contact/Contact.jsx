import "./contact.css"
import { ContactPic } from "./contactPic"
import React, {useRef} from 'react'
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useEffect } from "react";
export const Contacts = () =>{

    const[formInfo, setFormInfo] = useState({
        user_name: "",
        user_email: "",
        message: ""
    })

    const[sent, addCheck] = useState(
        useState(0)
    )

    const handleBoth = () => (
        addCheck(sent + 1),
        window.alert("Form submitted.")
    )

    useEffect(() => {
        setFormInfo({
          user_name: "",
          user_email: "",
          message: "",
        })
      }, [sent])


    const handleChange = (event) => {
        setFormInfo({...formInfo, [event.target.name]: event.target.value})
    }

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_0imj7ux', 'template_ztal4bg', form.current, '9maxplic_lZJYMXPZ')
        .then(() => {
            handleBoth()
        }, (error) => {
            console.log(error.text);
        });
    }

    return <div className="contactContainer">
                <div className="leftContact">
            <ContactPic>ASDasds</ContactPic>
        </div>

            <div className="rightContact">
                <div className="emailForm">
        <h1>Contact</h1>
        <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" value={formInfo.user_name} onChange={handleChange} />
      <label>Email</label>
      <input type="email" name="user_email" value={formInfo.user_email} onChange={handleChange} />
      <label>Message</label>
      <textarea name="message" value={formInfo.message} onChange={handleChange}/>
      <input type="submit" value="Send" id="submitContact"/>
    </form>
    </div>
        </div>
    </div>
}
import React, { useEffect, useRef } from 'react';
import './Contact.css';

const Contact = () => {

    const contactRef = useRef(null)

    useEffect(() => {
        executeScroll();
    }, [])
    const executeScroll = () => contactRef.current.scrollIntoView();
    return (
        <div ref={contactRef} className='contact-body'>
            <h1>Connect With Me</h1>
            <p>I would love to your respond to queries and help  <br/> you to succede of your project , feel free to get in touch with me.</p>
            <div className="contact-box">
                <div className="contact-left">
                    <h3>Sent your message</h3>
                    <form>
                        <div className="input-row">
                            <div className="input-group">
                                <label>Name</label>
                                <input type="text" name="" id="" placeholder=""/>
                            </div>
                            <div className="input-group">
                                <label>Phone</label>
                                <input type="text" name="" id="" placeholder=""/>
                            </div>
                        </div>
                        <div className="input-row">
                            <div className="input-group">
                                <label>Email</label>
                                <input type="Email" name="" id="" placeholder=""/>
                            </div>
                            <div className="input-group">
                                <label>Subject</label>
                                <input type="text" name="" id="" placeholder=""/>
                            </div>
                        </div>
                        <label>Message</label>
                        <textarea name="" id="" cols="30" rows="5"></textarea>
                        <button className="sub-button" type="submit">Send</button>
                    </form>
                </div>
                <div className="contact-right">
                    <h3> Reach Us</h3>
                    <table>
                        <tr>
                            <td>Email</td>
                            <td>contact@example.com</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>+88 012 578 2112</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>#213, Gazipur,Sanarpar <br/> 
                             Narayangang,Chasara,Dhaka<br/> 
                             </td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Contact;
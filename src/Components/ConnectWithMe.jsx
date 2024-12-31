import React from 'react'
import '../../public/CSS/ContactPage.css'
import contactImg from "../assets/img/contact.svg"
const ConnectWithMe = () => {
    return (
        <div className='container-fluid'>
            <div className="container pt-4">
                <div className="connect-with-me p-4">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-header">Connect wit me.</h1>
                        </div>
                        <div className="col-12">
                            <p className='text-content'> Whether you’re interested in collaborating on a project, discussing ideas, or simply connecting, I’d love to hear from you. Feel free to reach out through any of the methods below!
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-5">
                                <div className="contact-img">
                                    <img src={contactImg} alt="contact illustartion" className='w-100' />
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="contact-form">
                                    <input type="text" className='contact-input col-12' placeholder='Name' />
                                    <input type="text" className='contact-input col-12' placeholder='Email' />
                                    <input type="text" className='contact-input col-12' placeholder='Message:' />
                                    <button className='contact-btn contact-input col-12'>Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ConnectWithMe

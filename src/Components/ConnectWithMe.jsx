import React from 'react'
import Button from './Button'
import { ToastContainer, toast } from 'react-toastify';
import '../../public/CSS/ContactPage.css'
import contactImg from "../assets/img/contact.svg"
const ConnectWithMe = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "69b8f6a4-2025-4190-a971-4dd0dc288843");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            toast.success('Mail sent Successfully !', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        }
    };
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
                        <div className="row m-0 align-items-center">
                            <div className="col-10 offset-1 col-md-5 offset-md-0">
                                <div className="contact-img">
                                    <img src={contactImg} alt="contact illustartion" className='w-100' />
                                </div>
                            </div>
                            <div className="col-12 col-md-7">
                                <form className="contact-form" onSubmit={onSubmit}>
                                    <input type="text" name='Name' className='contact-input col-12' placeholder='Name' required />
                                    <input type="email" name='Email' className='contact-input col-12' placeholder='Email' required />
                                    <textarea type="text" name='Message' className='contact-input msg col-12' placeholder='Message:' required />
                                    <button type='submit' className='contact-btn contact-input col-12'>Send Message</button>
                                </form>
                            </div>
                        </div>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-2 mt-4">
                            <div className="col"><Button icon={"fa-brands fa-github"} text={"Github"} /></div>
                            <div className="col"><Button icon={"fa-brands fa-linkedin"} text={"LinkedIn"} /></div>
                            <div className="col"><Button icon={"fa-brands fa-reddit-alien"} text={"Reddit"} /></div>
                            <div className="col"><Button icon={"fa-brands fa-instagram"} text={"Instagram"} /></div>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer /> {/* Toast container */}

        </div>
    )
}

export default ConnectWithMe

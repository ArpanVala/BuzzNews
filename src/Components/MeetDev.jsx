import React from 'react'
import devImg from '../assets/img/dev-img.jpg';
import Button from './Button';

const MeetDev = () => {
    return (
        <div className='container-fluid'>
            <div className="container pt-4">
                <div className="meet-dev p-4">
                    <div className="row justify-content-between">
                        <div className="col-12  col-md-6">
                            <div className="col-12">
                                <h1 className="text-header">Meet the developer.</h1>
                            </div>
                            <div className="col-12">
                                <p className="text-content">I'm <strong>Arpan vala</strong>, a passionate <strong>web developer</strong> with a keen interest in creating impactful projects. I'm currently pursuing my <strong>Bachelor of Engineering</strong> degree in Computer Science at L.D. College of Engineering.
                                </p>
                            </div>
                        </div>
                        <div className="col-8 offset-2 offset-md-0 col-md-6 text-end">
                            <div className="dev-img">
                                <img src={devImg} alt="developer image" className='w-100' />
                            </div>
                        </div>
                        <div className="row row-cols-1 row-cols-sm-2  g-2 mt-4">
                            <div className="col"><Button icon={"fa-brands fa-github"} text={"Github"} /></div>
                            <div className="col"><Button icon={"fa-brands fa-linkedin"} text={"LinkedIn"} /></div>
                            <div className="col"><Button icon={"fa-brands fa-reddit-alien"} text={"Reddit"} /></div>
                            <div className="col"><Button icon={"fa-brands fa-instagram"} text={"Instagram"} /></div>
                        </div>
                    </div>
                    {/* <div className="row align-items-center">
                        <div className="col-7 text-justify">
                            <p className="text-content">I'm <strong>Arpan vala</strong>, a passionate <strong>web developer</strong> with a keen interest in creating impactful projects. I'm currently pursuing my <strong>Bachelor of Engineering</strong> degree in Computer Science at L.D. College of Engineering.
                            </p>
                        </div>
                        <div className="col-5 text-end pe-4">
                            <div className="dev-img">
                                <img src={devImg} alt="developer image" />
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="row row-cols-4 mt-4">
                        <div className="col"><Button icon={"fa-brands fa-github"} text={"Github"} /></div>
                        <div className="col"><Button icon={"fa-brands fa-linkedin"} text={"LinkedIn"} /></div>
                        <div className="col"><Button icon={"fa-brands fa-reddit-alien"} text={"Reddit"} /></div>
                        <div className="col"><Button icon={"fa-brands fa-instagram"} text={"Instagram"} /></div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default MeetDev

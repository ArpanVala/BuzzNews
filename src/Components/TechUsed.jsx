import React from 'react'

const TechUsed = () => {
    return (
        <div className='container-fluid'>
            <div className="container pt-4">
                <div className="tech-used p-4">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-header">Technologies Used.</h1>
                        </div>
                        <div className="col-12">
                            <p className="text-content">
                                <b>combination of frontend technologies and development tools used to create buzznews.</b>
                            </p>
                        </div>
                        <div className="row row-cols-3 text-center justify-content-around">
                            <div className="col-auto">
                                <div className="tech-box ">
                                    <i className="fa-brands fa-react fa-spin"></i>
                                </div>
                                <p className='text-content text-center'>React.js</p>
                            </div>
                            <div className="col-auto">
                                <div className="tech-box">
                                    <i className="fa-brands fa-bootstrap fa-fade"></i>
                                </div>
                                <p className='text-content text-center'>Bootstrap</p>
                            </div>
                            <div className="col-auto">
                                <div className="tech-box">
                                    <i className="fa-solid fa-server"></i>
                                </div>
                                <p className='text-content text-center'>NewsAPI API</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TechUsed

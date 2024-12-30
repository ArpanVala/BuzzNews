import React from 'react'
import '../../public/CSS/footer.css'
import '../../public/css/media.css'
const Footer = () => {
    return (
        <footer className='container-fluid'>
            <div className="container footer py-4">
                <div className="row align-items-center">
                    <div className="col-8 col-md-6 ">
                        <div className="footer-links d-flex">
                            <div className="col-4">
                                <p className='text-content '>News</p>
                            </div>
                            <div className="col-4">
                                <p className='text-content '>About</p>
                            </div>
                            <div className="col-4">
                                <p className='text-content '>Contact</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-md-6 my-0 px-0 text-end ">
                        <div className="footer-logo">
                            <h1>BuzzNews</h1>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer

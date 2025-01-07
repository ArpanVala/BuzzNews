import React from 'react'
import '../../public/CSS/footer.css'
import '../../public/css/media.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className='container-fluid'>
            <div className="container footer py-4">
                <div className="row align-items-center">
                    <div className="col-8 col-md-6 ">
                        <div className="footer-links d-flex">
                            <div className="col-4">
                                <Link to='/'><p className='text-content '>News</p></Link>
                            </div>
                            <div className="col-4">
                                <Link to='/About'><p className='text-content '>About</p></Link>
                            </div>
                            <div className="col-4">
                                <Link to='/Contact'><p className='text-content '>Contact</p></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-md-6 my-0 px-0 text-end ">
                        <div className="footer-logo">
                            <Link to='/'><h1>BuzzNews</h1></Link>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer

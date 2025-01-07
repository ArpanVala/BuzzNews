import './../../public/CSS/mainnavbar.css';
import { Link } from 'react-router-dom';
const MainNavBar = () => {
    return (
        <header className='container-fluid shadow py-2'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg p-0">
                            <Link to='/'><a className="navbar-brand" href="">
                                <h4 className='d-inline-block ms-2'>BuzzNews</h4>
                            </a>
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                <ul className="navbar-nav">
                                    <Link to='/'><li className="nav-item">News</li></Link>
                                    <Link to='/About'><li className="nav-item">About</li></Link>
                                    <Link to='/Contact'><li className="nav-item">Contact</li></Link>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div >
        </header >
    )
}

export default MainNavBar

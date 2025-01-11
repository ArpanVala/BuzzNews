import logo from '../assets/img/logo.png'
import { NavLink, useNavigate } from 'react-router-dom';
const NavBar = ({ setCategory, setCountry }) => {
    const navigate = useNavigate();
    return (
        <header className='container-fluid shadow'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg p-0 ">
                            <a className="navbar-brand" onClick={() => navigate('/')}>
                                <img src={logo} alt="BuzzNews Logo" />
                                <h4 className='d-inline-block ms-2'>BuzzNews</h4>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                <ul className="navbar-nav">
                                    <NavLink to='/'><li className="nav-item">Home</li></NavLink>
                                    <li className="nav-item dropdown">
                                        <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Category
                                        </a>
                                        <ul className="dropdown-menu shadow-lg border-5">
                                            <li><a className="dropdown-item" onClick={() => setCategory('technology')}>Technology</a></li>
                                            <li><a className="dropdown-item" onClick={() => setCategory('science')}>Science</a></li>
                                            <li><a className="dropdown-item" onClick={() => setCategory('health')}>Health</a></li>
                                            <li><a className="dropdown-item" onClick={() => setCategory('sports')}>Sports</a></li>
                                            <li><a className="dropdown-item" onClick={() => setCategory('business')}>Business</a></li>
                                            <li><a className="dropdown-item" onClick={() => setCategory('general')}>General</a></li>
                                            <li><a className="dropdown-item" onClick={() => setCategory('entertainment')}>Entertainment</a></li>

                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div >
        </header >
    )
}

export default NavBar

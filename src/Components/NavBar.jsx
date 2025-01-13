import logo from '../assets/img/logo.png'
import { NavLink, useNavigate } from 'react-router-dom';
const NavBar = ({ setCategory, setCountry, setLanguage }) => {
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
                                            <li><a className="dropdown-item" onClick={() => setCategory('business')}>Business</a></li>
                                            <li><a className="dropdown-item" onClick={() => setCategory('entertainment')}>Entertainment</a></li>
                                            <li><a className="dropdown-item" onClick={() => setCategory('education')}>Education</a></li>
                                            <li><a className="dropdown-item" onClick={() => setCategory('lifestyle')}>Lifestyle</a></li>
                                            <li><a className="dropdown-item" onClick={() => setCategory('politics')}>Politics</a></li>
                                            <li><a className="dropdown-item" onClick={() => setCategory('top')}>Top</a></li>
                                            <li><a className="dropdown-item" onClick={() => setCategory('crime')}>Crime</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Country
                                        </a>
                                        <ul className="dropdown-menu shadow-lg border-5">
                                            <li><a className="dropdown-item" onClick={() => setCountry('in')}>India</a></li>
                                            <li><a className="dropdown-item" onClick={() => setCountry('cn')}>China</a></li>
                                            <li><a className="dropdown-item" onClick={() => setCountry('jp')}>Japan</a></li>
                                            <li><a className="dropdown-item" onClick={() => setCountry('np')}>Nepal</a></li>
                                            <li><a className="dropdown-item" onClick={() => setCountry('pk')}>Pakistan</a></li>
                                            <li><a className="dropdown-item" onClick={() => setCountry('ru')}>Russia</a></li>
                                            <li><a className="dropdown-item" onClick={() => setCountry('us')}>USA</a></li>
                                            <li><a className="dropdown-item" onClick={() => setCountry('wo')}>World</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Language
                                        </a>
                                        <ul className="dropdown-menu shadow-lg border-5">
                                            <li><a className="dropdown-item" onClick={() => setLanguage('en')}>English</a></li>
                                            <li><a className="dropdown-item" onClick={() => setLanguage('hi')}>Hindi</a></li>
                                            <li><a className="dropdown-item" onClick={() => setLanguage('gu')}>Gujarati</a></li>
                                            <li><a className="dropdown-item" onClick={() => setLanguage('mr')}>Marathi</a></li>
                                            <li><a className="dropdown-item" onClick={() => setLanguage('pa')}>Punjabi</a></li>
                                            <li><a className="dropdown-item" onClick={() => setLanguage('ur')}>Urdu</a></li>
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

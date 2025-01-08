import logo from '../assets/logo3.png'
const NavBar = ({ setCategory, setCountry }) => {
    return (
        <header className='container-fluid shadow'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg p-0">
                            <a className="navbar-brand" href="/">
                                <img src={logo} alt="BuzzNews Logo" /><h4 className='d-inline-block ms-2'>BuzzNews</h4>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><a href="index.html" className="nav-link active">Home</a></li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Country
                                        </a>
                                        <ul className="dropdown-menu shadow-lg">
                                            <li><a className="dropdown-item" onClick={() => setCountry('in')}>India</a></li>
                                            <li><a className="dropdown-item" onClick={() => setCountry('us')}>USA</a></li>
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

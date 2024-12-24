import './../../public/CSS/mainnavbar.css';
const MainNavBar = () => {
    return (
        <header className='container-fluid shadow py-1'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg p-0">
                            <a className="navbar-brand" href="#">
                                <h4 className='d-inline-block ms-2'>BuzzNews</h4>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><a href="index.html" className="nav-link">News</a></li>
                                    <li className="nav-item"><a href="index.html" className="nav-link">About</a></li>
                                    <li className="nav-item"><a href="index.html" className="nav-link">Contact</a></li>
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

import logo from '../assets/logo3.png'
const NavBar = () => {
    return (
        <header className='container-fluid shadow'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg p-0">
                            <a className="navbar-brand" href="#">
                                <img src={logo} alt="BuzzNews Logo" /><h4 className='d-inline-block ms-2'>BuzzNews</h4>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><a href="" className="nav-link active">Home</a></li>
                                    <li className="nav-item"><a href="" className="nav-link">Category</a></li>
                                    <li className="nav-item"><a href="" className="nav-link">Country</a></li>
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

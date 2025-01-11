import logo from '../assets/img/logo.png'
import { NavLink, useNavigate } from 'react-router-dom';
const MainNavBar = () => {
    const navigate = useNavigate();
    return (
        <header className='container-fluid shadow'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg p-0">
                            <a className="navbar-brand" onClick={() => navigate('/')}>
                                <img src={logo} alt="BuzzNews Logo" />
                                <h4 className='d-inline-block mt-1 ms-2' >BuzzNews</h4>
                            </a>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                <ul className="navbar-nav">
                                    <NavLink to='/'><li className="nav-item">Home</li></NavLink>
                                    <NavLink to='/News'><li className="nav-item">News</li></NavLink>
                                    <NavLink to='/About'><li className="nav-item">About</li></NavLink>
                                    <NavLink to='/Contact'><li className="nav-item mb-2 m-lg-0">Contact</li></NavLink>
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

import './../../public/CSS/mainnavbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
const MainNavBar = () => {
    const navigate = useNavigate();
    return (
        <header className='container-fluid shadow py-2'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg p-0">
                            <a className="navbar-brand" onClick={() => navigate('/')}>
                                <h4 className='d-inline-block ms-2' >BuzzNews</h4>
                            </a>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                <ul className="navbar-nav">
                                    <NavLink to='/'><li className="nav-item">Home</li></NavLink>
                                    <NavLink to='/News'><li className="nav-item">News</li></NavLink>
                                    <NavLink to='/About'><li className="nav-item">About</li></NavLink>
                                    <NavLink to='/Contact'><li className="nav-item">Contact</li></NavLink>
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

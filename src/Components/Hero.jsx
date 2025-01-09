import './../../public/CSS/mainnavbar.css';
import './../../public/CSS/media.css';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/img/hero-image.svg';

const Hero = () => {
    const navigate = useNavigate();
    return (
        <section className="container-fluid hero">
            <div className="container">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-6">
                        <div className="hero-content">
                            <h1>Stay Informed, Stay Ahead <br className='d-none d-md-visible' />with <span>BuzzNews</span></h1>
                            <h5>Get the latest headlines and insights all in one place.</h5>
                            <button className='btn-lg hero-btn' onClick={() => navigate('/News')}> Read News</button>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={heroImage} alt="News illustartion" className='w-100' />
                    </div>
                </div>
            </div>
        </section>
    )

}
export default Hero;
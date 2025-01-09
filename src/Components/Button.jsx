import React from 'react'
import '../../public/CSS/Button.css'

const Button = ({ icon, text, link }) => {
    const onButtonClick = () => {
        if (link) {
            window.open(link, '_blank');
        }
    }
    return (
        <div className="btn-primary d-flex gap-3 border shadow-lg align-items-center" onClick={onButtonClick}>
            <h2 className='btn-primary-icon m-0'><i className={icon} /></h2>
            <h5 className='btn-primary-text m-0'>{text}</h5>
        </div>

    )
}

export default Button

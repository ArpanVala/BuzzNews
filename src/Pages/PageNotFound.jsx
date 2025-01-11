import React from 'react'
import Img from '../assets/img/404.png'
const PageNotFound = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row h-100 ">
                    <div className=" col-10 offset-1 col-6 col-md-6 offset-md-3 align-items-center d-flex " style={{ height: '80vh' }}>
                        <img src={Img} alt="404 page not found" className='w-100' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound

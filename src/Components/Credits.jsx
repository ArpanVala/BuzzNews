import React from 'react'
import creditLogo from "../assets/img/Newsapi-logo.png"

const Credits = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="credits p-4 mt-5 block-x">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-header">Credits.</h1>
                        </div>
                        <div className="col-12">
                            <p className="text-content">
                                All news articles and content on this website are sourced from trusted providers through the <strong onClick={() => window.open('https://newsdata.io/')}>NEWSDATA.IO</strong>. We are grateful to <strong onClick={() => window.open('https://newsdata.io/')}>NEWSDATA.IO</strong> for enabling real-time access to global news, ensuring that our users stay informed with accurate and timely information.
                            </p>
                        </div>
                        <div className="col-12">
                            <div className="credits-banner text-center block" onClick={() => window.open('https://newsdata.io/')}>
                                <p className='text-content text-center m-1' >Powered by Newsdata.io</p>
                                <img src={creditLogo} alt="logo of NewsAPI" width={250} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Credits

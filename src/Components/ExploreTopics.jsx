import React from 'react'
import Button from './Button'

const ExploreTopics = () => {
    return (
        <div className="container-fluid">
            <section className="container">
                <div className="explore-topics p-4">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-header">Explore Topics.</h1>
                        </div>
                        <div className="col-12">
                            <p className="text-content">Stay up-to-date with news that matters to you. <strong>Explore a variety of categories to discover the latest stories in technology, sports, business, and more.</strong> Select a topic below to dive deeper and stay informed on the issues that impact your world.</p>
                        </div>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2 gy-4  g-sm-3 mt-0">
                            <div className="col block"><Button icon={"fa-solid fa-film"} text={"Entertainment"} /></div>
                            <div className="col block"><Button icon={"fa-solid fa-basketball"} text={"Sports"} /></div>
                            <div className="col block"><Button icon={"fa-solid fa-briefcase"} text={"Business"} /></div>
                            <div className="col block"><Button icon={"fa-solid fa-microchip"} text={"Technology"} /></div>
                            <div className="col block"><Button icon={"fa-solid fa-flask"} text={"Science"} /></div>
                            <div className="col block"><Button icon={"fa-solid fa-heart-pulse"} text={"Health"} /></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ExploreTopics

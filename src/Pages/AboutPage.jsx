import React from 'react'
import MeetDev from '../Components/MeetDev'
import "../../public/CSS/AboutPage.CSS"
import "../../public/CSS/media.css"
import TechUsed from '../Components/TechUsed'
import Thanks from "../Components/Thanks"

const AboutPage = () => {
    return (
        <div>
            <MeetDev />
            <TechUsed />
            <Thanks />
        </div>
    )
}

export default AboutPage

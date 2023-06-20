import React from 'react'
import "./styles/landingPage.css"
import leftVactor from "./images/left.jpg"
import rightVactor from "./images/right.jpg"
import footballPlayer from "./images/football_player.jpg"
import footerImg from "./images/footer.jpg"
import curvTriangle from "./images/Rectangle.png"

export default function landingPage() {
    return (
        <div className='main'>
            <div >
                <p className='landingText'>New Sport World <br /> In <span style={{ color: "#FF9F1C" }}>Vientiane</span></p>
                <button className='landingBtn'>BOOK NOW &raquo; </button>
                <img src={leftVactor} alt='' className='leftvactor' />
            </div>
            <div >
                <img src={rightVactor} alt='' className='rightvactor' />
                <img src={footballPlayer} alt='' className='footballPlayer' />
            </div>
            <div className=''>
                <img src={curvTriangle} alt='' className='landingCurv' />
                <p className='curvTxt'>WHO WE ARE</p>
            </div>
            <div className='footerImage'>
                <p className='footerTxt'>
                    New Arena was established in 2014 with only 2 artificial <br/> soccer field and a swimming pool to serve our customers,<br/> but now we would like to introduce ourself as a New Arena<br/> Sports and fitness center.
                    <br/>
                    <br/>
                    New Arena is not just a sports and fitness club, it's a<br/> perfect place to start your healthy life, get fit, and <br/>become stronger in a friendly and fun atmosphere. Our<br/> center is designed to meet all kinds of client needs.
                </p>
                <button className='footerBtn'>READ MORE</button>
            </div>
        </div>
    )
}

import React from "react";
import iPhone from "../assets/images/iphone-14.jpg"
import InHandIphone from "../assets/images/iphone-hand.png"

function Jumbotron() {
    const handleLearnMore = () =>{
        const el = document.querySelector(".sound-section");
        window.scrollTo({
            top:el?.getBoundingClientRect().top,
            left:0,
            behavior:"smooth"
        })
    }
    return ( 
        <div className="jumbotron-section wrapper">
            <h2 className="title">New</h2>
            <img className="logo" src={iPhone} alt="iPhone 13 pro max" />
            <p className="text">Big and bigger.</p>
            <span className="discription">
                From $41.62/mo. for 24 mo. or $999 before trade-in
            </span>
            <ul className="links">
                <li>
                    <button className="button">Buy</button>
                </li>
                <li>
                   <a  className="link" onClick={handleLearnMore}>Learn more</a>
                </li>
            </ul>
            <img src={InHandIphone} className="iphone-img" alt="iphone" />
        </div>
     );
}

export default Jumbotron;
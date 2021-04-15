import React from 'react';
//import icons
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'
import home2 from '../images/home2.png'


const ServicesSection = () => {
    return(
        <div className="services">
            <div className="description">
                <h2>High<span>quality</span>services</h2>
                <div className="cards">
                    <div className="card">
                    <div className="icon">
                        <img src={icon1} alt ="#" />
                        <h3>efficient</h3>
                    </div>
                    <p>Aute exercitation voluptate proident veniam minim sint eu dolore velit nisi.</p>
                    </div>
                    <div className="card">
                    <div className="icon">
                        <img src={icon2} alt ="#" />
                        <h3>more</h3>
                    </div>
                    <p>Aute exercitation voluptate proident veniam minim sint eu dolore velit nisi.</p>
                    </div>
                    <div className="card">
                    <div className="icon">
                        <img src={icon3} alt ="#" />
                        <h3>ss</h3>
                    </div>
                    <p>Aute exercitation voluptate proident veniam minim sint eu dolore velit nisi.</p>
                    </div>
                    <div className="card">
                    <div className="icon">
                        <img src={icon4} alt ="#" />
                        <h3>final</h3>
                    </div>
                    <p>Aute exercitation voluptate proident veniam minim sint eu dolore velit nisi.</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={home2} />
            </div>
        </div>
    )
}
export default ServicesSection
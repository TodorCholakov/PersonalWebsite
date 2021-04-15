import React from 'react';
import me from '../images/me.JPG'

const AboutSection = () => {
    return(
        <div className="description">
            <div className="title">
                <div className="hide">
                    <h2>
                        We work to make
                    </h2>
                </div>
                <div className="hide">
                    <h2>
                        your <span>dreams</span> come 
                    </h2>
                </div>
                <div className="hide">
                    <h2>
                        true
                    </h2>

                </div>
                <p>Contact us for any photograpgy or videography ideas that you have. We have proffesioanls with amazin scills</p>
                <button>Contact us</button>
                
            </div>
            <div className="image">
                <img src={me} alt = "OK" />
            </div>
        </div>
    )
}
export default AboutSection
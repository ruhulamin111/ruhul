import React from 'react'
import './Pricing.css'
import img1 from '../../assets/price-1.svg';
import img2 from '../../assets/price-2.svg';
import img3 from '../../assets/price-3.svg';

const Pricing = () => {

    return (
        <div >
            <section className="pricing container section">
                <h2 className="section-title">Package Plans</h2>
                <div className="pricing_container grid">
                    <div className="pricing_item">
                        <img src={img1} alt="" className="pricing_img" />
                        <h3 className="pricing_plan">Landing Page Project</h3>
                        <p className="pricing_title">As such, landing pages are a vital touchpoint, serving as an initial brand interaction.</p>
                        <p className="pricing_support">Client Satisfiction</p>
                        <p className="pricing_support">Email Support</p>
                        <h3 className="price">
                            <em>$</em>299<span>/Project</span>
                        </h3>
                        <a href="https://www.linkedin.com/in/ruhul-amin-3ba731241/" target='_blank' rel='noreferrer' className="btn">Buy Now</a>
                    </div>
                    <div className="pricing_item best">
                        <span className="badge">Recommended</span>
                        <img src={img2} alt="" className="pricing_img" />
                        <h3 className="pricing_plan">Multi Page Project</h3>
                        <p className="pricing_title">A multi-page website has different advantages than a single-page website. </p>
                        <p className="pricing_support">Scaleable Funtion</p>
                        <p className="pricing_support">Sunday- Thusday</p>
                        <h3 className="price">
                            <em>$</em>499<span>/Project</span>
                        </h3>
                        <a href="https://www.linkedin.com/in/ruhul-amin-3ba731241/" target='_blank' rel='noreferrer' className="btn">Buy Now</a>
                    </div>

                    <div className="pricing_item ">
                        <img src={img3} alt="" className="pricing_img" />
                        <h3 className="pricing_plan">Fullstack Project</h3>
                        <p className="pricing_title">A mobile full stack developer is experienced and flexible enough to take almost any position .</p>
                        <p className="pricing_support">Best Performance</p>
                        <p className="pricing_support">24 Hour/ 7 Days</p>
                        <h3 className="price">
                            <em>$</em>799<span>/Project</span>
                        </h3>
                        <a href="https://www.linkedin.com/in/ruhul-amin-3ba731241/" target='_blank' rel='noreferrer' className="btn">Buy Now</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Pricing

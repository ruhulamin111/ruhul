import React from 'react'
import './Pricing.css'
import img1 from '../../assets/price-1.svg';
import img2 from '../../assets/price-2.svg';
import img3 from '../../assets/price-3.svg';

const Pricing = () => {
    return (
        <section className="pricing container section">
            <h2 className="section-title">Pricing Plans</h2>

            <div className="pricing_container grid">
                <div className="pricing_item">
                    <img src={img1} alt="" className="pricing_img" />
                    <h3 className="pricing_plan">Basic</h3>
                    <p className="pricing_title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, fuga.</p>
                    <p className="pricing_support">Email Support</p>
                    <h3 className="price">
                        <em>$</em> 9 <span>Month</span>
                    </h3>
                    <a href="#" className="btn">Get Started</a>
                </div>

                <div className="pricing_item best">
                    <span className="badge">Recommended</span>
                    <img src={img2} alt="" className="pricing_img" />
                    <h3 className="pricing_plan">Standard</h3>
                    <p className="pricing_title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, illum.</p>
                    <p className="pricing_support">Email Support</p>
                    <h3 className="price">
                        <em>$</em> 19 <span>Month</span>
                    </h3>
                    <a href="" className="btn">Get Started</a>
                </div>

                <div className="pricing_item ">
                    <img src={img3} alt="" className="pricing_img" />
                    <h3 className="pricing_plan">Premium</h3>
                    <p className="pricing_title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, ex?</p>
                    <p className="pricing_support">24/7 days</p>
                    <h3 className="price">
                        <em>$</em> 9 <span>Month</span>
                    </h3>
                    <a href="" className="btn">Get Started</a>
                </div>

            </div>
        </section>
    )
}

export default Pricing

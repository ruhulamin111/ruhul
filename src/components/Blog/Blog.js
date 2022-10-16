import React from 'react'
import './Blog.css'
import blog1 from '../../assets/blog-1.svg'
import blog2 from '../../assets/blog-2.svg'
import blog3 from '../../assets/blog-3.svg'

const Blog = () => {
    return (
        <section className='blog container section' id='blog'>
            <h2 className="section-title">Latest Post</h2>
            <div className="blog_container grid">
                <div className="blog_card">
                    <div className="blog_thumb">
                        <a href=""><span className="blog_category">Reviews</span></a>
                        <a href=""><img src={blog1} alt="" className="blog_img" /></a>
                    </div>
                    <div className="blog_details">
                        <h3 className="blog_title">5 Best Web Development Tool for your project</h3>
                        <div className="blog_meta">
                            <span>10 October 2022</span>
                            <span className="blog-dot">.</span>
                            <span>John</span>
                        </div>
                    </div>
                </div>

                <div className="blog_card">
                    <div className="blog_thumb">
                        <a href=""><span className="blog_category">Bussiness</span></a>
                        <a href=""><img src={blog2} alt="" className="blog_img" /></a>
                    </div>
                    <div className="blog_details">
                        <h3 className="blog_title">5 Best Web Development Tool for your project</h3>
                        <div className="blog_meta">
                            <span> 15 October 2022</span>
                            <span className="blog-dot">.</span>
                            <span>John</span>
                        </div>
                    </div>
                </div>

                <div className="blog_card">
                    <div className="blog_thumb">
                        <a href=""><span className="blog_category">Tutorials</span></a>
                        <a href=""><img src={blog3} alt="" className="blog_img" /></a>
                    </div>
                    <div className="blog_details">
                        <h3 className="blog_title">5 Best Web Development Tool for your project</h3>
                        <div className="blog_meta">
                            <span>5 Agust 2022</span>
                            <span className="blog-dot">.</span>
                            <span>John</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Blog
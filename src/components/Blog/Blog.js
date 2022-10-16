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
                        <a href="https://github.com/ruhulamin111">
                            <span className="blog_category">Frontend</span>
                            <img src={blog1} alt="" className="blog_img" />
                        </a>
                    </div>
                    <div className="blog_details">
                        <h3 className="blog_title">A front-end web creator executes visual ingredients.</h3>
                        <div className="blog_meta">
                            <span>01, Agust, 2022</span>
                            <em>Goerge Harish</em>
                        </div>
                    </div>
                </div>
                <div className="blog_card">
                    <div className="blog_thumb">
                        <a href="https://github.com/ruhulamin111">
                            <span className="blog_category">UI/UX </span>
                            <img src={blog2} alt="" className="blog_img" />
                        </a>
                    </div>
                    <div className="blog_details">
                        <h3 className="blog_title">It deals with its specialization in web designing, application designing.</h3>
                        <div className="blog_meta">
                            <span>01, September, 2022</span>
                            <em>Robert Philips</em>
                        </div>
                    </div>
                </div>
                <div className="blog_card">
                    <div className="blog_thumb">
                        <a href="https://github.com/ruhulamin111">
                            <span className="blog_category">Fullstack</span>
                            <img src={blog3} alt="" className="blog_img" />
                        </a>
                    </div>
                    <div className="blog_details">
                        <h3 className="blog_title">MERN Stack is a open-source JavaScript software stack for building dynamic Websites.</h3>
                        <div className="blog_meta">
                            <span>01, October, 2022</span>
                            <em>John Knedy</em>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Blog
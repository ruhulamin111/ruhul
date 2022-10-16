import React, { useState } from 'react';
import './Sidebar.css';
import Logo from '../../assets/logo.svg'
import { FaBriefcase, FaHamburger, FaHome, FaLayerGroup, FaMicroblog, FaRegStickyNote, FaUserGraduate, } from 'react-icons/fa';


const Sidebar = () => {
    const [toggle, showMenu] = useState(false);

    return (
        <>
            <aside className={toggle ? "aside show_menu" : "aside"}>
                <a href="#home" className="nav_logo">
                    <img src={Logo} alt="" />
                </a>
                <nav className="nav">
                    <div className="nav_menu">
                        <ul className="nav_list">
                            <li className="nav_item">
                                <a href="#home" className="nav_link"><FaHome /></a>
                            </li>
                            <li className="nav_item">
                                <a href="#about" className="nav_link"><FaBriefcase /></a>
                            </li>
                            <li className="nav_item">
                                <a href="#services" className="nav_link"><FaUserGraduate /></a>
                            </li>
                            <li className="nav_item">
                                <a href="#resume" className="nav_link"><FaLayerGroup /></a>
                            </li>
                            <li className="nav_item">
                                <a href="#portfolio" className="nav_link"><FaRegStickyNote /></a>
                            </li>
                            <li className="nav_item">
                                <a href="#blog" className="nav_link"><FaMicroblog /></a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="nav_footer">
                    <span className="copyright">2022</span>
                </div>
            </aside>

            <div className={toggle ? "nav_toggle nav_toggle_open" : "nav_toggle"} onClick={() => showMenu(!toggle)} >
                <FaHamburger />
            </div>
        </>
    );
};

export default Sidebar;
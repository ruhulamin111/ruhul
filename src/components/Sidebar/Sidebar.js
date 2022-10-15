import React from 'react';
import './Sidebar.css';
import Logo from '../../assets/logo.svg'
import { FaBlog, FaBriefcase, FaFileContract, FaGraduationCap, FaHome, FaLayerGroup, FaMicroblog, FaNode, FaRegStickyNote, FaUserGraduate, } from 'react-icons/fa';


const Sidebar = () => {
    return (
        <aside>
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
                        <li className="nav_item">
                            <a href="#contact" className="nav_link"><FaFileContract /></a>
                        </li>
                        <li className="nav_item">
                            <a href="#home" className="nav_link"><FaFileContract /></a>
                        </li>
                        <li className="nav_item">
                            <a href="#home" className="nav_link"><FaFileContract /></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="nav_footer">
                <span className="copyright">2022</span>
            </div>
        </aside>
    );
};

export default Sidebar;
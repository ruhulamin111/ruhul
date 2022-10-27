import React, { useState } from 'react';
import './Sidebar.css';
import Logo from '../../assets/ruhul_logo.svg'
import HomeIcon from '@mui/icons-material/Home';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import SchoolIcon from '@mui/icons-material/School';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LayersIcon from '@mui/icons-material/Layers';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from "framer-motion"

const Sidebar = () => {
    const [toggle, showMenu] = useState(false);
    const date = new Date().getFullYear()

    return (
        <div  >
            <motion.aside
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: .5 }}
                className={toggle ? "aside show_menu" : "aside"}>
                <a href="/" className="nav_logo">
                    <img className='logo' src={Logo} alt="" />
                </a>
                <nav className="nav">
                    <div className="nav_menu">
                        <ul className="nav_list">
                            <li className="nav_item">
                                <a href="#home" className="nav_link"><HomeIcon /></a>
                            </li>
                            <li className="nav_item">
                                <a href="#about" className="nav_link"><HomeRepairServiceIcon /></a>
                            </li>
                            <li className="nav_item">
                                <a href="#resume" className="nav_link"><SchoolIcon /></a>
                            </li>
                            <li className="nav_item">
                                <a href="#work" className="nav_link"><AccountTreeIcon /></a>
                            </li>
                            <li className="nav_item">
                                <a href="#blog" className="nav_link"><LayersIcon /></a>
                            </li>
                            <li className="nav_item">
                                <a href="#contact" className="nav_link"><ContactPageIcon /></a>
                            </li>

                        </ul>
                    </div>
                </nav>
                <div className="nav_footer">
                    <span className="copyright">&copy; {date}</span>
                </div>
            </motion.aside>
            <div className={toggle ? "nav_toggle nav_toggle_open" : "nav_toggle"} onClick={() => showMenu(!toggle)} >
                <MenuIcon />
            </div>
        </div>
    );
};

export default Sidebar;
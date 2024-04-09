import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo_hsbc.svg";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const toggleMenu = () => {
    // Verifica si el menú está expandido o contraído y toma la acción correspondiente
    if (expanded) {
      handleContraction();
    } else {
      handleExpansion();
    }
  };
  const handleContraction = () => {
    const contenedorAppGlass = document.querySelector('.AppGlass');
    contenedorAppGlass.style.gridTemplateColumns = '4.5rem auto 0rem';

    setExpanded(!expanded);
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('collapsed', !expanded);
  };

  const handleExpansion = () => {
    const contenedorAppGlass = document.querySelector('.AppGlass');
    contenedorAppGlass.style.gridTemplateColumns = '11rem auto 0rem';
    
    setExpanded(!expanded);
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('collapsed', !expanded);
  };

  return (
    <>
      <div className="bars" style={expanded ? { left: '60%', color: 'white' } : { left: '5%' }} onClick={toggleMenu}>
        <UilBars />
      </div>
      <motion.div className={expanded ? 'sidebar' : 'sidebar collapsed'}>
      <div className="logo" onClick={toggleMenu}>
        <img src={Logo} alt="logo" />
        <span>HSBC</span> {/* Agrega el nombre HSBC dentro de un span */}
      </div>


        <div className="menu">
          {SidebarData.map((item, index) => (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <Link to={item.Path} className="link">
                <div className="link-content" style={{ color: 'white' }}>
                  <item.icon />
                  <span>{item.heading}</span>
                </div>
              </Link>
            </div>
          ))}
          <div className="menuItem">
            <UilSignOutAlt/>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;

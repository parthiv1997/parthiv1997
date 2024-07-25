import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import { GiHamburgerMenu } from 'react-icons/gi';
import './Navbar.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  const showSidebar = () => setSidebar(!sidebar);

  const handleItemClick = (item) => {
    setActiveItem(item); // Update active item based on path or unique identifier
    if (sidebar) {
      showSidebar(); // Close sidebar on item click if sidebar is open
    }
  };

  return (
    <>
      <IconContext.Provider value={{ color: 'black' }}>
        <GiHamburgerMenu onClick={showSidebar} />
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            {SidebarData.map((item, index) => (
              <li key={index} className={`${activeItem === item.path ? item.cName ? "borderline" : '' : 'active-tab'}`}
              >
                <NavLink
                  to={item.path}

                  activeClassName='active'
                  onClick={() => handleItemClick(item.path)}
                >
                  {item.icon}
                  <span className='spans'>{item.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

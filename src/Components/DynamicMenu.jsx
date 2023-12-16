// DynamicMenu.jsx
import React, { useState, useEffect } from 'react';
import './DynamicMenu.css';

const DynamicMenu = ({ menuItems }) => {
  const [visibleItems, setVisibleItems] = useState(menuItems);
  const [hiddenItems, setHiddenItems] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 600;
      setIsMobile(newIsMobile);

      const maxVisibleItems = newIsMobile ? 1 : menuItems.length;
      setVisibleItems(menuItems.slice(0, maxVisibleItems));
      setHiddenItems(menuItems.slice(maxVisibleItems));
    };

    handleResize(); // Initial setup

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuItems]);

  return (
    <div className="dynamic-menu">
      <div className="menu-container">
        {visibleItems.map(item => (
          <div key={item.id} className="menu-item">
            {item.label}
          </div>
        ))}
      </div>
      {isMobile && (
        <div className="more-dropdown">
          More
          <div className="dropdown-content">
            {hiddenItems.map(item => (
              <div key={item.id} className="menu-item">
                {item.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicMenu;

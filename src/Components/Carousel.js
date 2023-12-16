// Carousel.jsx
import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length]);

  const handleItemClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          onClick={() => handleItemClick(index)}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default Carousel;

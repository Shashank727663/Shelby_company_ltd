// ImageCarousel.jsx
import React, { useState, useEffect } from 'react';
import './Carousel.css';
import bar from '../asset/bar.png';
import dot from '../asset/dot.png';
import LeftArrow from '../asset/arrow_left.png';
import RightArrow from '../asset/arrow_right.png';
import firstimge from '../asset/CarouselImages/1.jpg'

const ImageCarousel = () => {
  const images = [
    {
      src: 'https://wallpapercosmos.com/w/full/9/b/2/12628-3840x2160-desktop-4k-peaky-blinders-background-image.jpg',
      alt: 'Image 1',
      description: 'Description 1',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQr3xhDIYS7Ye4oqokuGOj9D4jmEd4VkqMSg&usqp=CAU',
      alt: 'Image 2',
      description: 'Description 2',
    },
    {
      src: 'https://wallpapercosmos.com/w/full/e/2/e/12641-1920x1080-desktop-full-hd-peaky-blinders-background-image.jpg',
      alt: 'Image 3',
      description: 'Description 3',
    },
    {
      src:'https://wallpapercave.com/wp/wp1890602.jpg',
      alt:'Image 4',
      description:'Description 4'
    }

  ];

  const [carouselState, setCarouselState] = useState(3);
  const [isHidden, setIsHidden] = useState(false);

  const hideDesc = () => {
    setIsHidden(true);
    setTimeout(() => {
      setIsHidden(false);
    }, 1000);
  };

  const imageFunc = (state) => {
    setCarouselState(state);
    hideDesc();
  };

  const goLeft = () => {
    setCarouselState((prev) => (prev === 1 ? images.length : prev - 1));
    hideDesc();
  };

  const goRight = () => {
    setCarouselState((prev) => (prev % images.length) + 1);
    hideDesc();
  };

  useEffect(() => {
    const intervalId = setInterval(goRight, 3500);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className='container'>
      <div className={`carousel state-${carouselState}`}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => imageFunc(index + 1)}
          />
        ))}
        {!isHidden && <div className='desc'>{images[carouselState - 1].description}</div>}
      </div>
      <div className='nav'>
        <img src={LeftArrow} alt='Left' onClick={goLeft} />
        {Array.from({ length: images.length }).map((_, index) => (
          <img
            key={index}
            src={index === carouselState - 1 ? bar : dot}
            alt='State'
            onClick={() => imageFunc(index + 1)}
          />
        ))}
        <img src={RightArrow} alt='Right' onClick={goRight} />
      </div>
    </div>
  );
};

export default ImageCarousel;

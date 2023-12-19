// App.jsx
import React from 'react';
import DynamicMenu from './Components/DynamicMenu';
import Carousel from './Components/Carousel';
import './App.css'; // Import your main styling file

const App = () => {
  const menuItems = [
    { id: 1, label: 'Home' },
    { id: 2, label: 'About' },
    { id: 3, label: 'Services' },
    { id: 4, label: 'Contact' },
    {id: 5, label: 'Register'},
    { id: 6, label: 'Login'},
    {id: 7, label: 'Logout'}
    // Add more menu items as needed
  ];

  const carouselItems = [
    { id: 1, imageSrc: 'https://unsplash.com/photos/unpaired-red-nike-sneaker-164_6wVEHfI' },
  { id: 2, imageSrc: 'https://unsplash.com/photos/a-person-wearing-a-hat-SD9Jyl1xNQ4' },
  { id: 3, imageSrc: 'https://unsplash.com/photos/black-white-and-red-nike-high-top-sneaker-76w_eDO1u1E' },
    // Add more carousel items as needed
  ];

  return (
    <div className="app">
      <h1>Avataar</h1>
      <DynamicMenu menuItems={menuItems} />
      <Carousel items = {carouselItems} />
    </div>
  );
};

export default App;

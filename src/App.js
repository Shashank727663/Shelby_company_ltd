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
    { id: 6, label: 'Login'}
    // Add more menu items as needed
  ];

  const carouselItems = [
    { id: 1, content: 'Item 1' },
    { id: 2, content: 'Item 2' },
    { id: 3, content: 'Item 3' },
    {id: 4, content: 'Item 4'},
    {id: 5, content: 'Item 5'}
    // Add more carousel items as needed
  ];

  return (
    <div className="app">
      <h1>Your React App</h1>
      <DynamicMenu menuItems={menuItems} />
      <Carousel items={carouselItems} />
    </div>
  );
};

export default App;

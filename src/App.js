// App.jsx
import React from 'react';
import DynamicMenu from './Components/DynamicMenu';
import ImageCarousel from './Components/Carousel';
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


  return (
    <div className="app">
      <h1>Shelby company limited.</h1>
      <DynamicMenu menuItems={menuItems} />
      <ImageCarousel  />
    </div>
  );
};

export default App;

import React from 'react';
import ImagePage from './ImagePage';

const MenuPage = () => {
  const menuItems = [
    { id: '1', title: 'Cover Page' },
    { id: '2', title: 'Cold Classics & Frappe' },
    { id: '3', title: 'Hot Classics & Filter Coffees' },
    { id: '4', title: 'Sweet Tooth & Bakery' },
    { id: '5', title: 'Mojitos, Non-coffee & Fresh Juice' },
  ];

  return (
    <div className="menu-container">
      {menuItems.map((item, index) => (
        <div id={`page-${item.id}`} key={item.id} className="menu-page-section">
          <ImagePage id={item.id} title={item.title} isCover={index === 0} />
        </div>
      ))}
    </div>
  );
};

export default MenuPage;
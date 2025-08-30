import React from 'react';

const ImagePage = ({ id, title, isCover }) => {
  const images = {
    1: 'images/1.jpeg',
    2: 'images/2.jpeg',
    3: 'images/3.jpeg',
    4: 'images/4.jpeg',
    5: 'images/5.jpeg',
  };

  const imageSrc = images[id];

  const menuTitles = [
    { id: '2', text: 'Cold Classics & Frappe' },
    { id: '3', text: 'Hot Classics & Filter Coffees' },
    { id: '4', text: 'Sweet Tooth & Bakery' },
    { id: '5', text: 'Mojitos, Non-coffee & Fresh Juice' },
  ];

  return (
    <div id={`page-${id}`} className={`page-container page-${id}`}>
      <img src={`/${imageSrc}`} alt={title} className="full-page-image" />
      {isCover ? (
        <div className="overlay-content">
          <div className="links">
            {menuTitles.map((item) => (
              <a key={item.id} href={`#page-${item.id}`} className="link-item">
                {item.text}
              </a>
            ))}
          </div>
        </div>
      ) : (
        <a href="#page-1" className="back-link">
          Go Back
        </a>
      )}
    </div>
  );
};

export default ImagePage;
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ImagePage = ({ coverPage }) => {
  const { id } = useParams();
  const imageId = coverPage ? '1' : id;

  const images = {
    1: { src: 'images/1.jpeg', title: 'Cover Page' },
    2: { src: 'images/2.jpeg', title: 'Cold Classics & Frappe' },
    3: { src: 'images/3.jpeg', title: 'Hot Classics & Filter Coffees' },
    4: { src: 'images/4.jpeg', title: 'Sweet Tooth & Bakery' },
    5: { src: 'images/5.jpeg', title: 'Mojitos, Non-coffee & Fresh Juice' },
  };

  const imageSrc = images[imageId].src;
  const pageTitle = images[imageId].title;

  return (
    <div className={`page-container page-${imageId}`}>
      <img src={`/${imageSrc}`} alt={pageTitle} className="full-page-image" />
      {coverPage ? (
        <div className="overlay-content">
          <h1>Go&Sips Menu</h1>
          <div className="links">
            {Object.keys(images).filter(key => key !== '1').map((key) => (
              <Link key={key} to={`/image/${key}`} className="link-item">
                {images[key].title}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="back-link-container">
          <Link to="/" className="back-link">
            &larr; Back to Main Page
          </Link>
        </div>
      )}
    </div>
  );
};

export default ImagePage;
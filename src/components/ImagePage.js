import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ImagePage = () => {
  const { id } = useParams();

  // Array of placeholder images. Replace with your actual image URLs.
  // Images should be placed in the `public` folder for easy access.
  const images = {
    1: 'images/1.jpeg',
    2: 'images/2.jpeg',
    3: 'images/3.jpeg',
    4: 'images/4.jpeg',
    5: 'images/5.jpeg',
  };

  const imageSrc = images[id];
  const title = `Image ${id} Page`;

  return (
    <div className="page-container image-page">
      <h2>{title}</h2>
      {imageSrc ? (
        <img src={`/${imageSrc}`} alt={title} />
      ) : (
        <p>Image not found.</p>
      )}
      <Link to="/" className="back-link">
        &larr; Back to Main Page
      </Link>
    </div>
  );
};

export default ImagePage;
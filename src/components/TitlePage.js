import React from 'react';
import { Link } from 'react-router-dom';

const TitlePage = () => {
  return (
    <div className="page-container title-page">
      <h1>Menu</h1>
      <div className="links">
        {Array.from({ length: 5 }, (_, i) => i + 1).map((number) => (
          <Link key={number} to={`/image/${number}`} className="link-item">
            Image {number} Title
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitlePage;
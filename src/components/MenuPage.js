import React, { useState, useEffect, useRef } from 'react';
import ImagePage from './ImagePage';

const MenuPage = () => {
  const [showBackButton, setShowBackButton] = useState(false);
  const firstPageRef = useRef(null);

  const menuItems = [
    { id: '1', title: 'Cover Page' },
    { id: '2', title: 'Cold Classics & Frappe' },
    { id: '3', title: 'Hot Classics & Filter Coffees' },
    { id: '4', title: 'Sweet Tooth & Bakery' },
    { id: '5', title: 'Mojitos, Non-coffee & Fresh Juice' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the first page is not intersecting (i.e., scrolled out of view),
        // show the back button.
        setShowBackButton(!entry.isIntersecting);
      },
      // This threshold means the event will fire as soon as the element
      // is even a single pixel out of view.
      { threshold: [0.99] }
    );

    const currentRef = firstPageRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="menu-container">
      {menuItems.map((item, index) => (
        <div
          // Attach the ref to the first page section
          ref={index === 0 ? firstPageRef : null}
          id={`page-${item.id}`}
          key={item.id}
          className="menu-page-section"
        >
          <ImagePage id={item.id} title={item.title} isCover={index === 0} />
        </div>
      ))}
      {showBackButton && (
        <a href="#page-1" className="back-link">
          Go Back
        </a>
      )}
    </div>
  );
};

export default MenuPage;


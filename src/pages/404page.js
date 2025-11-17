import React from 'react';
import { Link } from 'react-router-dom'; // if using React Router

const NotFound = () => {
  return (
    <div className="notfound-page">
      <main className="notfound-content fade-in fade-in-delay-2">
        <h1 className="headline">404</h1>
        <p className="notfound-message">
          Oops! The page you’re looking for does not exist.
        </p>
        <Link to="/" className="inquire-button">
          Return Home
        </Link>
      </main>
    </div>
  );
};

export default NotFound;
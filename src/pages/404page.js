import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notfound-page">
      {/* Header (left-aligned, like homepage) */}
      <header className="notfound-header">
        <Link to="/" className="site-title-link">
          <h1 className="headline">Effie Mergs</h1>
        </Link>
      </header>

      <main className="notfound-content">
        <div className="notfound-center">
          <h1 className="notfound-404">404</h1>
          <p className="notfound-message">
            Oops! The page you’re looking for does not exist.
          </p>
          <Link to="/" className="inquire-button">
            Return Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-left">
          Effie Mergs — All rights reserved {new Date().getFullYear()}
        </div>
        <div className="footer-right">
          <a href="https://www.instagram.com/effiemergs/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:effiemergs@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;

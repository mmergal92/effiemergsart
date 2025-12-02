import DuckPainting from '../assets/DuckPainting.jpg';
import PillsPainting from '../assets/PillsPainting.jpg';
import RoomDoodlesPainting from '../assets/RoomDoodlesPainting.jpg';
import SittingLadyPainting from '../assets/SittingLadyPainting.jpg';
// import UntitledHorse1Painting from '../assets/UntitledHorse1Painting.jpg';
// import UntitledHorse2Painting from '../assets/UntitledHorse2Painting.jpg';
import UntitledHorse3Painting from '../assets/UntitledHorse3painting.jpg';
import Bullpainting from '../assets/Bullpainting.jpg'
import earth1painting from '../assets/earth1painting.jpg'

import earth2 from '../assets/earth2.jpg'
import Forest from '../assets/Forest.jpg'
import girlwithearringpainting from '../assets/girlwithearringpainting.jpg'
import UNTITLEDABSTRACT1 from '../assets/UNTITLEDABSTRACT1.jpg'
import UNTITLEDABSTRACT2 from '../assets/UNTITLEDABSTRACT2.jpg'

import { useState } from 'react';

const artworks = [
  {
    image: PillsPainting,
    title: 'Pills',
    year: 2025,
    medium: 'Acrylic on Canvas',
    size: '8" x 10"',
    available: true, // can inquire
  },
    {
    image: UntitledHorse3Painting,
    title: 'Untitled',
    year: 2025,
    medium: 'Acrylic on Canvas',
    size: '5" x 7"',
    available: true, 
  },
   {
    image: girlwithearringpainting,
    title: 'Girl with Earring',
    year: 2020,
    medium: 'Acrylic on Canvas',
    size: '5" x 7"',
    available: true, 
  },
    {
    image: RoomDoodlesPainting,
    title: 'Untitled',
    year: 2022,
    medium: 'Acrylic on Canvas',
    size: '16" x 20"',
    available: true, 
  },
    {
    image: SittingLadyPainting,
    title: 'Sitting Lady',
    year: 2025,
    medium: 'Acrylic on Canvas',
    size: '36" x 48"',
    available: true, 
  },
    {
    image: UNTITLEDABSTRACT1,
    title: 'Untitled',
    year: 2022,
    medium: 'Acrylic on Canvas',
    size: '20.5" x 26"',
    available: true, 
  },
    {
    image: UNTITLEDABSTRACT2,
    title: 'Untitled',
    year: 2022,
    medium: 'Acrylic on Canvas',
    size: '11.5" x 17"',
    available: true, 
  },
  {
    image: earth1painting,
    title: 'Earth',
    year: 2025,
    medium: 'Acrylic on Canvas',
    size: '8" x 10"',
    available: true, 
  },
   {
    image: earth2,
    title: 'Earth 2',
    year: 2025,
    medium: 'Acrylic on Canvas',
    size: '5" x 7"',
    available: true, 
  },
   {
    image: Forest,
    title: 'Winter Forest',
    year: 2025,
    medium: 'Acrylic on Canvas',
    size: '8" x 10"',
    available: true, 
  },
    {
    image: DuckPainting,
    title: 'Duck',
    year: 2022,
    medium: 'Acrylic on Canvas',
    size: '16" x 20"',
    available: false, 
  },
      {
    image: Bullpainting,
    title: 'Bull',
    year: 2022,
    medium: 'Acrylic on Canvas',
    size: '16" x 20"',
    available: false, 
  },
      
  // Add more artworks here
];

const Home = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <div className="home-page">
      <main className="home-content fade-in fade-in-delay-2">
        <h1 className="headline">Effie Mergs</h1>

        <section className="main-content" id="main">
          <div className="grid-container">
            {artworks.map((art, index) => (
              <div className="grid-row" key={index}>
                <div className="grid-item image">
                  <img
                    src={art.image}
                    alt={art.title}
                    onClick={() => setLightboxImage(art.image)}
                    className="clickable-image"
                  />
                </div>

                <div className="grid-item text">
                  <p className="artwork-title">{art.title}</p>
                  <p className="artwork-details">{art.year}</p>
                  <p className="artwork-details">{art.medium}</p>
                  <p className="artwork-details">{art.size}</p>

                  {art.available ? (
                    <a href="mailto:effiemergs@gmail.com" className="inquire-button">
                      Inquire
                    </a>
                  ) : (
                    <span className="sold-label">Sold</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LIGHTBOX */}
        {lightboxImage && (
          <div className="lightbox" onClick={() => setLightboxImage(null)}>
            <img src={lightboxImage} alt="Artwork enlarged" className="lightbox-img" />
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-left">
          Effie Mergs — All rights reserved {new Date().getFullYear()}
        </div>
        <div className="footer-right">
          <a href="https://www.instagram.com/effiemergs/" target="_blank">
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

export default Home;
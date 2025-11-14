import DuckPainting from '../assets/DuckPainting.jpg';
import PillsPainting from '../assets/PillsPainting.jpg';
import RoomDoodlesPainting from '../assets/RoomDoodlesPainting.jpg';
import SittingLadyPainting from '../assets/SittingLadyPainting.jpg';
import UntitledHorse1Painting from '../assets/UntitledHorse1Painting.jpg';
import UntitledHorse2Painting from '../assets/UntitledHorse2Painting.jpg';
import UntitledHorse3Painting from '../assets/UntitledHorse3Painting.jpg';

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
    image: UntitledHorse1Painting,
    title: 'Untitled',
    year: 2025,
    medium: 'Acrylic on Canvas',
    size: '5" x 7"',
    available: true, // sold
  },
    {
    image: UntitledHorse2Painting,
    title: 'Untitled',
    year: 2025,
    medium: 'Acrylic on Canvas',
    size: '5" x 7"',
    available: false, // sold
  },
    {
    image: UntitledHorse3Painting,
    title: 'Untitled',
    year: 2025,
    medium: 'Acrylic on Canvas',
    size: '5" x 7"',
    available: true, // sold
  },
    {
    image: RoomDoodlesPainting,
    title: 'Untitled',
    year: 2022,
    medium: 'Acrylic on Canvas',
    size: '16" x 20"',
    available: true, // sold
  },
    {
    image: DuckPainting,
    title: 'Duck',
    year: 2022,
    medium: 'Acrylic on Canvas',
    size: '16" x 20"',
    available: false, // sold
  },
    {
    image: SittingLadyPainting,
    title: 'Sitting Lady',
    year: 2025,
    medium: 'Acrylic on Canvas',
    size: '36" x 48"',
    available: true, // sold
  },
  // Add more artworks here
];
const Home = () => {
  return (
    <div className="home-page">
      <main className="home-content fade-in fade-in-delay-2">
        <h1 className="headline">Effie Mergs Art</h1>

        <section className="main-content" id="main">
          <div className="grid-container">
            {artworks.map((art, index) => (
              <div className="grid-row" key={index}>
                <div className="grid-item image">
                  <img src={art.image} alt={art.title} />
                </div>
                <div className="grid-item text">
                  <p className="artwork-title">{art.title}</p>
                  <p className="artwork-details">{art.year}</p>
                  <p className="artwork-details">{art.medium}</p>
                  <p className="artwork-details">{art.size}</p>
                  {/* Inquire button */}
                 
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
      </main>
    </div>
  );
};

export default Home;
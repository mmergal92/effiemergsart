import pillsimage from '../assets/pills-test-image.png';
import horse from '../assets/horse.png';

const artworks = [
  {
    image: pillsimage,
    title: 'Pills',
    year: 2025,
    medium: 'Acrylic on Canvas',
    size: '8" x 10"',
    available: true, // can inquire
  },
  {
    image: horse,
    title: 'Untitled',
    year: 2025,
    medium: 'Acrylic on Canvas',
    size: '5" x 7"',
    available: false, // sold
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
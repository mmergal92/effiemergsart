import pillsimage from '../assets/pills-test-image.png';
import horse from '../assets/horse.png';

const Home = () => {
  // Placeholder arrays for images and text, can replace with your real content
  const rows = Array.from({ length: 10 });

  return (
    <div className="home-page">
      <main className="home-content fade-in fade-in-delay-2">
        <h1 className="headline">Header Text</h1>

        <section className="main-content" id="main">
          <div className="grid-container">
            {rows.map((_, index) => (
              <div className="grid-row" key={index}>
                <div className="grid-item image">
                  <img
                    src={pillsimage}
                    alt={`pills-image`}
                  />  <img
                    src={horse}
                    alt={`pills-image`}
                  />
                </div>
                <div className="grid-item text">
                  {/* Replace with your text */}
                  <p>Pills</p>
                  <p>2025</p>
                  <p>Acrylic on Canvas</p>
                  <p>8" x 10"</p>
                </div>
                         <div className="grid-item text">
                  {/* Replace with your text */}
                  <p>Horse</p>
                  <p>2025</p>
                  <p>Acrylic on Canvas</p>
                  <p>5"x7"</p>
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
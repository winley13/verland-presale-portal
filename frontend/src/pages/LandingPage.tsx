import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
  const [mintQty, setMintQty] = useState(1);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 15);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const changeQty = (val: number) => {
    const newQty = Math.max(1, mintQty + val);
    setMintQty(newQty);
  };

  return (
    <div className="landing-body">
      {/* Main content area with background image - from navbar to end of presale, excluding footer */}
      <div className="landing-bg-wrapper">
        <nav className="landing-navbar">
          <div className="landing-container">
            <Link to="/" className="landing-logo">NEO<span>VERSE</span></Link>
            <ul className="landing-nav-links">
              <li><a href="#about">Concept</a></li>
              <li><Link to="/map">World Map</Link></li>
              <li><a href="#presale">Presale</a></li>
            </ul>
          </div>
        </nav>

        <header className="landing-hero">
          <div className="landing-container">
            <div className="landing-hero-content">
              <span className="landing-badge">Phase 01 Live</span>
              <h1>The Future of <br/><span className="landing-highlight">Digital Ownership</span></h1>
              <p>Own a piece of the next evolution. High-fidelity virtual plots with infinite utility in the Neon-Grid ecosystem.</p>
              <div className="landing-hero-btns">
                <a href="#presale" className="landing-btn landing-btn-primary">Buy Land Now</a>
                <Link to="/map" className="landing-btn landing-btn-secondary">Explore Map</Link>
              </div>
            </div>
            <div className="landing-hero-stats">
              <div className="landing-stat-card">
                <h3 id="timer">
                  {String(timeLeft.days).padStart(2, '0')}:
                  {String(timeLeft.hours).padStart(2, '0')}:
                  {String(timeLeft.minutes).padStart(2, '0')}:
                  {String(timeLeft.seconds).padStart(2, '0')}
                </h3>
                <p>Presale Ends In</p>
              </div>
            </div>
          </div>
        </header>

        <section id="about" className="landing-features">
          <div className="landing-container">
            <h2 className="landing-section-title">Why Neon-Grid?</h2>
            <div className="landing-grid">
              <div className="landing-card">
                <div className="landing-icon">⚡</div>
                <h3>High Performance</h3>
                <p>Sub-millisecond latency for seamless social and gaming experiences.</p>
              </div>
              <div className="landing-card">
                <div className="landing-icon">🛠️</div>
                <h3>Creator Tools</h3>
                <p>Drag-and-drop building engine to monetize your digital space.</p>
              </div>
              <div className="landing-card">
                <div className="landing-icon">💎</div>
                <h3>Asset Portability</h3>
                <p>Fully compatible with ERC-721 and standard metaverse protocols.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="presale" className="landing-presale-area">
          <div className="landing-container">
            <div className="landing-presale-box">
              <div className="landing-presale-info">
                <h2>Presale Details</h2>
                <p>Early access pricing is currently active. Secure your Tier 1 plots before the public launch.</p>
                <div className="landing-progress-container">
                  <div className="landing-progress-bar" style={{ width: '65%' }}></div>
                </div>
                <p className="landing-progress-text">65% of Total Supply Minted</p>
              </div>
              <div className="landing-mint-ui">
                <div className="landing-price-row">
                  <span>Price per Plot:</span>
                  <span className="landing-Green-text">0.02 ETH</span>
                </div>
                <div className="landing-input-group">
                  <button onClick={() => changeQty(-1)}>-</button>
                  <input type="number" id="mint-qty" value={mintQty} readOnly />
                  <button onClick={() => changeQty(1)}>+</button>
                </div>
                <button className="landing-btn landing-btn-primary landing-btn-full">Mint Land Parcel</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="landing-footer">
        <div className="landing-container">
          <div className="landing-footer-grid">
            <div className="landing-footer-brand">
              <Link to="/" className="landing-logo">NEO<span>VERSE</span></Link>
              <p>Building the infrastructure for the decentralized web.</p>
            </div>
            <div className="landing-footer-links">
              <h4>Community</h4>
              <a href="#">Discord</a>
              <a href="#">Twitter</a>
              <a href="#">Medium</a>
            </div>
          </div>
          <div className="landing-footer-bottom">
            <p>&copy; 2026 Neo-Verse Metaverse. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
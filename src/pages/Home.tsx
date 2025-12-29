import Hero from '../components/Hero';
import Features from '../components/Features';
import AppPreview from '../components/AppPreview';
import CompatibleDevices from '../components/CompatibleDevices';
import './Home.css';

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <Features />
      <AppPreview />
      <CompatibleDevices />
      <section className="cta-section">
        <div className="container">
          <div className="cta-card card">
            <h2>Ready to diagnose your vehicle?</h2>
            <p>Download AXLY.pro and connect your OBD2 adapter to get started.</p>
            <a
              href="https://apps.apple.com/us/app/axly-pro/id6751465283"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get the App
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

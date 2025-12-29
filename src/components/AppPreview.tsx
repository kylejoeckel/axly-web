import './AppPreview.css';

import screenshotDrive from '../assets/screenshot-drive.png';
import screenshotLive from '../assets/screenshot-live.png';
import screenshotTrack from '../assets/screenshot-track.png';
import screenshotGarage from '../assets/screenshot-garage.png';

const previews = [
  {
    image: screenshotDrive,
    title: 'Drive Mode',
    description: 'Real-time gauges display speed, RPM, throttle position, and engine temperature as you drive. Watch your vehicle\'s performance data update live.',
    color: 'var(--accent-cyan)',
  },
  {
    image: screenshotLive,
    title: 'Live Data',
    description: 'Monitor detailed engine metrics including RPM, coolant temp, intake temp, throttle position, and engine load. Organized tabs let you switch between Engine, Fuel & Speed, and Electrical data.',
    color: 'var(--primary)',
  },
  {
    image: screenshotTrack,
    title: 'Track Mode',
    description: 'Time your acceleration runs and track your performance history. Record quarter mile times and compare results across different vehicles in your garage.',
    color: 'var(--accent-green)',
  },
  {
    image: screenshotGarage,
    title: 'Your Garage',
    description: 'Store multiple vehicles with photos, track service history, and log modifications. Your complete vehicle management hub in one place.',
    color: 'var(--secondary)',
  },
];

export default function AppPreview() {
  return (
    <section className="app-preview">
      <div className="container">
        <h2 className="preview-title">See It In Action</h2>
        <p className="preview-subtitle">
          Powerful features designed for car enthusiasts
        </p>

        <div className="preview-list">
          {previews.map((preview, index) => (
            <div
              key={preview.title}
              className={`preview-item ${index % 2 === 1 ? 'reverse' : ''}`}
            >
              <div className="preview-phone">
                <div
                  className="phone-frame"
                  style={{ '--accent': preview.color } as React.CSSProperties}
                >
                  <img src={preview.image} alt={preview.title} />
                </div>
              </div>
              <div className="preview-content">
                <h3 style={{ color: preview.color }}>{preview.title}</h3>
                <p>{preview.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

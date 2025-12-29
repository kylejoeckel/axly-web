import './Features.css';

const features = [
  {
    icon: '📊',
    title: 'Live Data',
    description: 'Monitor RPM, speed, throttle, boost, and temps in real-time with customizable gauges.',
    color: 'var(--accent-cyan)',
  },
  {
    icon: '🔧',
    title: 'Diagnostics',
    description: 'Read and clear check engine codes with AI-powered explanations and repair guidance.',
    color: 'var(--accent-orange)',
  },
  {
    icon: '🏁',
    title: 'Track Mode',
    description: 'Time your 0-60 and quarter mile runs with GPS-based acceleration timing.',
    color: 'var(--accent-green)',
  },
  {
    icon: '🚗',
    title: 'Garage',
    description: 'Store multiple vehicles, track service history, and log modifications.',
    color: 'var(--secondary)',
  },
];

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <h2 className="features-title">Everything You Need</h2>
        <p className="features-subtitle">
          Professional diagnostic tools in your pocket
        </p>
        <div className="features-grid">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="feature-card card"
              style={{ '--accent-color': feature.color } as React.CSSProperties}
            >
              <span className="feature-icon">{feature.icon}</span>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

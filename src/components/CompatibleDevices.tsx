import './CompatibleDevices.css';

const adapters = [
  {
    name: 'Veepeak OBDCheck BLE+',
    description: 'Our top recommendation. Reliable Bluetooth Low Energy adapter with fast response times and wide vehicle compatibility.',
    price: '~$30',
    amazonUrl: 'https://www.amazon.com/dp/B073XKQQQW',
    features: ['Bluetooth LE', 'iOS & Android', 'Fast refresh rate'],
  },
  {
    name: 'Vgate iCar Pro BLE',
    description: 'Great build quality with solid Bluetooth 4.0 connection. Works well with most 1996+ vehicles.',
    price: '~$26',
    amazonUrl: 'https://www.amazon.com/dp/B06XGB4873',
    features: ['Bluetooth 4.0', 'Low power', 'Compact design'],
  },
  {
    name: 'OBDLink MX+',
    description: 'Premium adapter with the fastest performance. Supports enhanced diagnostics on many vehicles.',
    price: '~$100',
    amazonUrl: 'https://www.amazon.com/dp/B07JFRFJG6',
    features: ['Fastest speeds', 'Enhanced data', 'Professional grade'],
  },
];

export default function CompatibleDevices() {
  return (
    <section className="compatible-devices">
      <div className="container">
        <h2 className="devices-title">Compatible OBD2 Adapters</h2>
        <p className="devices-subtitle">
          AXLY.pro works with Bluetooth Low Energy (BLE) OBD2 adapters. Here are our recommended devices:
        </p>

        <div className="adapters-grid">
          {adapters.map((adapter) => (
            <div key={adapter.name} className="adapter-card card">
              <div className="adapter-header">
                <h3>{adapter.name}</h3>
                <span className="adapter-price">{adapter.price}</span>
              </div>
              <p className="adapter-description">{adapter.description}</p>
              <div className="adapter-features">
                {adapter.features.map((feature) => (
                  <span key={feature} className="feature-tag">{feature}</span>
                ))}
              </div>
              <a
                href={adapter.amazonUrl}
                className="btn btn-secondary adapter-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Amazon
              </a>
            </div>
          ))}
        </div>

        <div className="compatibility-note">
          <h4>Compatibility Requirements</h4>
          <ul>
            <li>Bluetooth Low Energy (BLE) or Bluetooth 4.0+ adapter</li>
            <li>ELM327 compatible chipset</li>
            <li>1996 or newer vehicle with OBD2 port</li>
          </ul>
          <p className="note-text">
            Note: Classic Bluetooth and WiFi adapters are not supported on iOS.
          </p>
        </div>
      </div>
    </section>
  );
}

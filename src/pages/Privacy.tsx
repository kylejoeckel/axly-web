import './Privacy.css';

export default function Privacy() {
  return (
    <main className="privacy">
      <div className="container">
        <div className="privacy-content card">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last Updated: October 13, 2025</p>

          <section>
            <h2>Introduction</h2>
            <p>
              AXLY ("we", "our", or "us") respects your privacy and is committed to protecting
              your personal information. This Privacy Policy explains how we collect, use, and
              safeguard your data when you use our mobile application.
            </p>
          </section>

          <section>
            <h2>Information We Collect</h2>

            <h3>Account Information</h3>
            <ul>
              <li>Email address (for account creation and authentication)</li>
              <li>Password (encrypted and securely stored)</li>
            </ul>

            <h3>Device Information</h3>
            <ul>
              <li>Device identifiers (for authentication purposes)</li>
              <li>Operating system and app version</li>
            </ul>

            <h3>Vehicle Diagnostic Data</h3>
            <ul>
              <li>OBD2 diagnostic trouble codes (DTCs)</li>
              <li>Vehicle identification information</li>
              <li>Trip logs and fuel efficiency data</li>
              <li>Maintenance records</li>
            </ul>

            <h3>Usage Data</h3>
            <ul>
              <li>App feature usage</li>
              <li>Crash reports and error logs (for improving app stability)</li>
            </ul>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul>
              <li>Provide and maintain the AXLY service</li>
              <li>Authenticate your account and secure your data</li>
              <li>Store and retrieve your vehicle diagnostic history</li>
              <li>Provide AI-powered diagnostic insights (Premium feature)</li>
              <li>Improve app performance and fix bugs</li>
              <li>Send important service notifications</li>
              <li>Process subscription payments</li>
            </ul>
          </section>

          <section>
            <h2>Data Storage and Security</h2>
            <ul>
              <li>All personal data is encrypted in transit using HTTPS/TLS</li>
              <li>Passwords are hashed using industry-standard algorithms</li>
              <li>Data is stored on secure servers with regular backups</li>
              <li>We implement appropriate security measures to protect against unauthorized access</li>
            </ul>
          </section>

          <section>
            <h2>Data Sharing</h2>
            <p>We do NOT sell your personal information to third parties.</p>
            <p>We may share data with:</p>
            <ul>
              <li><strong>Payment Processors:</strong> Stripe and Apple for subscription processing</li>
              <li><strong>Cloud Service Providers:</strong> Microsoft Azure for hosting (with encryption)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            </ul>
          </section>

          <section>
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Delete your account and associated data</li>
              <li>Export your vehicle diagnostic data</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2>Subscription Data</h2>
            <ul>
              <li>Subscription payments are processed by Apple App Store or Stripe</li>
              <li>We store subscription status and expiration dates</li>
              <li>Payment card information is handled exclusively by Apple/Stripe (we never see your card details)</li>
            </ul>
          </section>

          <section>
            <h2>Children's Privacy</h2>
            <p>
              AXLY is not intended for users under 13 years of age. We do not knowingly
              collect data from children.
            </p>
          </section>

          <section>
            <h2>Data Retention</h2>
            <ul>
              <li>Account data is retained while your account is active</li>
              <li>Vehicle diagnostic data is retained until you delete it or close your account</li>
              <li>Deleted data is permanently removed within 30 days</li>
            </ul>
          </section>

          <section>
            <h2>International Users</h2>
            <p>
              Your data may be transferred to and processed in the United States, where
              our servers are located.
            </p>
          </section>

          <section>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. We will notify you of
              significant changes via email or in-app notification.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>If you have questions about this Privacy Policy or your data:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:support@axly.pro">support@axly.pro</a></li>
              <li><strong>Website:</strong> <a href="https://axly.pro">https://axly.pro</a></li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}

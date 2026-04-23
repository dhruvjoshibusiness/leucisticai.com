import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="auth-page">
      <div className="auth-shell">
        <div className="auth-card">
          <div className="auth-top">
            <span className="eyebrow">Get in touch</span>
            <h1 className="auth-title">
              Contact <span className="grad">Leucistic</span>
            </h1>
            <p className="auth-copy">
              Reach out for pilot questions, platform demos, or enterprise rollout planning.
            </p>
          </div>

          <form className="auth-form">
            <label className="auth-field">
              <span>Name</span>
              <input type="text" placeholder="Your name" />
            </label>

            <label className="auth-field">
              <span>Email</span>
              <input type="email" placeholder="you@example.com" />
            </label>

            <label className="auth-field">
              <span>Message</span>
              <textarea
                placeholder="Tell us what you need..."
                rows={5}
                className="contact-textarea"
              />
            </label>

            <button type="submit" className="hero-primary auth-btn">
              Send message
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Need login? <Link href="/login">Go to login</Link>
            </p>
            <Link href="/" className="auth-back">
              Back to home
            </Link>
          </div>
        </div>

        <div className="auth-side glass-card">
          <h3>What we help with</h3>
          <ul className="auth-points">
            <li>Product walkthroughs and demos.</li>
            <li>Pilot planning for manufacturing teams.</li>
            <li>Future authentication and account support.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
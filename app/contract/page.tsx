import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="page-wrap">
      <section className="premium-card premium-card--contact">
        <div className="contact-layout">
          <aside className="contact-intro">
            <span className="eyebrow">Get in touch</span>
            <h1 className="page-title">
              Contact <span className="grad">Leucistic</span>
            </h1>
            <p className="page-subtitle">
              Reach out for pilot questions, platform demos, enterprise rollout
              planning, or general product support.
            </p>

            <div className="contact-highlights">
              <div className="mini-feature">
                <strong>Product demos</strong>
                <p>See how the platform fits your workflow.</p>
              </div>
              <div className="mini-feature">
                <strong>Enterprise support</strong>
                <p>Talk about rollout, onboarding, and access.</p>
              </div>
              <div className="mini-feature">
                <strong>Fast response</strong>
                <p>We’ll get back as soon as possible.</p>
              </div>
            </div>

            <div className="page-actions">
              <Link href="/pricing" className="secondary-link">
                View pricing
              </Link>
              <Link href="/" className="secondary-link">
                Back to home
              </Link>
            </div>
          </aside>

          <div className="contact-form-panel">
            <div className="content-card contact-form-card">
              <h2>Send a message</h2>

              <form className="contact-form">
                <label className="field">
                  <span>Name</span>
                  <input type="text" placeholder="Your name" />
                </label>

                <label className="field">
                  <span>Email</span>
                  <input type="email" placeholder="you@example.com" />
                </label>

                <label className="field">
                  <span>Message</span>
                  <textarea
                    placeholder="Tell us what you need..."
                    rows={8}
                  />
                </label>

                <button type="submit" className="hero-primary auth-btn button-auto">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
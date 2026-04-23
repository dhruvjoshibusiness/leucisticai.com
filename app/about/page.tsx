import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="page-wrap">
      <section className="premium-card premium-card--single">
        <div className="section-top">
          <span className="eyebrow">About us</span>
          <h1 className="page-title">
            Built for <span className="grad">focused growth</span>
          </h1>
          <p className="page-subtitle">
            We help teams present a polished public brand today and prepare for
            controlled private access later, without making the experience feel
            heavy or complicated.
          </p>
        </div>

        <div className="content-grid">
          <article className="content-card">
            <h2>What we do</h2>
            <p>
              We create a clean digital structure that keeps public pages
              simple, premium, and easy to navigate while setting up the app
              for member-only access in the future.
            </p>
          </article>

          <article className="content-card">
            <h2>Why it exists</h2>
            <p>
              The goal is to support a polished front-end now and a private
              dashboard later, so the site can grow from a marketing presence
              into a controlled product experience.
            </p>
          </article>
        </div>

        <div className="feature-grid">
          <div className="mini-feature">
            <strong>Public first</strong>
            <p>Keep the brand open and welcoming.</p>
          </div>
          <div className="mini-feature">
            <strong>Private later</strong>
            <p>Restrict dashboard access to approved users.</p>
          </div>
          <div className="mini-feature">
            <strong>Simple flow</strong>
            <p>Guide users from pages to signup to access.</p>
          </div>
        </div>

        <div className="page-actions page-actions--left">
          <Link href="/pricing" className="hero-primary auth-btn button-auto">
            View pricing
          </Link>
          <Link href="/" className="secondary-link">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
import Link from 'next/link';

export default function SignupPage() {
  return (
    <main className="auth-page">
      <div className="auth-shell">
        <div className="auth-card">
          <div className="auth-top">
            <span className="eyebrow">Create your workspace</span>
            <h1 className="auth-title">
              Join <span className="grad">Leucistic</span>
            </h1>
            <p className="auth-copy">
              Create your account to access the premium dashboard, reports, and future client tools.
            </p>
          </div>

          <form className="auth-form">
            <label className="auth-field">
              <span>Full name</span>
              <input type="text" placeholder="Your name" />
            </label>

            <label className="auth-field">
              <span>Email</span>
              <input type="email" placeholder="you@example.com" />
            </label>

            <label className="auth-field">
              <span>Password</span>
              <input type="password" placeholder="Create a password" />
            </label>

            <label className="auth-field">
              <span>Confirm password</span>
              <input type="password" placeholder="Confirm password" />
            </label>

            <label className="auth-check">
              <input type="checkbox" />
              <span>I agree to the terms and privacy policy</span>
            </label>

            <button type="submit" className="hero-primary auth-btn">
              Create account
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Already have an account? <Link href="/login">Sign in</Link>
            </p>
            <Link href="/" className="auth-back">
              Back to home
            </Link>
          </div>
        </div>

        <div className="auth-side glass-card">
          <h3>What you get</h3>
          <ul className="auth-points">
            <li>Same premium look and typography.</li>
            <li>Responsive layout for desktop, tablet, and mobile.</li>
            <li>Ready for authentication later.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
import Link from 'next/link';

export default function LoginPage() {
  const resetLinkSent = false;

  return (
    <main className="auth-page">
      <div className="auth-shell">
        <div className="auth-card">
          <div className="auth-top">
            <span className="eyebrow">Secure access</span>
            <h1 className="auth-title">
              Sign in to <span className="grad">Leucistic</span>
            </h1>
            <p className="auth-copy">
              Enter your credentials to continue into your premium dashboard experience.
            </p>

            {resetLinkSent ? (
              <div className="toast-success">
                Reset link has been sent to your registered email. Please check your inbox.
              </div>
            ) : null}
          </div>

          <form className="auth-form">
            <label className="auth-field">
              <span>Email</span>
              <input type="email" placeholder="you@example.com" />
            </label>

            <label className="auth-field">
              <span>Password</span>
              <input type="password" placeholder="••••••••" />
            </label>

            <div className="auth-row">
              <label className="auth-check">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <Link href="/forgot-password" className="auth-link">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="hero-primary auth-btn">
              Sign in
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Don’t have an account? <Link href="/signup">Create one</Link>
            </p>
            <Link href="/" className="auth-back">
              Back to home
            </Link>
          </div>
        </div>

        <div className="auth-side glass-card">
          <h3>Why Leucistic</h3>
          <ul className="auth-points">
            <li>Premium dark interface.</li>
            <li>Same fonts and branding as the homepage.</li>
            <li>Built for fast future authentication integration.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
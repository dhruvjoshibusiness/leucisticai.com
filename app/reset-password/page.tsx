import Link from 'next/link';

export default function ResetPasswordPage() {
  return (
    <main className="auth-page">
      <div className="auth-shell">
        <div className="auth-card">
          <div className="auth-top">
            <span className="eyebrow">Set a new password</span>
            <h1 className="auth-title">
              Reset <span className="grad">password</span>
            </h1>
            <p className="auth-copy">
              Enter a new password below to secure your account again.
            </p>
          </div>

          <form className="auth-form">
            <label className="auth-field">
              <span>New password</span>
              <input type="password" placeholder="Create a new password" />
            </label>

            <label className="auth-field">
              <span>Confirm new password</span>
              <input type="password" placeholder="Confirm password" />
            </label>

            <button type="submit" className="hero-primary auth-btn">
              Update password
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Remembered it? <Link href="/login">Back to login</Link>
            </p>
            <Link href="/" className="auth-back">
              Back to home
            </Link>
          </div>
        </div>

        <div className="auth-side glass-card">
          <h3>Security note</h3>
          <ul className="auth-points">
            <li>Use a strong password you have not used before.</li>
            <li>Your reset link should be used only once.</li>
            <li>After update, return to login and sign in again.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
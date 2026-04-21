"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
  };

  return (
    <main className="auth-page">
      <div className="auth-shell">
        <div className="auth-card">
          <div className="auth-top">
            <span className="eyebrow">Account recovery</span>
            <h1 className="auth-title">
              Reset your <span className="grad">password</span>
            </h1>
            <p className="auth-copy">
              Enter your registered email address and we will send a secure reset link to your inbox.
            </p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label className="auth-field">
              <span>Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <button type="submit" className="hero-primary auth-btn">
              Send reset link
            </button>

            {sent ? (
              <div className="toast-success">
                Reset link has been sent to your registered email. Please check your inbox.
              </div>
            ) : null}
          </form>

          <div className="auth-footer">
            <p>
              Remembered your password? <Link href="/login">Back to login</Link>
            </p>
            <Link href="/" className="auth-back">
              Back to home
            </Link>
          </div>
        </div>

        <div className="auth-side glass-card">
          <h3>What happens next</h3>
          <ul className="auth-points">
            <li>We send a reset link to your registered email.</li>
            <li>The link will take you to a secure new password page.</li>
            <li>You can then sign in again with the new password.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
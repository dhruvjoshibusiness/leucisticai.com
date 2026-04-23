import Link from "next/link";

export default function AccessPendingPage() {
  return (
    <main className="page-wrap">
      <section className="premium-card premium-card--single">
        <span className="eyebrow">Access pending</span>
        <h1 className="page-title">Your account is not approved yet</h1>
        <p className="page-subtitle">
          You can sign in, but dashboard access is only available for paid and approved users.
        </p>

        <div className="page-actions">
          <Link href="/login" className="hero-primary auth-btn button-auto">
            Go to login
          </Link>
          <Link href="/" className="secondary-link">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
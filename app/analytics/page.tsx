"use client";

import Link from "next/link";

const stats = [
  { label: "Active users", value: "1,284", change: "+12.4%" },
  { label: "Avg session", value: "8m 42s", change: "+4.1%" },
  { label: "Conversion rate", value: "18.7%", change: "+2.3%" },
  { label: "Drop-off rate", value: "7.9%", change: "-1.8%" },
];

const trends = [
  { month: "Mon", value: 42 },
  { month: "Tue", value: 58 },
  { month: "Wed", value: 49 },
  { month: "Thu", value: 71 },
  { month: "Fri", value: 66 },
  { month: "Sat", value: 74 },
  { month: "Sun", value: 81 },
];

const insights = [
  "User activity is strongest on the weekend.",
  "Conversion improved after the last release.",
  "Drop-off is decreasing across the last 7 days.",
];

export default function AnalyticsPage() {
  const isPaidUser = true;
  const isApproved = true;

  if (!isPaidUser || !isApproved) {
    return (
      <main className="page-wrap">
        <section className="premium-card premium-card--single">
          <span className="eyebrow">Access pending</span>
          <h1 className="page-title">Analytics is private</h1>
          <p className="page-subtitle">
            This section is only available to approved paid users.
          </p>
          <div className="page-actions">
            <Link href="/login" className="hero-primary auth-btn button-auto">
              Go to login
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="dashboard-page">
      <section className="dashboard-shell">
        <div className="dashboard-top">
          <div>
            <span className="eyebrow">Private section</span>
            <h1 className="dashboard-title">Analytics</h1>
            <p className="dashboard-subtitle">
              Performance insights for paid users, built to later connect with backend data.
            </p>
          </div>

          <div className="dashboard-actions">
            <Link href="/dashboard" className="secondary-link">
              Dashboard
            </Link>
            <Link href="/client-reports" className="secondary-link">
              Reports
            </Link>
          </div>
        </div>

        <div className="dashboard-grid">
          {stats.map((item) => (
            <article key={item.label} className="dashboard-card">
              <p className="dashboard-card-label">{item.label}</p>
              <h2 className="dashboard-card-value">{item.value}</h2>
              <p className="dashboard-subnote">{item.change} from last week</p>
            </article>
          ))}
        </div>

        <div className="dashboard-table-card">
          <div className="dashboard-table-head">
            <h2>7-day trend</h2>
            <p>Activity index</p>
          </div>

          <div className="analytics-bars">
            {trends.map((item) => (
              <div key={item.month} className="analytics-bar-item">
                <div className="analytics-bar-label">
                  <span>{item.month}</span>
                  <span>{item.value}</span>
                </div>
                <div className="analytics-bar-track">
                  <div
                    className="analytics-bar-fill"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-table-card">
          <div className="dashboard-table-head">
            <h2>AI insights preview</h2>
            <p>What the copilot can later suggest</p>
          </div>

          <ul className="insight-list">
            {insights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
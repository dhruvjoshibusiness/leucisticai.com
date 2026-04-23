import Link from "next/link";
import fs from "fs";
import path from "path";
import { redirect } from "next/navigation";

type Row = {
  metric: string;
  value: string | number;
  change_pct: number;
  status: string;
};

function getDummyData(): Row[] {
  const filePath = path.join(process.cwd(), "output", "dashboard_dummy_data.csv");
  const raw = fs.readFileSync(filePath, "utf8");
  const lines = raw.trim().split("\n");
  const [, ...rows] = lines;

  return rows.map((line) => {
    const [metric, value, change_pct, status] = line.split(",");
    return {
      metric,
      value: Number.isNaN(Number(value)) ? value : Number(value),
      change_pct: Number(change_pct),
      status,
    };
  });
}

export default function DashboardPage() {
  const isPaidUser = true;
  const isApproved = true;

  if (!isPaidUser || !isApproved) {
    redirect("/access-pending");
  }

  const data = getDummyData();

  return (
    <main className="dashboard-page">
      <section className="dashboard-shell">
        <div className="dashboard-top">
          <div>
            <span className="eyebrow">Secure dashboard</span>
            <h1 className="dashboard-title">Overview</h1>
            <p className="dashboard-subtitle">
              Live API data will connect here later. For now, this dashboard uses dummy data so the layout and access flow can be completed.
            </p>
          </div>

          <div className="dashboard-actions">
            <Link href="/client-reports" className="secondary-link">
              Client reports
            </Link>
            <Link href="/analytics" className="secondary-link">
              Analytics
            </Link>
          </div>
        </div>

        <div className="dashboard-grid">
          {data.map((item) => (
            <article key={item.metric} className="dashboard-card">
              <p className="dashboard-card-label">{item.metric}</p>
              <h2 className="dashboard-card-value">{item.value}</h2>
              <p className={`dashboard-change ${item.change_pct >= 0 ? "up" : "down"}`}>
                {item.change_pct >= 0 ? "+" : ""}
                {item.change_pct}% from last period
              </p>
              <span className="dashboard-status">{item.status}</span>
            </article>
          ))}
        </div>

        <div className="dashboard-table-card">
          <div className="dashboard-table-head">
            <h2>Dashboard data</h2>
            <p>Dummy CSV preview</p>
          </div>

          <div className="table-wrap">
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Value</th>
                  <th>Change</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.metric}>
                    <td>{row.metric}</td>
                    <td>{row.value}</td>
                    <td>{row.change_pct}%</td>
                    <td>{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
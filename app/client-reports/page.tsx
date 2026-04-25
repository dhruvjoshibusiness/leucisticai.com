"use client";

import Link from "next/link";
import { useState } from "react";

const weeklyReports = [
  {
    machine: "CNC-01",
    week: "Apr 15 - Apr 21",
    uptime: "98.4%",
    output: 1260,
    issues: 1,
    status: "Healthy",
  },
  {
    machine: "Laser-02",
    week: "Apr 15 - Apr 21",
    uptime: "96.1%",
    output: 980,
    issues: 2,
    status: "Monitor",
  },
  {
    machine: "Press-07",
    week: "Apr 15 - Apr 21",
    uptime: "99.2%",
    output: 1540,
    issues: 0,
    status: "Healthy",
  },
  {
    machine: "Cutter-03",
    week: "Apr 15 - Apr 21",
    uptime: "94.8%",
    output: 740,
    issues: 3,
    status: "Attention",
  },
];

const summaryCards = [
  { title: "Machines tracked", value: "4" },
  { title: "Avg uptime", value: "97.1%" },
  { title: "Total output", value: "4,520" },
  { title: "Open issues", value: "6" },
];

function buildCsv(rows: typeof weeklyReports) {
  const header = ["machine", "week", "uptime", "output", "issues", "status"];
  return [
    header.join(","),
    ...rows.map((row) =>
      [row.machine, row.week, row.uptime, row.output, row.issues, row.status]
        .map((value) => `"${String(value).replace(/"/g, '""')}"`)
        .join(",")
    ),
  ].join("\n");
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3v10m0 0 4-4m-4 4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 3v5h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PdfIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 3v5h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 15h6M9 18h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function ClientReportsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isPaidUser = true;
  const isApproved = true;

  if (!isPaidUser || !isApproved) {
    return (
      <main className="page-wrap">
        <section className="premium-card premium-card--single">
          <span className="eyebrow">Access pending</span>
          <h1 className="page-title">Client reports are private</h1>
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

  const downloadFile = (format: "csv" | "xlsx" | "pdf") => {
    setMenuOpen(false);

    if (format === "csv") {
      const csv = buildCsv(weeklyReports);
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "weekly-machine-report.csv";
      a.click();
      URL.revokeObjectURL(url);
      return;
    }

    if (format === "xlsx") {
      const csv = buildCsv(weeklyReports);
      const blob = new Blob([csv], { type: "application/vnd.ms-excel;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "weekly-machine-report.xls";
      a.click();
      URL.revokeObjectURL(url);
      return;
    }

    window.print();
  };

  return (
    <main className="dashboard-page">
      <section className="dashboard-shell">
        <div className="dashboard-top">
          <div>
            <span className="eyebrow">Private section</span>
            <h1 className="dashboard-title">Client Reports</h1>
            <p className="dashboard-subtitle">
              Weekly machine performance report with quick exports for paid users.
            </p>
          </div>

          <div className="dashboard-actions dashboard-actions--grouped">
            <Link href="/dashboard" className="secondary-link">
              Dashboard
            </Link>

            <Link href="/analytics" className="secondary-link">
              Analytics
            </Link>

            <div className="download-wrap">
              <button
                type="button"
                className="download-button"
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                <DownloadIcon />
                <span>Download</span>
                <span className="download-caret">▾</span>
              </button>

              {menuOpen && (
                <div className="download-menu">
                  <button type="button" onClick={() => downloadFile("csv")}>
                    <FileIcon />
                    <div>
                      <strong>CSV</strong>
                      <span>Spreadsheet export</span>
                    </div>
                  </button>

                  <button type="button" onClick={() => downloadFile("xlsx")}>
                    <FileIcon />
                    <div>
                      <strong>Excel</strong>
                      <span>.xls formatted file</span>
                    </div>
                  </button>

                  <button type="button" onClick={() => downloadFile("pdf")}>
                    <PdfIcon />
                    <div>
                      <strong>PDF</strong>
                      <span>Print-ready report</span>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="dashboard-grid">
          {summaryCards.map((item) => (
            <article key={item.title} className="dashboard-card">
              <p className="dashboard-card-label">{item.title}</p>
              <h2 className="dashboard-card-value">{item.value}</h2>
            </article>
          ))}
        </div>

        <div className="dashboard-table-card">
          <div className="dashboard-table-head">
            <h2>Weekly machine report</h2>
            <p>Apr 15 - Apr 21</p>
          </div>

          <div className="table-wrap">
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th>Machine</th>
                  <th>Week</th>
                  <th>Uptime</th>
                  <th>Output</th>
                  <th>Issues</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {weeklyReports.map((row) => (
                  <tr key={row.machine}>
                    <td>{row.machine}</td>
                    <td>{row.week}</td>
                    <td>{row.uptime}</td>
                    <td>{row.output}</td>
                    <td>{row.issues}</td>
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
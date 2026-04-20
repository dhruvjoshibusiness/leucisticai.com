import Image from 'next/image';

const proof = [
  ['Executive clarity', 'one operating surface for risk, health, and action windows'],
  ['Secure access', 'sign-in and log-in entry points for client workspaces'],
  ['Premium intent', 'crafted for manufacturers who expect trust on first sight'],
];

const metrics = [
  ['Visual language', 'premium dark-only'],
  ['Access model', 'header sign-in / log-in only'],
  ['Brand identity', 'tiger-driven animated mark'],
  ['Palette focus', 'Tyrian Purple · Ultramarine · YInMn · Vantablack'],
];

const steps = [
  ['1', 'Observe', 'Machine, historian, and maintenance signals arrive in one governed flow.'],
  ['2', 'Interpret', 'Models rank condition changes, drift, and likely intervention windows.'],
  ['3', 'Direct', 'Teams act through dashboards, alerts, and premium client experiences.'],
];

const plans = [
  {
    name: 'Focused pilot',
    price: '$3k',
    copy: 'For proving value on one critical line or asset class.',
    items: ['Single workspace', 'Health scoring and alerts', 'Weekly operating review'],
    cta: 'Discuss pilot',
    featured: false,
  },
  {
    name: 'Multi-asset pilot',
    price: '$7.5k',
    copy: 'Best balance of proof, visibility, and executive traction.',
    items: ['Up to 5 monitored assets', 'Role-aware client visibility', 'Executive summary layer'],
    cta: 'Start preferred pilot',
    featured: true,
  },
  {
    name: 'Enterprise program',
    price: 'Custom',
    copy: 'For multi-site manufacturers standardizing reliability intelligence.',
    items: ['Multi-plant rollout', 'Access governance and audit readiness', 'Dedicated implementation path'],
    cta: 'Book architecture call',
    featured: false,
  },
];

export default function HomePage() {
  return (
    <>
      <header className="header">
        <div className="container nav">
          <a className="brand" href="#top" aria-label="Leucistic home">
            <span className="logo-wrap" aria-hidden="true">
              <Image src="/white-tiger.jpg" alt="" width={96} height={96} />
            </span>
            <span className="brand-text">
              <strong>Leucistic</strong>
              <span>Command what others miss</span>
            </span>
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a href="#platform">Platform</a>
            <a href="#intelligence">Intelligence</a>
            <a href="#pricing">Pilot pricing</a>
          </nav>
          <div className="nav-actions">
            <a className="btn btn-login" href="#">Log in</a>
            <a className="btn btn-signin" href="#">Sign in</a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero container" id="top">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Premium predictive maintenance</span>
              <h1>Industrial intelligence for those who <span className="grad">see before others do</span>.</h1>
              <div className="tagline">Leucistic — <em>Command what others miss.</em></div>
              <p>
                Built for manufacturers who value elegance as much as precision, Leucistic turns plant signals into high-confidence decisions with a premium operating experience shaped by clarity, restraint, and authority.
              </p>
              <div className="hero-actions">
                <a className="hero-primary" href="#pricing">Request pilot access</a>
                <a className="hero-secondary" href="#platform">View platform preview</a>
              </div>
              <div className="microproof">
                {proof.map(([title, copy]) => (
                  <div className="proof" key={title}><strong>{title}</strong><span>{copy}</span></div>
                ))}
              </div>
            </div>

            <div className="tiger-stage" aria-label="Leucistic brand visual">
              <div className="tiger-shell">
                <Image className="tiger-img" src="/white-tiger.jpg" alt="White tiger visual used as the Leucistic premium brand mark" width={1400} height={900} />
                <div className="scanline" />
                <div className="tiger-overlay">
                  <section className="glass-card">
                    <h3>Operational signal</h3>
                    <div className="signal-row">
                      <div className="signal"><strong>92%</strong><span>fleet health</span></div>
                      <div className="signal"><strong>03</strong><span>critical alerts</span></div>
                      <div className="signal"><strong>17 days</strong><span>predicted failure window</span></div>
                    </div>
                  </section>
                  <aside className="glass-card">
                    <h3>Priority queue</h3>
                    <div className="mini-list">
                      <div className="mini-item"><strong>Press 04 vibration drift</strong><span>Maintenance action recommended</span></div>
                      <div className="mini-item"><strong>Compressor 02 thermal rise</strong><span>Monitor next operating cycle</span></div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section container" id="platform">
          <div className="section-head">
            <span className="eyebrow">Dark. Quiet. Premium.</span>
            <h2>A matte-black operating presence with rare moments of shine.</h2>
            <p>
              This revision removes light mode entirely and leans into a restrained premium material language: Vantablack and matte-black surfaces, subtle specular highlights, and controlled accents from Tyrian Purple, Ultramarine Blue, and YInMn Blue.
            </p>
          </div>
          <div className="platform-grid">
            <article className="card">
              <div className="card-inner">
                <h3>What Leucistic communicates immediately</h3>
                <p>
                  Not a generic AI site, but a confident industrial brand for serious operators, plant leadership, and manufacturers who buy on trust, signal quality, and execution strength.
                </p>
                <div className="metric-list">
                  {metrics.map(([k, v]) => (
                    <div className="metric-item" key={k}><span>{k}</span><strong>{v}</strong></div>
                  ))}
                </div>
              </div>
            </article>
            <aside className="card" id="intelligence">
              <div className="card-inner">
                <h3>How the platform reads</h3>
                <div className="steps">
                  {steps.map(([n, t, c]) => (
                    <div className="step" key={n}><div className="step-num">{n}</div><div><strong>{t}</strong><p>{c}</p></div></div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section container" id="pricing">
          <div className="section-head">
            <span className="eyebrow">Pilot structure</span>
            <h2>Commercial clarity, without losing elegance.</h2>
            <p>
              The homepage remains commercially useful with a pilot path, while sign-in and log-in stay in the header for future Google-supported authentication flows, separate pages, or modal entry points.
            </p>
          </div>
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article className={`price-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>
                <div className="inner">
                  {plan.featured ? <div className="badge">Preferred</div> : null}
                  <h3>{plan.name}</h3>
                  <p>{plan.copy}</p>
                  <div className="price">{plan.price}<span style={{fontFamily:'var(--font-body)', fontSize:'var(--text-sm)'}}> / month</span></div>
                  <ul>
                    {plan.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <a className={plan.featured ? 'btn btn-signin' : 'btn btn-login'} href="#">{plan.cta}</a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-row">
          <div>Leucistic — Command what others miss.</div>
          <div>Dark-only premium homepage concept</div>
        </div>
      </footer>
    </>
  );
}

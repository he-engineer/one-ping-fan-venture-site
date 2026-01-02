export default function HomePage() {
  return (
    <main className="page">
      <section className="section hero">
        <div className="section__content">
          <p className="eyebrow">One Ping Fan Venture Studio</p>
          <h1>We launch durable companies with domain-driven founders.</h1>
          <p className="lead">
            We pair conviction in applied AI with a disciplined venture studio model—validating real
            customer pain, co-building the first product, and spinning out teams ready to scale.
          </p>
          <div className="hero__highlights">
            <article className="pill-card">
              <p className="pill-card__label">What we do</p>
              <p className="pill-card__body">From concept to company with founders who live the problem.</p>
            </article>
            <article className="pill-card">
              <p className="pill-card__label">How we work</p>
              <p className="pill-card__body">Hands-on validation, product sprints, and operational deployment.</p>
            </article>
            <article className="pill-card">
              <p className="pill-card__label">Where we focus</p>
              <p className="pill-card__body">Industrial workflows, frontline teams, and systems that keep cities running.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__content">
          <h2>Studio Overview</h2>
          <article className="card">
            <p>
              We are a venture studio that builds with founders, not for them. Our team brings product,
              engineering, and go-to-market discipline to transform domain expertise into venture-scale
              companies.
            </p>
            <ul className="list">
              <li>Founder-first partnership with shared conviction and clear milestones.</li>
              <li>Integrated product, design, and deployment support from day one.</li>
              <li>Capital-efficient builds that prioritize customer truth over hype.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section__content">
          <h2>Validation → Spin-Out</h2>
          <div className="cards">
            <article className="card">
              <h3>Immersion & insight</h3>
              <p>
                We embed with operators, shadow workflows, and map the economic levers that matter. The
                result is a clear view of the job-to-be-done and the shortest path to measurable impact.
              </p>
            </article>
            <article className="card">
              <h3>Product proof</h3>
              <p>
                We co-build rapid pilots, measure adoption, and tune the experience with real users. Each
                sprint ends with evidence on retention, willingness to pay, and operational lift.
              </p>
            </article>
            <article className="card">
              <h3>Spin-out readiness</h3>
              <p>
                With traction in hand, we form the company, recruit the early team, and transition the
                product into a stand-alone venture with the right capital stack and advisory bench.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__content">
          <h2>Operating & Deployment</h2>
          <div className="cards cards--two">
            <article className="card">
              <h3>Operational lift</h3>
              <p>
                We design for frontline adoption—clear onboarding, resilient automations, and safeguards
                that keep crews productive. Every deployment is measured against uptime, speed, and safety.
              </p>
            </article>
            <article className="card">
              <h3>Go-to-market rigor</h3>
              <p>
                From ICP definition to playbooked pilots, we build predictable motion across sales,
                customer success, and procurement. Transparency on unit economics keeps the path to scale
                honest.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__content">
          <h2>First Product: ZenShift</h2>
          <article className="card card--accent">
            <h3>ZenShift unlocks resilient field operations</h3>
            <p>
              ZenShift synchronizes scheduling, dispatch, and live issue management for distributed teams.
              Built with supervisors and dispatchers, it brings automation and calm to high-stakes shifts.
            </p>
            <div className="pill-grid">
              <div className="pill">Real-time shift orchestration</div>
              <div className="pill">Automated alerts & incident workflows</div>
              <div className="pill">Deployment-ready across web & mobile</div>
              <div className="pill">Data trails for compliance & learning</div>
            </div>
          </article>
        </div>
      </section>

      <section className="section contact">
        <div className="section__content">
          <h2>Contact</h2>
          <article className="card contact__card">
            <p>
              Building in industrial, civic, or critical infrastructure domains? We would love to hear how
              we can accelerate your vision and bring a product to market together.
            </p>
            <a className="cta-button" href="mailto:hello@onepingfan.com">
              Start a conversation
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}

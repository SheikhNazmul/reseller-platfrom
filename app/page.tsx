const features = [
  ["01", "Reseller-first marketplace", "A clean foundation for product discovery, reseller workflows, orders and customer management."],
  ["02", "Modern full-stack architecture", "Built around Next.js and TypeScript with Supabase-ready data and authentication integration."],
  ["03", "Responsive experience", "Designed for desktop and mobile users with accessible layouts and a simple navigation system."],
];

const stack = ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "REST APIs", "Tailwind CSS", "Git/GitHub"];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="container nav-inner">
          <a className="brand" href="#home">Reseller<span>Hub</span></a>
          <div className="nav-links">
            <a href="#features">Features</a><a href="#architecture">Architecture</a><a href="#stack">Tech Stack</a>
          </div>
          <a className="btn primary" href="https://github.com/SheikhNazmul/reseller-platfrom">View GitHub</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="container">
          <span className="badge">FULL-STACK E-COMMERCE PROJECT</span>
          <h1>Build. Sell. Scale.<br />One reseller platform.</h1>
          <p>A portfolio-grade multi-vendor reseller platform concept focused on clean UX, scalable architecture and practical commerce workflows.</p>
          <div className="actions">
            <a className="btn primary" href="#features">Explore project</a>
            <a className="btn secondary" href="https://github.com/SheikhNazmul/reseller-platfrom">Source code →</a>
          </div>
          <div className="stats">
            <div className="stat"><strong>Next.js</strong><span>Application framework</span></div>
            <div className="stat"><strong>TypeScript</strong><span>Type-safe development</span></div>
            <div className="stat"><strong>Supabase</strong><span>Backend-ready data layer</span></div>
            <div className="stat"><strong>Responsive</strong><span>Mobile-first experience</span></div>
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="container">
          <h2>What this project demonstrates</h2>
          <p className="section-lead">A stronger portfolio presentation for demonstrating full-stack thinking rather than a default starter template.</p>
          <div className="grid">
            {features.map(([number, title, text]) => <article className="card" key={number}><div className="icon">{number}</div><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section" id="architecture">
        <div className="container">
          <h2>Architecture direction</h2>
          <p className="section-lead">The frontend is structured as a Next.js application and can be connected to Supabase for authentication, PostgreSQL data, storage and server-side workflows as features are implemented.</p>
          <div className="grid">
            <article className="card"><div className="icon">UI</div><h3>Storefront</h3><p>Product browsing, search, categories, reseller-focused product information and conversion-friendly pages.</p></article>
            <article className="card"><div className="icon">DB</div><h3>Data layer</h3><p>Supabase/PostgreSQL can support users, products, sellers, orders, inventory and reseller records.</p></article>
            <article className="card"><div className="icon">API</div><h3>Service layer</h3><p>REST endpoints can connect the frontend with authentication, orders, payments and third-party services.</p></article>
          </div>
        </div>
      </section>

      <section className="section" id="stack">
        <div className="container">
          <h2>Technology stack</h2>
          <p className="section-lead">Selected technologies for a modern, maintainable full-stack web application.</p>
          <div className="stack">{stack.map(item => <span className="tag" key={item}>{item}</span>)}</div>
        </div>
      </section>

      <footer className="footer"><div className="container">Built by Sheikh Nazmul Islam · ResellerHub portfolio project</div></footer>
    </main>
  );
}

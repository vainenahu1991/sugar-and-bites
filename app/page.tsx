import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="container">
        <div className="sectionTitle">
          <div>
            <div className="kicker">Modern Luxury Catering</div>
            <h1>
              Sugar <span style={{ fontStyle: "italic", color: "var(--gold)" }}>&</span> Bites
            </h1>
            <p style={{ marginTop: 10, maxWidth: 760 }}>
              Premium dessert creations and curated catering platters — crafted with care and presented with elegance.
            </p>
          </div>
        </div>

        <img className="imgCover" src="/images/cakesicles.png" alt="Sugar & Bites" />

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
          <Link className="btn btnGold" href="/menu">View Menu</Link>
          <Link className="btn btnGhost" href="/contact">Enquire</Link>
        </div>
      </section>

      <section className="container section">
        <div className="sectionTitle">
          <div>
            <div className="kicker">Explore</div>
            <h2>Choose your experience</h2>
          </div>
        </div>

        <div className="grid grid3">
          <div className="card" style={{ padding: 18 }}>
            <h3> Sugar </h3>
            <p style={{ marginTop: 8, marginBottom: 14 }}>
              Cakesicles, dipped treats, themed desserts and gift boxes — beautifully finished.
            </p>
            <Link className="btn btnGhost" href="/sugar">Explore Sugar →</Link>
          </div>

          <div className="card" style={{ padding: 18 }}>
            <h3> Bites </h3>
            <p style={{ marginTop: 8, marginBottom: 14 }}>
              Grazing boards, charcuterie and savoury platters — curated, generous, refined.
            </p>
            <Link className="btn btnGhost" href="/bites">Explore Bites →</Link>
          </div>

          <div className="card" style={{ padding: 18 }}>
            <h3> Catering </h3>
            <p style={{ marginTop: 8, marginBottom: 14 }}>
              From intimate celebrations to corporate events — tailored to match your vision.
            </p>
            <Link className="btn btnGhost" href="/contact">Request a quote →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
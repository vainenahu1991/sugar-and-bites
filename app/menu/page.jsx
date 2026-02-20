import Link from "next/link";

export default function MenuPage() {
  return (
    <main>
      <section className="container">
        <div className="sectionTitle">
          <div>
            <div className="kicker">Menu</div>
            <h2>Curated selection</h2>
            <p style={{ marginTop: 10, maxWidth: 760 }}>
              Browse sweet and savoury options — refined, premium and made to impress.
            </p>
          </div>
        </div>

        <div className="panel" style={{ padding: "clamp(16px,3vw,24px)" }}>
          <div className="grid grid2">
            <div className="card" style={{ padding: 18 }}>
              <h3>Sugar</h3>
              <p style={{ marginTop: 8, marginBottom: 14 }}>
                Custom desserts, treat boxes, cakesicles and dipped favourites.
              </p>
              <Link className="btn btnGold" href="/sugar">View Sugar</Link>
            </div>

            <div className="card" style={{ padding: 18 }}>
              <h3>Bites</h3>
              <p style={{ marginTop: 8, marginBottom: 14 }}>
                Grazing boards, charcuterie and savoury platters for elevated gatherings.
              </p>
              <Link className="btn btnGold" href="/bites">View Bites</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
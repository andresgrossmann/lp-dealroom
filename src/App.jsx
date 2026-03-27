import { useState, useEffect, useRef } from "react";

function useIsMobile(breakpoint = 768) {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);
  useEffect(() => { const h = () => setW(window.innerWidth); window.addEventListener("resize", h); return () => window.removeEventListener("resize", h); }, []);
  return w < breakpoint;
}

const NAVY = "#1B3A5C";
const GOLD = "#C8A951";
const DARK = "#1a1a1a";
const LIGHT = "#F8F7F4";
const BLUE = "#2E75B6";

const DEAL = {
  price: 21500000,
  keys: 54,
  ppk: 398148,
  y1: { rev: 5353962, gop: 2855090, noi: 1912988, occ: 0.76, adr: 295, revpar: 224, gopM: 53.3, noiM: 35.7 },
  y2: { rev: 5797442, gop: 3060531, noi: 2067612, occ: 0.80, adr: 307, revpar: 245, gopM: 52.8, noiM: 35.7 },
  y3: { rev: 6051049, gop: 3213804, noi: 2182417, occ: 0.802, adr: 319, revpar: 256, gopM: 53.1, noiM: 36.1 },
  y5: { rev: 6592332, gop: 3541627, noi: 2428635, occ: 0.806, adr: 345, revpar: 278, gopM: 53.7, noiM: 36.8 },
};

const fmt = (n) => "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });
const pct = (n) => (n * 100).toFixed(1) + "%";

// ╔══════════════════════════════════════════════════════════════╗
// ║  GALLERY PHOTOS                                              ║
// ╚══════════════════════════════════════════════════════════════╝
const GALLERY_IMAGES = [
  { label: "Exterior — Collins Avenue Facade", src: "/images/exterior.jpg" },
  { label: "Lobby Lounge — Art Deco Interior", src: "/images/lobby.jpg" },
  { label: "Lobby Bar & Reception", src: "/images/lobby-bar.jpg" },
  { label: "Guest Room — Water View", src: "/images/guest-room.jpg" },
  { label: "Elevator — Renovated Interior", src: "/images/elevator.jpg" },
  { label: "Le Particulier", src: "https://drive.google.com/uc?export=view&id=1-T535fbyh_k0MMGW7g_ahg0qtnpyHHZ6" },
  { label: "Le Particulier", src: "https://drive.google.com/uc?export=view&id=13cohIavOfsivbkoLsPwbGtnS4CI1XkAp" },
  { label: "Le Particulier", src: "https://drive.google.com/uc?export=view&id=16Zk9AiYhO814tx_BK3dbkkl9tgRAzqsR" },
  { label: "Le Particulier", src: "https://drive.google.com/uc?export=view&id=16b0nEwJdnOFq3KMbF-gzwqx1KJYUEUKe" },
  { label: "Le Particulier", src: "https://drive.google.com/uc?export=view&id=1AinEGcXrczdICRzMmxok4sRLB_bVNbpg" },
  { label: "Le Particulier", src: "https://drive.google.com/uc?export=view&id=1BmeBtvCStupWBoq_0-6OPLm-nm6fWTiH" },
  { label: "Le Particulier", src: "https://drive.google.com/uc?export=view&id=1BxUPNnxdpzmgoMZSNh4YStGvRMcbFWJN" },
  { label: "Le Particulier", src: "https://drive.google.com/uc?export=view&id=1DrV00NVK_ag1LWnbYwy5DtpVOPdvBLea" },
  { label: "Le Particulier", src: "https://drive.google.com/uc?export=view&id=1Fgqo98jlkh-YtGyBSzhW8ARaDAZHDZ1h" },
  { label: "Le Particulier", src: "https://drive.google.com/uc?export=view&id=1HwjuJq9LNneOB99qoS1H01le8-ye9NQ1" },
  { label: "Le Particulier", src: "https://drive.google.com/uc?export=view&id=1LXpWIbfWkWA99Whd7sN0CEx8ip3tHK2N" },
  { label: "Le Particulier", src: "https://drive.google.com/uc?export=view&id=1W3aJal_-QTEK73xI4mvIx4v_vEDy0r6x" },
  { label: "Le Particulier", src: "https://drive.google.com/uc?export=view&id=1bZMQEqGJJyTNL4uHhCZQcpsFOBSPpI6T" },
  { label: "Le Particulier", src: "https://drive.google.com/uc?export=view&id=1c9xe70op9pJumC2QcVNEimqSwvq2u-cd" },
  { label: "Le Particulier", src: "https://drive.google.com/uc?export=view&id=1d6O9Ir8yMLe0W-UP7Uqy4g9anodFYzkv" },
  { label: "Le Particulier", src: "https://drive.google.com/uc?export=view&id=1eK0gENZ9cprs-gi1pUzGcmcBz-oQapHp" },
  { label: "Le Particulier", src: "https://drive.google.com/uc?export=view&id=1gf1HeH8oZDR5VV6ac1q6oS8LIqjunhfJ" },
  { label: "Le Particulier", src: "https://drive.google.com/uc?export=view&id=1jai7ximsIy26TIJb-RlOJlZJqk_PNyGd" },
  { label: "Le Particulier", src: "https://drive.google.com/uc?export=view&id=1lgOLhqB6LxIk8ree90vs6EuZ-Be4CEbc" },
  { label: "Le Particulier", src: "https://drive.google.com/uc?export=view&id=1lyTaJMWz2-44pe8eEPmWko4H7FrDTTF0" },
  { label: "Le Particulier", src: "https://drive.google.com/uc?export=view&id=1m2UwM6Uv1QxiV-7KamJBwbZP2DpuRciu" },
  { label: "Le Particulier", src: "https://drive.google.com/uc?export=view&id=1q1e-YruOUEEATAI_DKPXdCSZas9Zy4HU" },
  { label: "Le Particulier", src: "https://drive.google.com/uc?export=view&id=1s_Ra3JOQvRDCsOdU_8BSWlWokN5C19NU" },
];

// ── NDA RECORD ──
// NDAs stored in persistent storage under single key 'nda-log' as JSON array



function AccessGate({ onAccept }) {
  const mobile = useIsMobile();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminPin, setAdminPin] = useState("");

  const ACCESS_CODE = "LP4130";
  const valid = name && company && email && code;

  const handleEnter = () => {
    if (!valid) return;
    if (code.toUpperCase() !== ACCESS_CODE) {
      setError("Invalid access code. Please contact the listing team.");
      return;
    }
    // Log visitor
    try {
      const key = "v:" + Date.now();
      const val = JSON.stringify({ name, company, email, date: new Date().toLocaleString("en-US", { timeZone: "America/New_York" }) });
      localStorage.setItem(key, val);
    } catch(e) {}
    onAccept({ name, company, email, broker: "" });
  };

  const inputStyle = { width: "100%", padding: "12px 16px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 3, color: "#fff", fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box" };

  return (
    <div style={{ minHeight: "100vh", background: "#0d1f33", display: "flex", alignItems: "center", justifyContent: "center", padding: mobile ? 12 : 20, position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 520, width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(200,169,81,0.3)", borderRadius: 4, padding: mobile ? "28px 16px" : 48, position: "relative", zIndex: 1 }}>

        <div style={{ textAlign: "center", marginBottom: mobile ? 20 : 32 }}>
          <div style={{ letterSpacing: mobile ? 3 : 6, fontSize: mobile ? 11 : 13, color: GOLD, marginBottom: 8, fontFamily: "'Cormorant Garamond', serif" }}>EXCLUSIVE OFFERING</div>
          <div style={{ fontSize: mobile ? 24 : 32, fontWeight: 300, color: "#fff", letterSpacing: mobile ? 2 : 4, fontFamily: "'Cormorant Garamond', serif" }}>LE PARTICULIER</div>
          <div style={{ fontSize: mobile ? 11 : 13, color: "rgba(255,255,255,0.5)", marginTop: 8, letterSpacing: mobile ? 1 : 2 }}>4130 COLLINS AVENUE &middot; MIAMI BEACH</div>
          <div style={{ width: 60, height: 1, background: GOLD, margin: "20px auto" }} />
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", letterSpacing: 3, textTransform: "uppercase" }}>Confidential Investment Portal</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[["Full Name *", name, setName, "text"], ["Company / Entity *", company, setCompany, "text"], ["Email *", email, setEmail, "email"]].map(([label, val, setter, type]) => (
            <div key={label}>
              <label style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: 2, textTransform: "uppercase", display: "block", marginBottom: 6 }}>{label}</label>
              <input type={type} value={val} onChange={(e) => { setter(e.target.value); setError(""); }} style={inputStyle} />
            </div>
          ))}

          <div>
            <label style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: 2, textTransform: "uppercase", display: "block", marginBottom: 6 }}>Access Code *</label>
            <input type="text" value={code} onChange={(e) => { setCode(e.target.value); setError(""); }}
              onKeyDown={(e) => { if (e.key === "Enter") handleEnter(); }}
              placeholder="Provided by listing broker"
              style={{ ...inputStyle, letterSpacing: 4, textTransform: "uppercase", textAlign: "center", fontSize: 16 }} />
          </div>

          {error && (
            <div style={{ padding: 12, background: "rgba(198,40,40,0.12)", border: "1px solid rgba(198,40,40,0.3)", borderRadius: 3, textAlign: "center" }}>
              <span style={{ fontSize: 12, color: "#ff6b6b" }}>{error}</span>
            </div>
          )}

          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 3, padding: 14, fontSize: 12, color: "rgba(255,255,255,0.4)", textAlign: "center", lineHeight: 1.6 }}>
            Access requires a signed NDA and access code from the listing team.
          </div>

          <button onClick={handleEnter} disabled={!valid}
            style={{ marginTop: 4, padding: "14px 0", width: "100%", background: valid ? GOLD : "rgba(200,169,81,0.2)", color: valid ? NAVY : "rgba(255,255,255,0.3)", border: "none", borderRadius: 3, fontSize: 13, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", cursor: valid ? "pointer" : "default", transition: "all 0.3s" }}>
            Enter Deal Room
          </button>
        </div>

        <div style={{ textAlign: "center", marginTop: 16 }}>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
            Andres Grossmann (786) 213-5064 &middot; Tomas Sulichin (305) 788-2878 &middot; Related Realty
          </span>
        </div>

        <div style={{ textAlign: "center", marginTop: 16 }}>
          {!showAdminLogin ? (
            <span onClick={() => setShowAdminLogin(true)}
              style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", cursor: "pointer", padding: "4px 14px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 3 }}>
              Broker Login
            </span>
          ) : (
            <div style={{ display: "flex", gap: 8, justifyContent: "center", alignItems: "center" }}>
              <input type="password" placeholder="PIN" value={adminPin} onChange={(e) => setAdminPin(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter" && adminPin === "4130") onAccept({ name: "Admin", company: "Related Realty", email: "andresg@related-realty.com", broker: "", admin: true }); }}
                style={{ width: 80, padding: "8px 12px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 3, color: "#fff", fontSize: 13, textAlign: "center", outline: "none" }} />
              <button onClick={() => { if (adminPin === "4130") onAccept({ name: "Admin", company: "Related Realty", email: "andresg@related-realty.com", broker: "", admin: true }); }}
                style={{ padding: "8px 16px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 3, color: "#fff", fontSize: 11, cursor: "pointer", letterSpacing: 1 }}>
                GO
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
function MetricCard({ label, value, sub, accent }) {
  return (
    <div style={{ background: "#fff", border: "1px solid #e8e6e1", borderRadius: 4, padding: "16px 16px", borderTop: `3px solid ${accent || NAVY}` }}>
      <div style={{ fontSize: 10, color: "#999", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 300, color: NAVY, fontFamily: "'Cormorant Garamond', serif" }}>{value}</div>
      {sub && <div style={{ fontSize: 11, color: "#888", marginTop: 4 }}>{sub}</div>}
    </div>
  );
}

function Tab({ tabs, active, onChange }) {
  return (
    <div style={{ display: "flex", gap: 0, borderBottom: `2px solid #e8e6e1`, marginBottom: 24, overflowX: "auto", WebkitOverflowScrolling: "touch", msOverflowStyle: "none", scrollbarWidth: "none" }}>
      {tabs.map((t) => (
        <button key={t} onClick={() => onChange(t)}
          style={{ padding: "10px 16px", background: "none", border: "none", borderBottom: active === t ? `2px solid ${GOLD}` : "2px solid transparent", marginBottom: -2, color: active === t ? NAVY : "#999", fontSize: 12, fontWeight: active === t ? 600 : 400, letterSpacing: 1, textTransform: "uppercase", cursor: "pointer", transition: "all 0.2s", whiteSpace: "nowrap", flexShrink: 0 }}>
          {t}
        </button>
      ))}
    </div>
  );
}

function DataTable({ headers, rows, highlight }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead>
          <tr>{headers.map((h, i) => <th key={i} style={{ padding: "10px 14px", background: NAVY, color: "#fff", textAlign: i === 0 ? "left" : "right", fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", whiteSpace: "nowrap" }}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{ background: highlight === ri ? "rgba(200,169,81,0.08)" : ri % 2 === 0 ? "#fff" : "#fafaf7" }}>
              {row.map((cell, ci) => <td key={ci} style={{ padding: "10px 14px", borderBottom: "1px solid #eee", textAlign: ci === 0 ? "left" : "right", fontWeight: highlight === ri || ci === 0 ? 600 : 400, color: highlight === ri ? NAVY : DARK, whiteSpace: "nowrap" }}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Overview() {
  const mobile = useIsMobile();
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr 1fr" : "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginBottom: 24 }}>
        <MetricCard label="Offering Price" value="$21.5M" sub="$398,148 / key" accent={GOLD} />
        <MetricCard label="Year 1 NOI" value="$1.91M" sub="8.9% Cap Rate" />
        <MetricCard label="Year 2 NOI" value="$2.07M" sub="9.6% Stabilized Cap" />
        <MetricCard label="GOP Guarantee" value="$850K/yr" sub="Personal Guarantee" accent="#2E7D32" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: 24, marginBottom: 24 }}>
        <div>
          <h3 style={{ fontSize: 14, color: NAVY, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16, borderBottom: `1px solid ${GOLD}`, paddingBottom: 8 }}>Property</h3>
          {[
            ["Address", "4130 Collins Ave, Miami Beach, FL 33140"],
            ["Keys", "54 (7 stories, reinforced concrete)"],
            ["Building", "21,553 SF on 5,000 SF lot (~50 ft Collins frontage)"],
            ["Built / Renovated", "1936 / November 2025"],
            ["Zoning / FAR", "6501 / 4.50"],
            ["Operator", "Namron Hospitality (Le Particulier brand)"],
            ["Parking", "Street & nearby public"],
          ].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #f0f0ec", fontSize: 13 }}>
              <span style={{ color: "#888", fontWeight: 500 }}>{k}</span>
              <span style={{ color: DARK, textAlign: "right", maxWidth: "60%" }}>{v}</span>
            </div>
          ))}
        </div>
        <div>
          <h3 style={{ fontSize: 14, color: NAVY, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16, borderBottom: `1px solid ${GOLD}`, paddingBottom: 8 }}>Location Highlights</h3>
          {[
            ["Soho Beach House", "3 blocks (4385 Collins)"],
            ["Corridor Investment", "$2B+ (Aman, Rosewood, Bulgari, Auberge)"],
            ["Fontainebleau", "0.5 miles north"],
            ["Faena District", "0.4 miles south"],
            ["Walk Score", "88 / Bike: 70 / Transit: 55"],
            ["MIA Airport", "27-minute drive"],
            ["Miami Beach Occ (Q1 2025)", "84.7% (#1 in U.S.)"],
          ].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #f0f0ec", fontSize: 13 }}>
              <span style={{ color: "#888", fontWeight: 500 }}>{k}</span>
              <span style={{ color: DARK, textAlign: "right" }}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: "rgba(46,125,50,0.06)", border: "1px solid rgba(46,125,50,0.2)", borderRadius: 4, padding: 24 }}>
        <h3 style={{ fontSize: 14, color: "#2E7D32", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Contractual Income Protections</h3>
        <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr 1fr", gap: 16, fontSize: 13 }}>
          <div><strong style={{ color: NAVY }}>GOP Guarantee</strong><br/>$850K/yr minimum — personally guaranteed by operator's principal</div>
          <div><strong style={{ color: NAVY }}>Restaurant Income</strong><br/>$120–132K+/yr at 100% margin — all expenses paid by operator</div>
          <div><strong style={{ color: NAVY }}>Beach Club</strong><br/>Active amenity at 42nd St — 15 umbrellas, 30 chairs, daily service</div>
        </div>
      </div>
    </div>
  );
}

function Financials() {
  return (
    <div>
      <h3 style={{ fontSize: 14, color: NAVY, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Pro Forma Summary (All Management Fees Included)</h3>
      <DataTable
        headers={["Metric", "Year 1", "Year 2 (Stab)", "Year 3", "Year 5"]}
        rows={[
          ["Total Revenue", "$5,353,962", "$5,797,442", "$6,051,049", "$6,592,332"],
          ["Occupancy", "76.0%", "80.0%", "80.2%", "80.6%"],
          ["ADR", "$295", "$307", "$319", "$345"],
          ["RevPAR", "$224", "$245", "$256", "$278"],
          ["", "", "", "", ""],
          ["Departmental Expenses", "$1,097,035", "$1,222,992", "$1,267,535", "$1,362,586"],
          ["Departmental Profit", "$4,256,927", "$4,574,450", "$4,783,514", "$5,229,746"],
          ["Dept. Profit Margin", "79.5%", "78.9%", "79.1%", "79.3%"],
          ["", "", "", "", ""],
          ["Undistributed Operating Expenses", "$1,401,837", "$1,513,919", "$1,569,711", "$1,688,119"],
          ["Gross Operating Profit", "$2,855,090", "$3,060,531", "$3,213,804", "$3,541,627"],
          ["GOP Margin", "53.3%", "52.8%", "53.1%", "53.7%"],
          ["", "", "", "", ""],
          ["Management Fees (Base + Incentive)", "$528,103", "$567,999", "$595,249", "$653,494"],
          ["Property Taxes", "$150,000", "$153,000", "$156,060", "$162,365"],
          ["Insurance", "$264,000", "$271,920", "$280,078", "$297,134"],
          ["", "", "", "", ""],
          ["Net Operating Income", "$1,912,988", "$2,067,612", "$2,182,417", "$2,428,635"],
          ["NOI Margin", "35.7%", "35.7%", "36.1%", "36.8%"],
          ["", "", "", "", ""],
          ["Replacement Reserves (2%)", "$107,079", "$115,949", "$121,021", "$131,847"],
          ["NOI Less Reserves", "$1,805,908", "$1,951,663", "$2,061,396", "$2,296,788"],
        ]}
        highlight={17}
      />

      <div style={{ marginTop: 32 }}>
        <h3 style={{ fontSize: 14, color: NAVY, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Return Analysis at Various Price Points</h3>
        <DataTable
          headers={["Metric", "$21,500,000", "$20,000,000", "$19,500,000"]}
          rows={[
            ["Price Per Key", "$398,148", "$370,370", "$361,111"],
            ["Year 1 Cap Rate", "8.9%", "9.6%", "9.8%"],
            ["Year 2 Cap Rate (Stabilized)", "9.6%", "10.3%", "10.6%"],
            ["Year 5 Cap Rate", "11.3%", "12.1%", "12.5%"],
            ["Min. GOP Guarantee", "$850,000/yr", "$850,000/yr", "$850,000/yr"],
          ]}
          highlight={2}
        />
      </div>
    </div>
  );
}

function Scenarios() {
  const mobile = useIsMobile();
  const [occ, setOcc] = useState(80);
  const [adrGr, setAdrGr] = useState(4.0);
  const [price, setPrice] = useState(21.5);
  const [taxReassess, setTaxReassess] = useState(false);

  const baseAdr = 295;
  const y2Adr = baseAdr * (1 + adrGr / 100);
  const rooms = 54 * 365;
  const occRooms = rooms * (occ / 100);
  const roomsRev = occRooms * y2Adr;
  const otherFB = occRooms * 21;
  const otherInc = occRooms * 31.5;
  const restaurant = 132000;
  const totalRev = roomsRev + restaurant + otherFB + otherInc;

  const deptFixed = 494000;
  const deptVar = 46.2 * occRooms;
  const deptExp = deptFixed + deptVar;

  const ota = roomsRev * 0.107;
  const merchant = totalRev * 0.0385;
  const salesMkt = totalRev * 0.04;
  const admGen = Math.max(totalRev * 0.0241, 136000);
  const itSys = Math.max(totalRev * 0.015, 86000);
  const rmMaint = totalRev * 0.0201 + 40500;
  const utilities = Math.max(totalRev * 0.0359, 204000);
  const operExp = ota + merchant + salesMkt + admGen + itSys + rmMaint + utilities;

  const gop = totalRev - deptExp - operExp;
  const baseFee = totalRev * 0.04;
  const adjGop = gop - baseFee - totalRev * 0.02;
  const incentive = adjGop * 0.1239;
  const mgmtTotal = baseFee + incentive;
  const taxes = taxReassess ? 387000 : 153000;
  const insurance = 271920;
  const noi = gop - mgmtTotal - taxes - insurance;
  const priceVal = price * 1000000;
  const capRate = ((noi / priceVal) * 100);
  const reserves = totalRev * 0.02;
  const noiLessRes = noi - reserves;

  return (
    <div>
      <h3 style={{ fontSize: 14, color: NAVY, letterSpacing: 2, textTransform: "uppercase", marginBottom: 24 }}>Interactive Scenario Builder — Year 2 Stabilized</h3>

      <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: 24, marginBottom: 32 }}>
        <div style={{ background: "#fff", border: "1px solid #e8e6e1", borderRadius: 4, padding: 24 }}>
          <h4 style={{ fontSize: 12, color: GOLD, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>Adjust Assumptions</h4>

          {[
            ["Occupancy", occ, setOcc, 65, 90, "%"],
            ["ADR Growth (from $295)", adrGr, setAdrGr, 0, 6, "%"],
            ["Purchase Price ($M)", price, setPrice, 17, 22, "M"],
          ].map(([label, val, setter, min, max, unit]) => (
            <div key={label} style={{ marginBottom: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 12, color: "#888" }}>{label}</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: NAVY }}>{typeof val === 'number' ? val.toFixed(1) : val}{unit}</span>
              </div>
              <input type="range" min={min} max={max} step={0.5} value={val} onChange={(e) => setter(parseFloat(e.target.value))}
                style={{ width: "100%", accentColor: GOLD }} />
            </div>
          ))}

          <label style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: DARK, cursor: "pointer", marginTop: 8 }}>
            <input type="checkbox" checked={taxReassess} onChange={(e) => setTaxReassess(e.target.checked)} style={{ accentColor: GOLD }} />
            Property Tax Reassessment at Purchase Price (~$387K)
          </label>
        </div>

        <div style={{ background: "#fff", border: "1px solid #e8e6e1", borderRadius: 4, padding: 24 }}>
          <h4 style={{ fontSize: 12, color: GOLD, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>Projected Results</h4>

          <div style={{ textAlign: "center", marginBottom: 24, padding: 20, background: capRate >= 9 ? "rgba(46,125,50,0.06)" : capRate >= 7 ? "rgba(200,169,81,0.08)" : "rgba(198,40,40,0.06)", borderRadius: 4 }}>
            <div style={{ fontSize: 42, fontWeight: 300, color: capRate >= 9 ? "#2E7D32" : capRate >= 7 ? NAVY : "#C62828", fontFamily: "'Cormorant Garamond', serif" }}>
              {capRate.toFixed(1)}%
            </div>
            <div style={{ fontSize: 11, color: "#888", letterSpacing: 2, textTransform: "uppercase" }}>Cap Rate</div>
          </div>

          {[
            ["Total Revenue", fmt(Math.round(totalRev))],
            ["GOP", fmt(Math.round(gop)) + ` (${((gop/totalRev)*100).toFixed(1)}%)`],
            ["Management Fees", fmt(Math.round(mgmtTotal))],
            ["Property Taxes", fmt(taxes)],
            ["Insurance", fmt(insurance)],
            ["NOI", fmt(Math.round(noi))],
            ["NOI Less Reserves", fmt(Math.round(noiLessRes))],
            ["Y2 ADR", "$" + y2Adr.toFixed(0)],
            ["Y2 RevPAR", "$" + (y2Adr * occ / 100).toFixed(0)],
          ].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #f5f5f0", fontSize: 13, fontWeight: k === "NOI" ? 700 : 400, color: k === "NOI" ? NAVY : DARK }}>
              <span>{k}</span><span>{v}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: "rgba(200,169,81,0.08)", border: "1px solid rgba(200,169,81,0.3)", borderRadius: 4, padding: 16, fontSize: 13, color: DARK }}>
        <strong style={{ color: NAVY }}>Note:</strong> This scenario builder uses a simplified model for illustrative purposes. The operator's $850,000 annual GOP guarantee provides a contractual income floor regardless of operating performance. All management fees (base + incentive) are included in the calculations above.
      </div>
    </div>
  );
}

function SubmitOffer({ buyer }) {
  const [price, setPrice] = useState("");
  const [notes, setNotes] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleFile = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    if (f.size > 4500000) { setStatus("File too large. Maximum 4.5MB."); return; }
    setFileName(f.name);
    const reader = new FileReader();
    reader.onload = () => setFile(reader.result);
    reader.readAsDataURL(f);
  };

  const handleSubmit = async () => {
    if (!file) { setStatus("Please attach your LOI document."); return; }
    setSubmitting(true);
    setStatus("");
    try {
      const key = "offer:" + Date.now();
      const val = JSON.stringify({
        name: buyer.name, company: buyer.company, email: buyer.email,
        price: price || "Not specified", notes: notes || "",
        fileName, file,
        date: new Date().toLocaleString("en-US", { timeZone: "America/New_York" })
      });
      localStorage.setItem(key, val);
      setStatus("success");
      setFile(null); setFileName(""); setPrice(""); setNotes("");
    } catch(e) {
      setStatus("Storage error. Please email your LOI to andresg@related-realty.com");
    }
    setSubmitting(false);
  };

  const inputStyle = { width: "100%", padding: "12px 16px", background: "#fff", border: "1px solid #e8e6e1", borderRadius: 3, color: DARK, fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box" };

  if (status === "success") {
    return (
      <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center", padding: "40px 0" }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>{"\u2705"}</div>
        <div style={{ fontSize: 22, color: NAVY, fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, marginBottom: 12 }}>Offer Received</div>
        <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7 }}>
          Thank you, {buyer.name}. Your LOI has been submitted to the listing team.<br/>
          We will review and respond within 24 hours.
        </p>
        <div style={{ marginTop: 24, fontSize: 13, color: DARK }}>
          Andres Grossmann (786) 213-5064<br/>
          Tomas Sulichin (305) 788-2878
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 520, margin: "0 auto" }}>
      <h3 style={{ fontSize: 14, color: NAVY, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>Submit Your Offer</h3>
      <p style={{ fontSize: 13, color: "#888", marginBottom: 24 }}>Upload your Letter of Intent directly to the listing team through this secure portal.</p>

      <div style={{ background: "#fff", border: "1px solid #e8e6e1", borderRadius: 4, padding: 32, marginBottom: 16 }}>
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 11, color: "#999", letterSpacing: 1, marginBottom: 6 }}>BUYER</div>
          <div style={{ fontSize: 14, color: NAVY, fontWeight: 600 }}>{buyer.name} — {buyer.company}</div>
          <div style={{ fontSize: 12, color: "#888" }}>{buyer.email}</div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 11, color: "#999", letterSpacing: 1, marginBottom: 6 }}>OFFER PRICE (OPTIONAL)</div>
          <input type="text" placeholder="e.g. $20,000,000" value={price} onChange={e => { const num = e.target.value.replace(/[^0-9]/g, ""); setPrice(num ? "$" + parseInt(num).toLocaleString("en-US") : ""); }} style={inputStyle} />
        </div>

        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 11, color: "#999", letterSpacing: 1, marginBottom: 6 }}>COMMENTS (OPTIONAL)</div>
          <textarea rows={3} placeholder="Key terms, timing, conditions..." value={notes} onChange={e => setNotes(e.target.value)} style={{ ...inputStyle, resize: "vertical" }} />
        </div>

        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 11, color: "#999", letterSpacing: 1, marginBottom: 6 }}>ATTACH LOI DOCUMENT *</div>
          <label style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, padding: 24, border: "2px dashed " + (fileName ? "#2E7D32" : "#e8e6e1"), borderRadius: 4, cursor: "pointer", background: fileName ? "rgba(46,125,50,0.04)" : "#fafaf7", transition: "all 0.2s" }}>
            <input type="file" accept=".pdf,.doc,.docx" onChange={handleFile} style={{ display: "none" }} />
            <span style={{ fontSize: 24 }}>{fileName ? "\u2705" : "\uD83D\uDCCE"}</span>
            <span style={{ fontSize: 13, color: fileName ? "#2E7D32" : "#888" }}>
              {fileName || "Click to attach PDF or Word document (max 4.5MB)"}
            </span>
          </label>
        </div>

        {status && status !== "success" && (
          <div style={{ padding: 10, background: "#fff3e0", border: "1px solid #ffe0b2", borderRadius: 4, fontSize: 12, color: "#e65100", marginBottom: 16 }}>{status}</div>
        )}

        <button onClick={handleSubmit} disabled={submitting}
          style={{ width: "100%", padding: "14px 0", background: submitting ? "#888" : NAVY, color: "#fff", border: "none", borderRadius: 3, fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", cursor: submitting ? "default" : "pointer" }}>
          {submitting ? "Submitting..." : "Submit Offer"}
        </button>
      </div>

      <div style={{ padding: 16, background: "rgba(200,169,81,0.06)", border: "1px solid rgba(200,169,81,0.2)", borderRadius: 4, fontSize: 12, color: "#888", lineHeight: 1.7, textAlign: "center" }}>
        All offers are reviewed within 24 hours. For questions, contact Andres Grossmann at (786) 213-5064 or andresg@related-realty.com
      </div>
    </div>
  );
}

function AIChat({ buyer }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);

  const KB = [
    { keys: ["price", "asking", "cost", "how much"], answer: "The offering price is $21,500,000, which equates to $398,148 per key across 54 rooms. The seller has indicated flexibility for the right buyer with a clean, timely close. At various price points: at $21.5M the Year 2 stabilized cap is 9.6%; at $19.5M it's 10.6%; at $18.5M it's 11.2%." },
    { keys: ["cap rate", "cap", "yield", "return"], answer: "Year 1 NOI of $1,912,988 produces an 8.9% going-in cap rate at the $21.5M asking price. Year 2 stabilized NOI of $2,067,612 delivers a 9.6% cap. By Year 5, NOI reaches $2,428,635 for an 11.3% cap. All management fees (base + incentive) are already included in these figures. For context, Newmark reports 6.5%–8.5% OAR for upscale/luxury hotels in Miami as of Q1 2025." },
    { keys: ["noi", "net operating", "income", "cash flow"], answer: "Year 1 NOI: $1,912,988 (35.7% margin). Year 2 Stabilized NOI: $2,067,612 (35.7% margin). Year 3 NOI: $2,182,417 (36.1%). Year 5 NOI: $2,428,635 (36.8%). All figures include base management fee (4%) plus incentive fee. NOI less 2% replacement reserves: $1,805,908 (Y1), $1,951,663 (Y2), $2,296,788 (Y5)." },
    { keys: ["revenue", "total revenue", "top line"], answer: "Year 1 Total Revenue: $5,353,962. Year 2: $5,797,442. Year 3: $6,051,049. Year 5: $6,592,332. Revenue sources include room revenue ($4.42M Y1), restaurant income ($186K Y1), other F&B ($300K Y1), and other income including beach club, resort fees, and ancillary charges ($449K Y1)." },
    { keys: ["gop", "gross operating", "operating profit"], answer: "Year 1 GOP: $2,855,090 (53.3% margin). Year 2: $3,060,531 (52.8%). Year 5: $3,541,627 (53.7%). The operator has personally guaranteed a minimum GOP of $850,000 per year — if the hotel doesn't reach that threshold, the operator funds the difference out of pocket." },
    { keys: ["occupancy", "occ", "vacancy"], answer: "Year 1 pro forma occupancy is 76% (ramp-up year). Year 2 stabilized at 80%. The model assumes modest 25 bps annual growth thereafter (80.2% Y3, 80.6% Y5). For context, the Miami Beach submarket reports 71.4% across all chain scales, and Miami led all Top 25 U.S. markets in Q1 2025 at 84.7%. As of March 2026, the hotel is running approximately 90% occupancy on available rooms." },
    { keys: ["adr", "average daily rate", "rate", "room rate"], answer: "Year 1 ADR: $295. Year 2: $307. Year 5: $345. The model assumes 4% annual ADR growth. The Miami Beach submarket ADR is $288, so our starting point of $295 represents only a $7 premium for a fully renovated upscale boutique — conservative for the product quality and Collins Avenue location." },
    { keys: ["revpar"], answer: "Year 1 RevPAR: $224. Year 2: $245. Year 5: $278. Total RevPAR (including all revenue sources): $272 (Y1), $294 (Y2), $334 (Y5)." },
    { keys: ["comparable", "comp", "sales comp", "transaction"], answer: "Recent boutique and small-format hotel transactions in the market include: Kimpton Angler's (South Beach) — 132 keys at $329,545/key (branded, IHG, renovated); Fairwind Hotel (South Beach) — 104 keys at $298,077/key (independent, partial renovation); Hotel Trouvail (Miami Beach) — 71 keys at $230,000/key (older renovation vintage); W Fort Lauderdale (Blackstone, 2024) — 346 keys at $282K/key (oceanfront resort). Le Particulier at $398K/key reflects a premium for the November 2025 full renovation with zero deferred capex — the comps above are pre-renovation or partially renovated basis." },
    { keys: ["replacement", "build", "construction", "develop"], answer: "Based on HVS 2025 data, national median development costs are: Select-Service $223K/key, Upscale Extended-Stay $265K/key, Full-Service $409K/key, Luxury $1.06M+/key. Our bottom-up estimate for a comparable 54-key boutique in Miami Beach is $424K–$635K/key, factoring in coastal construction, hurricane code, and Miami Beach land values. At $398K/key, the offering price represents a 6% to 37% discount to replacement cost. A buyer avoids 3–4 years of development risk, construction cost escalation, and carrying costs." },
    { keys: ["management", "manager", "operator", "namron", "fee", "incentive"], answer: "The hotel is managed by Namron Hospitality under the Le Particulier brand, pursuant to a Hotel Management Agreement effective April 2025. The fee structure includes a 4% base management fee (Sales Fee) plus a tiered incentive fee based on GOP performance, with total management fees capped at 22.5% of GOP. Total management fees are approximately $528K in Year 1 and $568K in Year 2. All fees are already reflected in the NOI figures presented." },
    { keys: ["guarantee", "gop guarantee", "minimum", "floor", "guaranteed"], answer: "The operator's principal (Yves Naman) has personally guaranteed a minimum GOP of $850,000 per year. If the hotel does not achieve this threshold in any fiscal year, the operator is obligated to fund the difference. This provides a contractual income floor from day one, regardless of ramp-up pace or market conditions. This guarantee is documented in the fully executed Hotel Management Agreement." },
    { keys: ["brand", "le particulier", "name", "rebrand", "reposition"], answer: "The Le Particulier brand and all associated intellectual property (trademarks, domain names, social media accounts) are owned by the operator (Namron Hospitality). The brand transfers with the HMA assignment — if the buyer maintains the management agreement, they inherit the brand seamlessly. If the buyer wishes to rebrand or affiliate with a soft brand (Marriott Autograph, Hilton Curio, Hyatt Unbound, etc.), the HMA is terminable without penalty after April 2027. Full optionality for the buyer." },
    { keys: ["hma", "management agreement", "contract", "term", "terminat"], answer: "The Hotel Management Agreement has a 5-year initial term (from April 2025) with two 2-year mutual renewal options. It is fully assignable to a new owner. The first two years (through April 2027) constitute a 'Mandatory Period' during which early termination for convenience requires a fee of 75% of trailing 12-month Sales Fees. After April 2027, the agreement is terminable without penalty. The HMA also includes the $850K/yr personal GOP guarantee." },
    { keys: ["restaurant", "bowls", "guadalupe", "f&b", "food", "beverage"], answer: "The restaurant (Bowls de Guadalupe) operates under a separate 7-year management agreement (through ~2031) with exclusive F&B rights at the hotel. The concept is an upscale café serving coffee, juices, acai bowls, salads, sandwiches, and alcohol. The owner receives the greater of $10,000–$11,000/month or 10% of restaurant gross revenue, with 3% annual escalation. ALL restaurant operating expenses are paid by the operator — the income to the owner is at 100% margin. The restaurant space renovation is complete and the operator began paying rent in March 2026." },
    { keys: ["beach", "club", "joy", "amenity", "umbrella"], answer: "The hotel has a dedicated beach club at 42nd Street in Miami Beach, operated by Joy Beachsports Management. The setup includes 15 branded umbrellas, 30 chairs, and 15 small tables, operating daily from 9 AM to 5 PM. The agreement has a 5-year term with a 5-year extension option. The beach amenity is currently included in room rates, with plans to monetize separately as an additional revenue stream — this upside is not reflected in the current pro forma." },
    { keys: ["tax", "property tax", "reassess", "millage"], answer: "Current property taxes are approximately $150,000 per year (2% annual escalation in the model). Following a change of ownership, the Miami-Dade County Property Appraiser may reassess the property at or near the acquisition price. At $21.5M with an approximate 1.8% millage rate, annual taxes would increase to approximately $387,000. Even with full reassessment, the Year 2 stabilized cap rate at the asking price is approximately 8.5% — still within the range of market returns for upscale hospitality in Miami Beach." },
    { keys: ["insurance"], answer: "Insurance is budgeted at $264,000 per year with 3% annual escalation, consistent with current coastal Florida market rates for boutique hospitality assets." },
    { keys: ["renovation", "capex", "condition", "when", "built", "year"], answer: "The property was originally constructed in 1936 (reinforced concrete, 7 stories) and underwent a comprehensive renovation completed in November 2025. The renovation covered all guest rooms, common areas, and building systems. The hotel is in turnkey condition with zero deferred capex. The restaurant operator has additionally invested in a lobby revamp, terrace enhancements, and full kitchen buildout at their own expense." },
    { keys: ["location", "address", "where", "neighborhood", "mid-beach", "collins"], answer: "Le Particulier is located at 4130 Collins Avenue in the Mid-Beach section of Miami Beach. The property is three blocks from Soho Beach House (4385 Collins) and sits on the most actively invested hospitality corridor in Miami Beach, where over $2 billion in luxury hotel development is underway (Rosewood, Aman, Bulgari, Auberge). Fontainebleau is 0.5 miles north, Faena District 0.4 miles south. Walk Score: 88, Bike Score: 70, Transit Score: 55. The lot has approximately 50 front feet on Collins Avenue." },
    { keys: ["soho", "soho house"], answer: "Soho Beach House is located just three blocks north at 4385 Collins Avenue. It's a restored 1941 Art Deco building with 50 rooms — nearly identical in vintage and scale to Le Particulier (1936, 54 rooms). Soho House is a globally recognized private members' club that validates the caliber of this section of Collins Avenue." },
    { keys: ["parking", "park", "garage", "valet"], answer: "There is no on-site parking. This is consistent with boutique hotels in this section of Collins Avenue — Soho Beach House (3 blocks away) similarly relies on valet and nearby public garages. Street parking and nearby public garages are available. This is standard for Mid-Beach Miami Beach." },
    { keys: ["key", "room", "unit", "size", "how many"], answer: "54 keys across 7 stories of reinforced concrete construction. Total building area is 21,553 SF on a 5,000 SF lot with approximately 50 front feet on Collins Avenue. Zoning is 6501 with FAR of 4.50." },
    { keys: ["market", "miami", "submarket", "performance", "demand"], answer: "Miami Beach submarket (Dec 2025): 71.4% occupancy, $288 ADR, $206 RevPAR — these figures include all chain scales; upscale and luxury segments consistently outperform. Miami led all Top 25 U.S. markets in Q1 2025 occupancy at 84.7% with $278 ADR. CBRE projects steady growth supported by restrained supply (<1% annual growth), FIFA World Cup 2026, year-round leisure demand, PortMiami cruise traffic, and the Miami Beach Convention Center." },
    { keys: ["supply", "pipeline", "new hotel", "competition", "inventory"], answer: "Approximately 3,400 rooms are under construction in the Miami market, representing about 5.1% of existing inventory. However, annual net supply growth is less than 1% per CBRE. The new supply is predominantly ultra-luxury (Aman, Rosewood, Bulgari) at $800–$1,500/night ADR — a completely different segment from a 54-key boutique at $295 ADR. These projects validate the corridor and attract high-spending visitors to the area, which benefits nearby properties." },
    { keys: ["debt", "loan", "mortgage", "financing", "bank"], answer: "There is an existing Bank OZK mortgage on the property. The buyer should consult with the listing broker regarding assumption options or payoff at closing. The property's strong NOI supports conventional financing at competitive terms. The seller prefers a cash buyer or buyer with confirmed financing for a clean close." },
    { keys: ["owner", "seller", "david", "shapiro", "why sell"], answer: "The property is owned by David Shapiro through Red Hospitality LLC / 4130 Collins Acquisition LLC. The owner has completed a full value-add cycle — acquisition, comprehensive renovation, operational stabilization — and is now presenting the asset to the market. This is a classic value-add execution: create value and crystallize gains." },
    { keys: ["process", "timeline", "offer", "loi", "deadline", "bid"], answer: "We are conducting a targeted marketing process with a select group of qualified buyers. Initial indications of interest are encouraged within 30 days. To submit an offer, go to the 'Send Offer' tab — it will open a pre-addressed email where you can attach your LOI or term sheet directly. The seller prefers earnest money of $500K–$750K, going hard after a 30-day inspection period, with closing in 45–60 days. Cash offers or confirmed financing are preferred. Property tours are available by appointment — contact Andres Grossmann at (786) 213-5064 or Tomas Sulichin at (305) 788-2878." },
    { keys: ["contact", "phone", "call", "reach", "andres", "broker", "agent"], answer: "Your listing team at Related Realty: Andres Grossmann, Sr. Commercial Advisor — (786) 213-5064 / andresg@related-realty.com. Tomas Sulichin, President, Commercial Division — (305) 788-2878 / tomas@related-realty.com. Office: 2999 NE 191st St, Suite 510, Aventura, FL 33180." },
    { keys: ["tour", "visit", "see", "inspect", "walk"], answer: "Property tours are available by appointment. Please contact Andres Grossmann at (786) 213-5064 or Tomas Sulichin at (305) 788-2878 to schedule a visit. The hotel is fully operational, so tours are conducted during low-activity periods to minimize disruption to guests." },
    { keys: ["actual", "current", "january", "february", "march", "ramp", "loss"], answer: "January and February 2026 are reconciled actual numbers. The operating losses ($70,447 in January, $55,488 in February) reflect 30–35% occupancy at $185 ADR with only 50 of 54 rooms available, during Miami Beach's softest months, while all fixed costs were running at full capacity. This is entirely normal for a newly opened hotel in its first 60 days. As of March 2026, the hotel is running approximately 90% occupancy on available rooms and is approaching stabilization significantly ahead of the pro forma timeline." },
    { keys: ["expense", "opex", "operating cost", "cost structure"], answer: "Year 1 departmental expenses: $1,097,035 (20.5% of revenue). Undistributed operating expenses: $1,401,837 (26.2%). Total management fees: $528,103 (9.9%). Property taxes: $150,000. Insurance: $264,000. The GOP margin is 53.3% in Year 1, reflecting an efficient cost structure typical of an independent boutique with no brand fees." },
    { keys: ["reserve", "ff&e", "capex reserve", "replacement"], answer: "Replacement reserves are modeled at 2% of total revenue — standard institutional underwriting for a recently renovated hospitality asset. This equates to $107,079 in Year 1 and $115,949 in Year 2. Given the November 2025 renovation, near-term capex requirements are minimal." },
    { keys: ["zoning", "far", "develop", "entitlement", "live local"], answer: "The property is zoned 6501 with a FAR of 4.50. The site is on the U.S. National Register of Historic Places (added June 2004). Any development or modification would need to comply with Miami Beach historic preservation requirements. The current highest-and-best use is as a boutique hotel." },
    { keys: ["hello", "hi", "hey", "good morning", "good afternoon"], answer: `Hello! Welcome to the Le Particulier investment portal. I'm here to help answer any questions about the property, financials, contracts, market data, or the offering process. What would you like to know?` },
    { keys: ["thank", "thanks", "gracias"], answer: "You're welcome! If you have any additional questions, feel free to ask anytime. When you're ready to discuss further or schedule a tour, Andres Grossmann is available at (786) 213-5064 and Tomas Sulichin at (305) 788-2878." },
    { keys: ["tell me", "about this", "overview", "summary", "what else", "more info", "more about", "describe", "general", "what is this"], answer: "Le Particulier is a 54-key upscale boutique hotel at 4130 Collins Avenue, Miami Beach — three blocks from Soho Beach House — that completed a comprehensive renovation in November 2025. It's offered at $21,500,000 ($398,148/key) with Year 1 NOI of $1.91M (8.9% cap) growing to $2.07M stabilized (9.6% cap). Three things make this deal stand out: (1) the operator personally guarantees $850,000 minimum GOP annually, (2) the restaurant generates $120K+/year at 100% margin to the owner, and (3) at $398K/key you're buying below replacement cost ($424K–$635K to build comparable). The management agreement is assignable and terminable without penalty after April 2027, giving full brand optionality. The hotel is currently running ~90% occupancy on available rooms as of March 2026." },
    { keys: ["good deal", "worth it", "should i", "invest", "opportunity", "attractive", "why buy", "why should", "compelling", "pros"], answer: "Here's why institutional buyers are looking at this seriously: An 8.9% going-in cap rate on a newly renovated boutique hotel in Miami Beach exceeds the 6.5–8.5% range Newmark reports for upscale/luxury hotels in this market. You're buying at $398K/key — 6% to 37% below replacement cost. The operator guarantees $850K minimum GOP personally. The restaurant pays the owner $120K+/year with zero expenses. Miami led all Top 25 U.S. markets in hotel occupancy in Q1 2025 at 84.7%. And after April 2027, you can terminate the management agreement and rebrand without penalty. The downside protection (GOP guarantee + below replacement cost) combined with the upside optionality (brand conversion potential + unmodeled beach club revenue) makes a compelling risk-adjusted case." },
    { keys: ["risk", "downside", "concern", "worry", "negative", "cons", "red flag", "problem", "issue", "weakness"], answer: "The key considerations a buyer should evaluate: (1) No trailing financials — the renovation completed November 2025, so the pro forma is based on 2 months of actuals plus projections. Mitigant: the $850K GOP guarantee provides a contractual floor. (2) ADR growth of 4%/year is aggressive vs. CBRE's 0.6% market projection — though defensible for Years 1-2 as renovation rate capture. (3) Property tax reassessment at purchase price could increase taxes from $153K to ~$387K — even so, the stabilized cap still exceeds 8.5%. (4) No on-site parking — standard for Mid-Beach boutiques, including Soho House 3 blocks away. (5) The Le Particulier brand is owned by the operator, not the property — though the buyer has full optionality to maintain or rebrand after April 2027." },
    { keys: ["upside", "value add", "potential", "improve", "opportunity", "growth", "additional"], answer: "Several sources of unmodeled upside: (1) Restaurant income — currently modeled at $10K/month but David Shapiro indicated likely $20K/month once F&B is fully licensed, which would add ~$120K/year. (2) Beach club monetization — currently included in room rates but will be priced separately, creating additional ancillary revenue. (3) Brand conversion — affiliating with Marriott Autograph, Hilton Curio, or similar soft brand could drive a 15-25% RevPAR lift, pushing stabilized NOI to $2.4M-$2.7M (11-12%+ cap on cost). (4) OTA distribution optimization — the pro forma assumes high OTA dependency in Year 1 that decreases over time, improving net revenue per room. (5) Rate optimization — starting ADR of $295 vs. $288 submarket average leaves significant headroom for a renovated upscale product." },
    { keys: ["who", "namron", "yves", "operator", "management company", "manager background"], answer: "The hotel is managed by Namron Hospitality, led by Yves Naman. Namron operates a portfolio of boutique hotels across Mexico and the U.S. under brands including La Valise (Tulum, Mexico City, San Miguel de Allende, Mazunte, Los Cabos), Nest (Tulum, Baja), Encantada (Tulum), The William (NYC), and Maison Felix (Miami). Le Particulier Miami is their latest property. The management agreement is fully assignable to a new buyer with continuity of brand and operations." },
    { keys: ["how many", "unit mix", "room type", "suite", "floor plan"], answer: "54 keys across 7 stories. Room types include: Standard Room, Deluxe Room, Deluxe Water View, Corner Studio, Premium Corner Studio, Family Corner Studio, Family Creek View Room, and Creek View Room. All rooms were fully renovated in November 2025 with modern finishes. Floor plans and detailed room specifications are available in the data room — contact Andres Grossmann at (786) 213-5064 or Tomas Sulichin at (305) 788-2878." },
    { keys: ["negotiate", "flexibility", "lower", "discount", "best price", "willing"], answer: "The property is offered at $21,500,000. The seller is motivated and has indicated willingness to engage with serious buyers on pricing for a clean, timely close. I'd recommend discussing specific terms and structure directly with Andres Grossmann at (786) 213-5064 or Tomas Sulichin at (305) 788-2878 — he can provide guidance on what the seller would find compelling." },
    { keys: ["due diligence", "data room", "documents", "available", "access", "what documents"], answer: "The following materials are available upon request through the listing broker: Offering Memorandum, detailed pro forma (monthly Year 1 + 10-year stabilized model), Hotel Management Agreement, Restaurant Agreement, Beach Club Agreement, rent roll/unit mix, property tax records, insurance policy, zoning documentation, and title information. Contact Andres Grossmann at (786) 213-5064 or Tomas Sulichin at (305) 788-2878 to request data room access." },
    { keys: ["condo", "hoa", "unit", "structure", "ownership", "fee simple"], answer: "The property was originally structured as 54 condo units. David Shapiro now controls all 54 units and can dissolve the HOA to sell as fee simple — buyers should confirm the status of HOA dissolution as part of due diligence. There is an existing Bank OZK mortgage on 43 units ($6.53M). Details on the ownership structure and conveyance mechanics are available through the listing broker." },
  ];

  const findLocalAnswer = (query) => {
    const q = query.toLowerCase();
    let bestMatch = null;
    let bestScore = 0;
    for (const entry of KB) {
      let score = 0;
      for (const key of entry.keys) {
        if (q.includes(key.toLowerCase())) score += key.length;
      }
      if (score > bestScore) { bestScore = score; bestMatch = entry; }
    }
    if (bestScore >= 3) return bestMatch.answer;

    // Fuzzy fallback: if no keyword match, give a comprehensive overview
    const generalTopics = [
      "I can help with a wide range of topics on this deal. Here are some areas I can cover:\n",
      "\u2022 **Pricing & Returns** — Cap rates, NOI, return analysis at different price points",
      "\u2022 **Property Details** — 54 keys, location, construction, renovation, amenities",
      "\u2022 **Contracts** — HMA terms, GOP guarantee, restaurant agreement, beach club",
      "\u2022 **Market Data** — Miami Beach occupancy, ADR, supply pipeline, demand drivers",
      "\u2022 **Comparable Sales** — Recent boutique hotel transactions in South Florida",
      "\u2022 **Replacement Cost** — What it costs to build comparable in Miami Beach",
      "\u2022 **Risks & Considerations** — Tax reassessment, ADR growth, brand dependency",
      "\u2022 **Upside Potential** — Brand conversion, restaurant income, beach club monetization",
      "\u2022 **Offer Process** — Timeline, earnest money, closing structure",
      "\nJust ask about any of these topics, or try one of the suggested questions below!"
    ].join("\n");
    return generalTopics;
  };

  const systemPrompt = `You are the AI investment advisor for Le Particulier, a 54-key upscale boutique hotel at 4130 Collins Avenue, Miami Beach, FL 33140. You answer buyer questions professionally and accurately based on the following verified deal data:

PROPERTY: 54 keys, 7 stories, reinforced concrete, 21,553 SF on 5,000 SF lot (~50 ft Collins frontage), built 1936, full renovation November 2025, zoning 6501, FAR 4.50, no on-site parking.

PRICING: Asking $21,500,000 ($398,148/key).

FINANCIALS (Pro Forma, all management fees included):
- Year 1: Revenue $5.35M, GOP $2.86M (53.3%), NOI $1.91M (35.7%), Cap 8.9% at asking
- Year 2 (Stabilized): Revenue $5.80M, GOP $3.06M (52.8%), NOI $2.07M (35.7%), Cap 9.6%
- Year 5: Revenue $6.59M, GOP $3.54M (53.7%), NOI $2.43M (36.8%), Cap 11.3%
- Occupancy: 76% Y1, 80% Y2, 80.6% Y5
- ADR: $295 Y1, $307 Y2, $345 Y5 (4% annual growth)
- Management Fees: $528K Y1, $568K Y2 (Base 4% + Incentive, capped 22.5% of GOP)
- Property Taxes: $150K current (reassessment at ~1.8% millage = ~$387K)
- Insurance: $264K (3% escalation)
- Reserves: 2% of revenue

CONTRACTS:
- HMA: 5 years + 2x2yr renewals, assignable, terminable without penalty after April 2027
- GOP Guarantee: $850K/yr minimum, personally guaranteed by operator principal
- Restaurant (Bowls de Guadalupe): 7yr, $10-11K/mo min or 10% gross, ALL expenses paid by operator
- Beach Club: 5yr + 5yr option, 42nd St Miami Beach
- Brand Le Particulier: IP of operator, transfers with HMA

COMPS: Kimpton Angler's $330K/key, Fairwind $298K/key, Trouvail $230K/key, W Fort Lauderdale $282K/key

LOCATION: 3 blocks from Soho Beach House. $2B+ luxury corridor. Miami Beach: $288 ADR, 71.4% occ. Miami Q1 2025: 84.7% occ (#1 U.S.).

REPLACEMENT COST: $424K-$635K/key = 6-37% discount.

CURRENT: Jan-Feb 2026 reconciled actuals. March 2026: ~90% occ on available rooms.

RULES: Professional, concise, positive but honest. If unsure: "I'll have Andres confirm that detail." Never invent. Buyer: ${buyer.name} from ${buyer.company}.`;

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    const newMessages = [...messages, { role: "user", content: userMsg }];
    setMessages(newMessages);
    setLoading(true);

    const localAnswer = findLocalAnswer(userMsg);

    // Use local KB first — instant, always works
    if (localAnswer && !localAnswer.includes("I can help with a wide range")) {
      setMessages([...newMessages, { role: "assistant", content: localAnswer }]);
      setLoading(false);
      return;
    }

    // No local match — try Claude API with 10s timeout
    try {
      const apiMessages = [
        { role: "user", content: systemPrompt + "\n\nPlease confirm you understand your role." },
        { role: "assistant", content: `Hello ${buyer.name}. I'm the investment advisor for Le Particulier. Feel free to ask me anything about the property, financials, contracts, or market data.` },
        ...newMessages.map(m => ({ role: m.role, content: m.content })),
      ];

      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 10000);

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: apiMessages,
        }),
      });

      if (!response.ok) throw new Error(`API ${response.status}`);
      clearTimeout(timer);

      const data = await response.json();
      const textBlock = data.content?.find(b => b.type === "text");
      const reply = textBlock?.text;

      if (reply) {
        setMessages([...newMessages, { role: "assistant", content: reply }]);
      } else {
        throw new Error("No text in response");
      }
    } catch (err) {
      console.error("API error, using local KB:", err);
      const fallback = localAnswer || "I don't have that specific detail readily available. Please contact Andres Grossmann at (786) 213-5064 or Tomas Sulichin at (305) 788-2878 for clarification.";
      setMessages([...newMessages, { role: "assistant", content: fallback }]);
    }
    setLoading(false);
  };

  useEffect(() => { chatRef.current?.scrollTo(0, chatRef.current.scrollHeight); }, [messages]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: 500 }}>
      <div ref={chatRef} style={{ flex: 1, overflowY: "auto", padding: 16, background: "#fafaf7", borderRadius: 4, border: "1px solid #e8e6e1", marginBottom: 16 }}>
        {messages.length === 0 && (
          <div style={{ textAlign: "center", padding: 24, color: "#aaa" }}>
            <div style={{ fontSize: 24, marginBottom: 12 }}>💬</div>
            <div style={{ fontSize: 14, marginBottom: 8, color: "#666" }}>Ask anything about Le Particulier</div>
            <div style={{ fontSize: 12, marginBottom: 20, color: "#999" }}>I have detailed knowledge of the financials, contracts, market data, comparables, and more.</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
              {[
                "Is this a good deal?",
                "Tell me about this hotel",
                "What are the cap rates?",
                "What are the risks?",
                "Where's the upside?",
                "Tell me about the GOP guarantee",
                "What are the comparable sales?",
                "How does replacement cost compare?",
                "What's the management fee structure?",
                "Current occupancy performance?",
                "Tell me about the restaurant income",
                "What about property tax reassessment?",
                "What's the supply pipeline?",
                "Who is the operator?",
                "Can I rebrand the hotel?",
                "What documents are available?",
                "What's the offer process?",
                "Why is the owner selling?",
              ].map(q => (
                <button key={q} onClick={() => { setInput(q); }}
                  style={{ padding: "6px 14px", background: "#fff", border: "1px solid #ddd", borderRadius: 20, fontSize: 12, color: NAVY, cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.2s" }}
                  onMouseOver={(e) => { e.target.style.background = NAVY; e.target.style.color = "#fff"; }}
                  onMouseOut={(e) => { e.target.style.background = "#fff"; e.target.style.color = NAVY; }}>
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: 16, display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
            <div style={{
              maxWidth: "80%", padding: "12px 16px", borderRadius: 12,
              background: m.role === "user" ? NAVY : "#fff",
              color: m.role === "user" ? "#fff" : DARK,
              border: m.role === "assistant" ? "1px solid #e8e6e1" : "none",
              fontSize: 13, lineHeight: 1.6, whiteSpace: "pre-wrap"
            }}>
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: 16 }}>
            <div style={{ padding: "12px 16px", background: "#fff", border: "1px solid #e8e6e1", borderRadius: 12, fontSize: 13, color: "#aaa" }}>
              Analyzing...
            </div>
          </div>
        )}
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <input value={input} onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask about financials, market data, contracts, property details..."
          style={{ flex: 1, padding: "12px 16px", border: "1px solid #ddd", borderRadius: 4, fontSize: 14, outline: "none", fontFamily: "inherit" }} />
        <button onClick={sendMessage} disabled={loading || !input.trim()}
          style={{ padding: "12px 24px", background: NAVY, color: "#fff", border: "none", borderRadius: 4, fontSize: 13, fontWeight: 600, letterSpacing: 1, cursor: "pointer" }}>
          Send
        </button>
      </div>
    </div>
  );
}

function Gallery() {
  const [selected, setSelected] = useState(null);
  const images = GALLERY_IMAGES;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 8 }}>
        <h3 style={{ fontSize: 14, color: NAVY, letterSpacing: 2, textTransform: "uppercase", margin: 0 }}>Property Gallery</h3>
        <a href="https://www.leparticuliermiami.com/#gallery" target="_blank" rel="noopener noreferrer"
          style={{ fontSize: 12, color: BLUE, textDecoration: "none", letterSpacing: 1 }}>
          View Full Gallery on Hotel Website \u2192
        </a>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
        {images.map((img, i) => (
          <div key={i} onClick={() => setSelected(i)}
            style={{ cursor: "pointer", borderRadius: 4, overflow: "hidden", position: "relative", aspectRatio: "4/3", background: "#eee", border: "1px solid #e8e6e1" }}>
            <img src={img.src} alt={img.label}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "8px 12px", background: "linear-gradient(transparent, rgba(0,0,0,0.7))", color: "#fff", fontSize: 12, letterSpacing: 1 }}>
              {img.label}
            </div>
          </div>
        ))}
      </div>

      {selected !== null && (
        <div onClick={() => setSelected(null)}
          style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.9)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, cursor: "pointer", padding: 20 }}>
          <div style={{ position: "relative", maxWidth: "90vw", maxHeight: "85vh" }}>
            <img src={images[selected].src} alt={images[selected].label}
              style={{ maxWidth: "100%", maxHeight: "85vh", objectFit: "contain", borderRadius: 4 }} />
            <div style={{ textAlign: "center", color: "#fff", fontSize: 14, marginTop: 12, letterSpacing: 1 }}>
              {images[selected].label}
              <span style={{ color: "#888", marginLeft: 12 }}>{selected + 1} / {images.length}</span>
            </div>
            <div style={{ position: "absolute", top: -40, right: 0, color: "#fff", fontSize: 28, cursor: "pointer" }}>\u2715</div>
            {selected > 0 && (
              <div onClick={(e) => { e.stopPropagation(); setSelected(selected - 1); }}
                style={{ position: "absolute", left: 4, top: "50%", transform: "translateY(-50%)", color: "#fff", fontSize: 36, cursor: "pointer", padding: 10, background: "rgba(0,0,0,0.4)", borderRadius: "50%" }}>\u2039</div>
            )}
            {selected < images.length - 1 && (
              <div onClick={(e) => { e.stopPropagation(); setSelected(selected + 1); }}
                style={{ position: "absolute", right: 4, top: "50%", transform: "translateY(-50%)", color: "#fff", fontSize: 36, cursor: "pointer", padding: 10, background: "rgba(0,0,0,0.4)", borderRadius: "50%" }}>\u203A</div>
            )}
          </div>
        </div>
      )}

      <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12 }}>
        {[
          { icon: "\ud83c\udf7d\ufe0f", label: "Restaurant", sub: "Los Bowls de Guadalupe", href: "https://www.losbowlsdeguadalupe.com/" },
          { icon: "\ud83c\udfd6\ufe0f", label: "Beach Club", sub: "42nd St Miami Beach", href: "https://www.leparticuliermiami.com/" },
          { icon: "\ud83c\udfe8", label: "Hotel Website", sub: "All rooms & booking", href: "https://www.leparticuliermiami.com/rooms" },
        ].map((item) => (
          <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
            style={{ display: "block", textDecoration: "none", background: "#fff", border: "1px solid #e8e6e1", borderRadius: 4, padding: 20, textAlign: "center" }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
            <div style={{ fontSize: 14, fontWeight: 600, color: NAVY }}>{item.label}</div>
            <div style={{ fontSize: 12, color: "#888" }}>{item.sub}</div>
          </a>
        ))}
      </div>

      <div style={{ marginTop: 16, background: "rgba(200,169,81,0.08)", border: "1px solid rgba(200,169,81,0.3)", borderRadius: 4, padding: 16, fontSize: 13 }}>
        <strong style={{ color: NAVY }}>Additional Photography:</strong> Full professional photography package, floor plans, and room-by-room details available in the data room. Contact Andres Grossmann at (786) 213-5064 or Tomas Sulichin at (305) 788-2878 to request access.
      </div>
    </div>
  );
}

function Contact() {
  const team = [
    { initials: "AG", name: "Andres Grossmann", title: "Sr. Commercial Advisor", phone: "(786) 213-5064", phoneTel: "7862135064", email: "andresg@related-realty.com" },
    { initials: "TS", name: "Tomas Sulichin", title: "President, Commercial Division", phone: "(305) 788-2878", phoneTel: "3057882878", email: "tomas@related-realty.com" },
  ];

  return (
    <div style={{ maxWidth: 560, margin: "0 auto" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {team.map((person) => (
          <div key={person.initials} style={{ background: "#fff", border: "1px solid #e8e6e1", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ background: NAVY, padding: "24px 32px", display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: GOLD, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 300, color: NAVY, fontFamily: "'Cormorant Garamond', serif", flexShrink: 0 }}>{person.initials}</div>
              <div>
                <div style={{ fontSize: 20, color: "#fff", fontWeight: 300, fontFamily: "'Cormorant Garamond', serif", letterSpacing: 1 }}>{person.name}</div>
                <div style={{ fontSize: 12, color: GOLD, letterSpacing: 1 }}>{person.title}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>Related Realty</div>
              </div>
            </div>
            <div style={{ padding: "20px 32px" }}>
              {[
                ["\u{1F4F1}", "Phone / Text", person.phone, `tel:${person.phoneTel}`],
                ["\u{1F4E7}", "Email", person.email, `mailto:${person.email}`],
              ].map(([icon, label, value, href]) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 14, padding: "10px 0", borderBottom: "1px solid #f0f0ec" }}>
                  <span style={{ fontSize: 18 }}>{icon}</span>
                  <div>
                    <div style={{ fontSize: 11, color: "#999", letterSpacing: 1, textTransform: "uppercase" }}>{label}</div>
                    <a href={href} style={{ fontSize: 14, color: NAVY, textDecoration: "none", fontWeight: 500 }}>{value}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, background: "#fff", border: "1px solid #e8e6e1", borderRadius: 4, padding: "16px 32px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ fontSize: 18 }}>{"\u{1F3E2}"}</span>
          <div>
            <div style={{ fontSize: 11, color: "#999", letterSpacing: 1, textTransform: "uppercase" }}>Office</div>
            <div style={{ fontSize: 13, color: DARK }}>2999 NE 191st St, Suite 510, Aventura, FL 33180</div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 20, padding: "0 0 20px", textAlign: "center" }}>
        <a href="tel:7862135064" style={{ display: "inline-block", padding: "12px 28px", background: NAVY, color: "#fff", borderRadius: 3, fontSize: 13, fontWeight: 600, letterSpacing: 1, textDecoration: "none", marginRight: 8 }}>
          Call Now
        </a>
        <a href="mailto:andresg@related-realty.com,tomas@related-realty.com?subject=Le%20Particulier%20-%20Inquiry" style={{ display: "inline-block", padding: "12px 28px", background: GOLD, color: NAVY, borderRadius: 3, fontSize: 13, fontWeight: 600, letterSpacing: 1, textDecoration: "none" }}>
          Email Team
        </a>
      </div>
    </div>
  );
}

function Documents() {
  const mobile = useIsMobile();
  const [copied, setCopied] = useState("");
  const FOLDER_URL = "https://drive.google.com/drive/folders/1JSCy6B9137GW30FtH0wUtKOrE73zwj6G?usp=sharing";
  const docs = [
    { name: "Offering Memorandum", desc: "Confidential OM with full financial analysis, market context, and comparable sales", icon: "\uD83D\uDCD8", url: "https://drive.google.com/file/d/1BuTFQRNxfJtBCBdeK4YgC9Qg7DiwGZiZ/view?usp=sharing" },
    { name: "Pro Forma (2026\u20132027)", desc: "Detailed monthly P&L \u2014 Year 1 with Jan\u2013Feb actuals, Year 2 stabilized", icon: "\uD83D\uDCC8", url: "https://docs.google.com/spreadsheets/d/1B-GTLHBoZMS014e-fi96iPziEu4zUlLR/edit?usp=sharing&ouid=113699395715492196821&rtpof=true&sd=true" },
    { name: "Hotel Management Agreement", desc: "Fully executed HMA with Namron Hospitality \u2014 includes GOP guarantee provisions", icon: "\uD83D\uDCDD", url: "https://drive.google.com/file/d/1Nl603TdE5-t9LX2swiHVeyDJ1VwE-Ff2/view?usp=sharing" },
    { name: "Restaurant Lease Agreement", desc: "Bowls de Guadalupe \u2014 7-year term, $10\u201311K/mo minimum or 10% gross revenue", icon: "\uD83C\uDF7D\uFE0F", url: "https://drive.google.com/file/d/16iXnX4WeUeCEzx49KzncR9TAtkkCBQSy/view?usp=sharing" },
    { name: "Beach Resort Agreement", desc: "Joy Beachsports Management \u2014 5-year term with extension option", icon: "\uD83C\uDFD6\uFE0F", url: "https://drive.google.com/file/d/1tZlEm8_HlgaimuRL8Ke3IzmJzb1w2wHM/view?usp=drive_link" },
    { name: "40-Year Certification", desc: "Structural recertification documentation", icon: "\uD83C\uDFD7\uFE0F", url: "https://drive.google.com/file/d/1Y9XfV9N9uyaT1Dxvsy1omcsYozvfvM9s/view?usp=drive_link" },
    { name: "Survey & Floor Plans", desc: "Property survey and floor plan documentation", icon: "\uD83D\uDDFA\uFE0F", url: "https://drive.google.com/file/d/1uzzEv518zbaHo-7CnQsc5qSPHnkmTtmQ/view?usp=sharing" },
  ];

  const copyLink = (url, name) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(name);
      setTimeout(() => setCopied(""), 2000);
    });
  };

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>
          The following documents are available for review. All materials are confidential and subject to the executed NDA. Click any document to copy its link, then paste in your browser to view.
        </div>
      </div>

      <div onClick={() => copyLink(FOLDER_URL, "folder")}
        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, background: NAVY, color: "#fff", borderRadius: 4, padding: "18px 24px", cursor: "pointer", marginBottom: 20, fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}>
        {copied === "folder" ? "\u2705 Link Copied \u2014 Paste in Browser" : "\uD83D\uDCC2 Copy Data Room Link"}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {docs.map((doc) => (
          <div key={doc.name} onClick={() => copyLink(doc.url, doc.name)}
            style={{ display: "flex", alignItems: "center", gap: 16, background: "#fff", border: "1px solid #e8e6e1", borderRadius: 4, padding: mobile ? "14px 14px" : "16px 24px", borderLeft: "3px solid " + NAVY, cursor: "pointer", transition: "all 0.2s" }}>
            <div style={{ fontSize: 24, flexShrink: 0, width: 36, textAlign: "center" }}>{doc.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: NAVY, marginBottom: 2 }}>{doc.name}</div>
              <div style={{ fontSize: 11, color: "#888", lineHeight: 1.5 }}>{doc.desc}</div>
            </div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1, flexShrink: 0, color: copied === doc.name ? "#2E7D32" : GOLD }}>
              {copied === doc.name ? "\u2705 COPIED" : "COPY LINK"}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, padding: 16, background: "rgba(200,169,81,0.06)", border: "1px solid rgba(200,169,81,0.2)", borderRadius: 4, fontSize: 12, color: "#888", lineHeight: 1.6, textAlign: "center" }}>
        Need additional documents? Contact Andres Grossmann at (786) 213-5064 or andresg@related-realty.com
      </div>
    </div>
  );
}

function OffersLog() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadOffers = () => {
    setLoading(true);
    setError("");
    try {
      const all = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith("offer:")) {
          try {
            const raw = localStorage.getItem(k);
            if (raw) all.push(JSON.parse(raw));
          } catch(e) {}
        }
      }
      all.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
      setOffers(all);
    } catch(e) {
      setError("Error loading offers.");
      setOffers([]);
    }
    setLoading(false);
  };

  const downloadFile = (offer) => {
    try {
      const link = document.createElement("a");
      link.href = offer.file;
      link.download = offer.fileName || "LOI.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch(e) {}
  };

  const deleteAllOffers = () => {
    if (!window.confirm("Delete ALL offers? This cannot be undone.")) return;
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith("offer:")) keysToRemove.push(k);
    }
    keysToRemove.forEach(k => localStorage.removeItem(k));
    setOffers([]);
  };

  useEffect(() => { loadOffers(); }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
        <h3 style={{ fontSize: 14, color: NAVY, letterSpacing: 2, textTransform: "uppercase", margin: 0 }}>Offers Received</h3>
        <div style={{ display: "flex", gap: 8 }}>
          {offers.length > 0 && (
            <button onClick={deleteAllOffers} style={{ padding: "6px 16px", background: "#c0392b", color: "#fff", border: "none", borderRadius: 3, fontSize: 12, cursor: "pointer", fontWeight: 600 }}>
              🗑 Delete All
            </button>
          )}
          <button onClick={loadOffers} style={{ padding: "6px 16px", background: NAVY, color: "#fff", border: "none", borderRadius: 3, fontSize: 12, cursor: "pointer" }}>
            {loading ? "Loading..." : "Refresh"}
          </button>
        </div>
      </div>
      {error && <div style={{ padding: 12, background: "#fff3e0", border: "1px solid #ffe0b2", borderRadius: 4, fontSize: 12, color: "#e65100", marginBottom: 12 }}>{error}</div>}
      {!loading && offers.length === 0 && !error && (
        <div style={{ padding: 32, background: "#fff", border: "1px solid #e8e6e1", borderRadius: 4, textAlign: "center", color: "#888", fontSize: 13 }}>No offers received yet.</div>
      )}
      {offers.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {offers.map((o, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #e8e6e1", borderRadius: 4, padding: 24, borderLeft: "4px solid " + GOLD }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 600, color: NAVY }}>{o.name}</div>
                  <div style={{ fontSize: 13, color: DARK }}>{o.company}</div>
                  <div style={{ fontSize: 13, color: "#888" }}>{o.email}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: NAVY }}>{o.price}</div>
                  <div style={{ fontSize: 11, color: "#888" }}>{o.date}</div>
                </div>
              </div>
              {o.notes && <div style={{ fontSize: 13, color: DARK, padding: "10px 0", borderTop: "1px solid #f0f0ec", marginBottom: 12 }}>{o.notes}</div>}
              <button onClick={() => downloadFile(o)}
                style={{ padding: "10px 24px", background: NAVY, color: "#fff", border: "none", borderRadius: 3, fontSize: 12, fontWeight: 600, letterSpacing: 1, cursor: "pointer" }}>
                {"\uD83D\uDCC4"} Download {o.fileName || "LOI"}
              </button>
            </div>
          ))}
        </div>
      )}
      <div style={{ marginTop: 12, fontSize: 11, color: "#aaa", textAlign: "center" }}>{offers.length} offer(s) received</div>
    </div>
  );
}

function VisitorLog() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadLog = () => {
    setLoading(true);
    setError("");
    try {
      const all = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith("v:")) {
          try {
            const raw = localStorage.getItem(k);
            if (raw) all.push(JSON.parse(raw));
          } catch(e) {}
        }
      }
      all.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
      setEntries(all);
    } catch(e) {
      setError("Error loading visitor log.");
      setEntries([]);
    }
    setLoading(false);
  };

  useEffect(() => { loadLog(); }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <h3 style={{ fontSize: 14, color: NAVY, letterSpacing: 2, textTransform: "uppercase", margin: 0 }}>Visitor Log</h3>
        <button onClick={loadLog} style={{ padding: "6px 16px", background: NAVY, color: "#fff", border: "none", borderRadius: 3, fontSize: 12, cursor: "pointer" }}>
          {loading ? "Loading..." : "Refresh"}
        </button>
      </div>
      {error && <div style={{ padding: 12, background: "#fff3e0", border: "1px solid #ffe0b2", borderRadius: 4, fontSize: 12, color: "#e65100", marginBottom: 12 }}>{error}</div>}
      {!loading && entries.length === 0 && !error && (
        <div style={{ padding: 32, background: "#fff", border: "1px solid #e8e6e1", borderRadius: 4, textAlign: "center", color: "#888", fontSize: 13 }}>No visitors logged yet.</div>
      )}
      {entries.length > 0 && (
        <div style={{ background: "#fff", border: "1px solid #e8e6e1", borderRadius: 4, overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ background: NAVY, color: "#fff" }}>
                <th style={{ padding: "10px 16px", textAlign: "left", fontWeight: 600, fontSize: 11, letterSpacing: 1 }}>NAME</th>
                <th style={{ padding: "10px 16px", textAlign: "left", fontWeight: 600, fontSize: 11, letterSpacing: 1 }}>COMPANY</th>
                <th style={{ padding: "10px 16px", textAlign: "left", fontWeight: 600, fontSize: 11, letterSpacing: 1 }}>EMAIL</th>
                <th style={{ padding: "10px 16px", textAlign: "left", fontWeight: 600, fontSize: 11, letterSpacing: 1 }}>DATE</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((e, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #f0f0ec" }}>
                  <td style={{ padding: "10px 16px", fontWeight: 600, color: NAVY }}>{e.name}</td>
                  <td style={{ padding: "10px 16px", color: DARK }}>{e.company}</td>
                  <td style={{ padding: "10px 16px", color: DARK }}>{e.email}</td>
                  <td style={{ padding: "10px 16px", color: "#888", fontSize: 12 }}>{e.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div style={{ marginTop: 12, fontSize: 11, color: "#aaa", textAlign: "center" }}>{entries.length} visitor(s) recorded</div>
    </div>
  );
}

export default function App() {
  const mobile = useIsMobile();
  const [buyer, setBuyer] = useState(null);
  const [tab, setTab] = useState("Overview");
  const isAdmin = buyer && buyer.admin;
  const tabs = isAdmin
    ? ["Visitor Log", "Offers", "Overview", "Gallery", "Financials", "Documents", "Scenarios", "Send Offer", "Ask AI", "Contact"]
    : ["Overview", "Gallery", "Financials", "Documents", "Scenarios", "Send Offer", "Ask AI", "Contact"];

  if (!buyer) return <AccessGate onAccept={(b) => { setBuyer(b); if (b.admin) setTab("Visitor Log"); }} />;

  return (
    <div style={{ minHeight: "100vh", background: LIGHT, fontFamily: "'DM Sans', -apple-system, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <header style={{ background: NAVY, padding: mobile ? "12px 16px" : "16px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: mobile ? 9 : 11, color: GOLD, letterSpacing: mobile ? 2 : 4, fontFamily: "'Cormorant Garamond', serif" }}>EXCLUSIVE OFFERING</div>
          <div style={{ fontSize: mobile ? 16 : 22, color: "#fff", fontWeight: 300, letterSpacing: mobile ? 1 : 3, fontFamily: "'Cormorant Garamond', serif" }}>LE PARTICULIER</div>
        </div>
        <div style={{ textAlign: "right" }}>
          {buyer.admin ? (
            <div style={{ fontSize: mobile ? 11 : 13, color: GOLD, fontWeight: 600, letterSpacing: 2 }}>ADMIN</div>
          ) : (
            <>
              <div style={{ fontSize: mobile ? 9 : 11, color: "rgba(255,255,255,0.5)" }}>Logged in as</div>
              <div style={{ fontSize: mobile ? 11 : 13, color: "#fff" }}>{buyer.name}</div>
            </>
          )}
        </div>
      </header>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: mobile ? "16px 12px" : "24px 32px" }}>
        <Tab tabs={tabs} active={tab} onChange={setTab} />

        {tab === "Visitor Log" && isAdmin && <VisitorLog />}
        {tab === "Offers" && isAdmin && <OffersLog />}
        {tab === "Overview" && <Overview />}
        {tab === "Gallery" && <Gallery />}
        {tab === "Financials" && <Financials />}
        {tab === "Documents" && <Documents />}
        {tab === "Scenarios" && <Scenarios />}
        {tab === "Send Offer" && <SubmitOffer buyer={buyer} />}
        {tab === "Ask AI" && <AIChat buyer={buyer} />}
        {tab === "Contact" && <Contact />}
      </div>

      <footer style={{ borderTop: "1px solid #e8e6e1", padding: mobile ? "16px 12px" : "20px 32px", textAlign: "center", marginTop: 40 }}>
        <div style={{ fontSize: 12, color: "#aaa" }}>
          Andres Grossmann (786) 213-5064 &middot; Tomas Sulichin (305) 788-2878 &middot; Related Realty
        </div>
        <div style={{ fontSize: 11, color: "#ccc", marginTop: 4 }}>
          Confidential &mdash; Do Not Distribute
        </div>
      </footer>
    </div>
  );
}


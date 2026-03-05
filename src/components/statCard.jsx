export default function StatCard({ label, value, sub, icon, accent }) {
  return (
    <div
      style={{
        background: "#141414",
        border: "1px solid #222",
        borderRadius: 10,
        padding: "20px 22px",
        position: "relative",
        overflow: "hidden",
        transition: "border-color 0.2s",
        cursor: "default",
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = accent)}
      onMouseLeave={e => (e.currentTarget.style.borderColor = "#222")}
    >
      <div style={{ position: "absolute", top: -8, right: 14, fontSize: 48, opacity: 0.06, color: accent, fontWeight: 900 }}>
        {icon}
      </div>
      <div style={{ fontSize: 11, color: "#666", letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>
        {label}
      </div>
      <div style={{ fontSize: 32, fontWeight: 800, color: "#f0ece3", letterSpacing: -1, fontFamily: "'DM Serif Display', serif" }}>
        {value}
      </div>
      <div style={{ fontSize: 11, color: accent, marginTop: 6 }}>{sub}</div>
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, ${accent}, transparent)`, opacity: 0.5,
      }} />
    </div>
  );
}
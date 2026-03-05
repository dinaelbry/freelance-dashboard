// src/components/CustomTooltip.jsx
export default function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;

  return (
    <div style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: 6, padding: "8px 14px" }}>
      <p style={{ color: "#999", fontSize: 11, margin: 0 }}>{label}</p>
      <p style={{ color: "#f59e0b", fontSize: 16, fontWeight: 700, margin: "2px 0 0" }}>
        ${(payload[0].value ?? 0).toLocaleString()}
      </p>
    </div>
  );
}
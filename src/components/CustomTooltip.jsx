// src/components/CustomTooltip.jsx
export default function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="customTooltip">
      <p className="c_label">{label}</p>
      <p className="c_load">${(payload[0].value ?? 0).toLocaleString()}</p>
    </div>
  );
}

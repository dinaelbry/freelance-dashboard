export default function StatCard({ label, value, sub, icon, accent }) {
  return (
    <div className="stat-card" style={{ "--accent": accent }}>
      <div className="stat-card__bg-icon">{icon}</div>
      <div className="stat-card__label">{label}</div>
      <div className="stat-card__value">{value}</div>
      <div className="stat-card__sub">{sub}</div>
      <div className="stat-card__bar" />
    </div>
  );
}

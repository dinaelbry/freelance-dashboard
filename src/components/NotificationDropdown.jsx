import { useEffect } from "react";
import { notifications } from "../data/mockData";

export default function NotificationDropdown({ onClose }) {
  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (!e.target.closest("#notif-root")) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  return (
    <div style={{
      position: "absolute", top: 46, right: 0, width: 300,
      background: "#141414", border: "1px solid #222",
      borderRadius: 10, overflow: "hidden",
      boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
      animation: "fadeIn 0.15s ease",
      zIndex: 200,
    }}>
      <div style={{
        padding: "14px 16px 10px", borderBottom: "1px solid #1d1d1d",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div style={{ fontSize: 11, color: "#f59e0b", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>
          Notifications
        </div>
        <div style={{ fontSize: 10, color: "#555" }}>3 recent</div>
      </div>

      {notifications.map((n, i) => (
        <div key={n.id} style={{
          display: "flex", gap: 12, padding: "13px 16px",
          borderBottom: i < notifications.length - 1 ? "1px solid #1a1a1a" : "none",
          background: n.unread ? "rgba(245,158,11,0.03)" : "transparent",
          transition: "background 0.15s", cursor: "pointer",
        }}
          onMouseEnter={e => (e.currentTarget.style.background = "#1a1a1a")}
          onMouseLeave={e => (e.currentTarget.style.background = n.unread ? "rgba(245,158,11,0.03)" : "transparent")}
        >
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 12, color: "#f59e0b", flexShrink: 0,
          }}>{n.icon}</div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
              <span style={{ color: "#e0d8cc", fontSize: 12, fontWeight: 600 }}>{n.title}</span>
              {n.unread && (
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f59e0b", flexShrink: 0 }} />
              )}
            </div>
            <div style={{ color: "#777", fontSize: 11, marginTop: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {n.desc}
            </div>
            <div style={{ color: "#444", fontSize: 10, marginTop: 3 }}>{n.time}</div>
          </div>
        </div>
      ))}

      <div style={{ padding: "10px 16px", textAlign: "center" }}>
        <span style={{ fontSize: 11, color: "#555", cursor: "pointer" }}>View all activity →</span>
      </div>
    </div>
  );
}
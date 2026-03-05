import { useState } from "react";
import { useLocation } from "react-router-dom";
import NotificationDropdown from "./NotificationDropdown";
import { notifications } from "../data/mockData";

const PAGE_LABELS = {
  "/": "Overview",
  "/projects": "Projects",
  "/profile": "Profile Settings",
};

export default function Header({ onMenuClick }) {
  const location = useLocation();
  const [notifOpen, setNotifOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(
    notifications.filter((n) => n.unread).length,
  );

  const handleNotifToggle = () => {
    setNotifOpen((o) => !o);
    setUnreadCount(0);
  };

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        height: 60,
        background: "#0a0a0a",
        borderBottom: "1px solid #1a1a1a",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      {/* Left: hamburger + page title */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <span
          onClick={onMenuClick}
          className="mobile-menu-btn"
          style={{
            background: "none",
            border: "none",
            color: "#888",
            cursor: "pointer",
            fontSize: 18,
            padding: 0,
          }}
        ></span>
        <div>
          <div
            style={{
              fontSize: 9,
              color: "#444",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Dashboard
          </div>
          <div
            style={{
              color: "#f0ece3",
              fontSize: 15,
              fontWeight: 700,
              fontFamily: "'DM Serif Display', serif",
            }}
          >
            {PAGE_LABELS[location.pathname] ?? "Dashboard"}
          </div>
        </div>
      </div>

      {/* Right: notifications + avatar */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        {/* Notification Bell */}
        <div id="notif-root" style={{ position: "relative" }}>
          <button
            onClick={handleNotifToggle}
            style={{
              width: 38,
              height: 38,
              borderRadius: 9,
              background: notifOpen ? "rgba(245,158,11,0.1)" : "#141414",
              border: `1px solid ${notifOpen ? "#f59e0b44" : "#222"}`,
              color: notifOpen ? "#f59e0b" : "#888",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: 15,
              position: "relative",
              transition: "all 0.2s",
            }}
          >
            ◈
            {unreadCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: 5,
                  right: 5,
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#f59e0b",
                  border: "1.5px solid #0a0a0a",
                }}
              />
            )}
          </button>

          {notifOpen && (
            <NotificationDropdown onClose={() => setNotifOpen(false)} />
          )}
        </div>

        {/* Avatar */}
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #f59e0b, #d97706)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 11,
            fontWeight: 800,
            color: "#0a0a0a",
            cursor: "pointer",
          }}
        >
          JV
        </div>
      </div>
    </header>
  );
}

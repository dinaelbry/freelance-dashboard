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
    <header className="header">
      <div className="header__left">
        <button className="mobile-menu-btn" onClick={onMenuClick}>
          ☰
        </button>
        <div>
          <div className="header__page-sup">Dashboard</div>
          <div className="header__page-title">
            {PAGE_LABELS[location.pathname] ?? "Dashboard"}
          </div>
        </div>
      </div>

      <div className="header__right">
        <div className="notif-root" id="notif-root">
          <button
            className={`notif-btn ${notifOpen ? "open" : ""}`}
            onClick={handleNotifToggle}
          >
            <i className="fa-solid fa-diamond"></i>
            {unreadCount > 0 && <span className="notif-btn__dot" />}
          </button>
          {notifOpen && (
            <NotificationDropdown onClose={() => setNotifOpen(false)} />
          )}
        </div>

        <div className="header__avatar">DE</div>
      </div>
    </header>
  );
}

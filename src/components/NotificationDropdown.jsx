import { useEffect } from "react";
import { notifications } from "../data/mockData";

export default function NotificationDropdown({ onClose }) {
  useEffect(() => {
    const handler = (e) => {
      if (!e.target.closest("#notif-root")) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  return (
    <div className="notif-dropdown">
      <div className="notif-dropdown__header">
        <div className="notif-dropdown__title">Notifications</div>
        <div className="notif-dropdown__count">3 recent</div>
      </div>

      {notifications.map((n) => (
        <div key={n.id} className={`notif-item ${n.unread ? "unread" : ""}`}>
          <div className="notif-item__icon">{n.icon}</div>
          <div className="notif-item__body">
            <div className="notif-item__top">
              <span className="notif-item__title">{n.title}</span>
              {n.unread && <span className="notif-item__unread-dot" />}
            </div>
            <div className="notif-item__desc">{n.desc}</div>
            <div className="notif-item__time">{n.time}</div>
          </div>
        </div>
      ))}

      <div className="notif-dropdown__footer">
        <span>View all activity</span>
      </div>
    </div>
  );
}

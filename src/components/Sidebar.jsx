import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem, faFolder, faUser } from "@fortawesome/free-solid-svg-icons";
const navItems = [
  { path: "/", label: "Overview", icon: <FontAwesomeIcon icon={faGem} /> },
  {
    path: "/projects",
    label: "Projects",
    icon: <FontAwesomeIcon icon={faFolder} />,
  },
  {
    path: "/profile",
    label: "Profile",
    icon: <FontAwesomeIcon icon={faUser} />,
  },
];
function SidebarContent({ onNavigate }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = (path) => {
    navigate(path);
    onNavigate?.();
  };

  return (
    <>
      <div className="sidebar__logo">
        <div className="sidebar__logo-inner">
          <div className="sidebar__logo-icon"><i class="fa-solid fa-diamond"></i></div>
          <div>
            <div className="sidebar__logo-name">Dina elbry</div>
            <div className="sidebar__logo-sub">FREELANCE Front-End</div>
          </div>
        </div>
      </div>

      <nav className="sidebar__nav">
        <div className="sidebar__nav-label">Navigation</div>
        {navItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <div
              key={item.path}
              onClick={() => handleNav(item.path)}
              className={`sidebar__nav-item ${active ? "active" : ""}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </div>
          );
        })}
      </nav>

      <div className="sidebar__user">
        <div className="sidebar__avatar">DE</div>
        <div className="sidebar__user-info">
          <div className="sidebar__user-name">Dina elbry</div>
          <div className="sidebar__user-email">dinaelbry708@gmail.com</div>
        </div>
      </div>
    </>
  );
}

export function DesktopSidebar() {
  return (
    <div className="sidebar-desktop">
      <SidebarContent />
    </div>
  );
}

export function MobileSidebar({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="sidebar-mobile-overlay">
      <div className="sidebar-mobile-overlay__backdrop" onClick={onClose} />
      <div className="sidebar-mobile-overlay__panel">
        <SidebarContent onNavigate={onClose} />
      </div>
    </div>
  );
}

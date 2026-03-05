import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { path: "/", label: "Overview", icon: "◈" },
  { path: "/projects", label: "Projects", icon: "◆" },
  { path: "/profile", label: "Profile", icon: "▲" },
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
      {/* Logo */}
      <div style={{ padding: "28px 22px 24px", borderBottom: "1px solid #1d1d1d" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 7,
            background: "linear-gradient(135deg, #f59e0b, #d97706)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14, fontWeight: 900, color: "#0a0a0a",
          }}>◆</div>
          <div>
            <div style={{ color: "#f0ece3", fontSize: 14, fontWeight: 800, fontFamily: "'DM Serif Display', serif", letterSpacing: 0.5 }}>
              Dina Elbry
            </div>
            <div style={{ color: "#555", fontSize: 10, letterSpacing: 1 }}>FREELANCE HQ</div>
          </div>
        </div>
      </div>

      {/* Nav Links */}
      <nav style={{ padding: "16px 12px", flex: 1 }}>
        <div style={{ fontSize: 9, color: "#444", letterSpacing: 2, padding: "0 10px 10px", textTransform: "uppercase" }}>
          Navigation
        </div>
        {navItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <div key={item.path}
              onClick={() => handleNav(item.path)}
              style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "11px 14px", borderRadius: 8, cursor: "pointer",
                background: active ? "rgba(245,158,11,0.1)" : "transparent",
                borderLeft: active ? "2px solid #f59e0b" : "2px solid transparent",
                marginBottom: 2, transition: "all 0.15s",
              }}
              onMouseEnter={e => { if (!active) e.currentTarget.style.background = "#151515"; }}
              onMouseLeave={e => { if (!active) e.currentTarget.style.background = "transparent"; }}
            >
              <span style={{ fontSize: 13, color: active ? "#f59e0b" : "#555" }}>{item.icon}</span>
              <span style={{ fontSize: 13, color: active ? "#f0ece3" : "#777", fontWeight: active ? 600 : 400 }}>
                {item.label}
              </span>
            </div>
          );
        })}
      </nav>

      {/* User Footer */}
      <div style={{ padding: "16px 20px", borderTop: "1px solid #1d1d1d", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{
          width: 34, height: 34, borderRadius: "50%",
          background: "linear-gradient(135deg, #f59e0b, #d97706)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 12, fontWeight: 800, color: "#0a0a0a", flexShrink: 0,
        }}>JV</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ color: "#ccc", fontSize: 12, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            Dina
          </div>
          <div style={{ color: "#555", fontSize: 10 }}>dinaelbry708@gmail.com</div>
        </div>
      </div>
    </>
  );
}

// ── Desktop Sidebar ────────────────────────────────────────────────────────────
export function DesktopSidebar() {
  return (
    <div style={{
      background: "#0e0e0e", borderRight: "1px solid #1a1a1a",
      display: "flex", flexDirection: "column",
      position: "sticky", top: 0, height: "100vh", overflowY: "auto",
      width: 220, flexShrink: 0,
    }}>
      <SidebarContent />
    </div>
  );
}

// ── Mobile Sidebar Overlay ─────────────────────────────────────────────────────
export function MobileSidebar({ open, onClose }) {
  if (!open) return null;
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 100, display: "flex" }}>
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.7)" }} />
      <div style={{
        position: "relative", width: 240,
        background: "#0e0e0e", borderRight: "1px solid #1a1a1a",
        display: "flex", flexDirection: "column", zIndex: 1,
      }}>
        <SidebarContent onNavigate={onClose} />
      </div>
    </div>
  );
}
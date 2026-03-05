import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DesktopSidebar, MobileSidebar } from "./components/Sidebar";
import Header from "./components/Header";
import Overview from "./pages/Overview";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <BrowserRouter>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        {/* Desktop Sidebar */}
        <DesktopSidebar />

        {/* Mobile Sidebar */}
        <MobileSidebar open={mobileOpen} onClose={() => setMobileOpen(false)} />

        {/* Main Column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            minWidth: 0,
          }}
        >
          <Header onMenuClick={() => setMobileOpen(true)} />

          <main style={{ flex: 1, padding: "28px 24px", overflowY: "auto" }}>
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          <footer
            style={{
              padding: "14px 24px",
              borderTop: "1px solid #141414",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: 10, color: "#333", letterSpacing: 1 }}>
              <span className="dev-credit">
                &copy;Developed with{" "}
                <i
                  className="fa-solid fa-heart"
                  style={{ color: "red", fontSize: ".75rem" }}
                ></i>{" "}
                by <strong>ENG. Dina Elbry</strong>
              </span>
            </span>
            <span style={{ fontSize: 10, color: "#333" }}>2026</span>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

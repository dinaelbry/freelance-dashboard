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
      <div className="app-wrapper">
        <DesktopSidebar />
        <MobileSidebar open={mobileOpen} onClose={() => setMobileOpen(false)} />

        <div className="app-main-col">
          <Header onMenuClick={() => setMobileOpen(true)} />

          <main className="app-main">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>

          <footer className="app-footer">
            <span className="app-footer__copy">
              Developed with<i class="fa-solid fa-heart"></i> by{" "}
              <span style={{ fontSize: 15 }}>ENG. Dina Elbry </span>{" "}
            </span>
            <span className="app-footer__dev"> &copy; 2026</span>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

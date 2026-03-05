import { useState } from "react";

const inputStyle = {
  background: "#0e0e0e", border: "1px solid #2a2a2a",
  borderRadius: 7, padding: "11px 14px",
  color: "#e0d8cc", fontSize: 13, outline: "none",
  transition: "border-color 0.2s", fontFamily: "inherit", width: "100%",
  boxSizing: "border-box",
};

function Field({ label, value, onChange, type = "text", placeholder }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: 10, color: "#666", letterSpacing: 2, textTransform: "uppercase" }}>{label}</label>
      <input
        type={type} value={value} placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
        style={inputStyle}
        onFocus={e => (e.target.style.borderColor = "#f59e0b")}
        onBlur={e => (e.target.style.borderColor = "#2a2a2a")}
      />
    </div>
  );
}

function Toggle({ checked, onChange }) {
  return (
    <div onClick={() => onChange(!checked)} style={{
      width: 42, height: 24, borderRadius: 99, cursor: "pointer",
      background: checked ? "#f59e0b" : "#2a2a2a",
      position: "relative", transition: "background 0.25s", flexShrink: 0,
    }}>
      <div style={{
        position: "absolute", top: 3, left: checked ? 20 : 3,
        width: 18, height: 18, borderRadius: "50%", background: "#fff",
        transition: "left 0.25s", boxShadow: "0 1px 4px rgba(0,0,0,0.4)",
      }} />
    </div>
  );
}

export default function Profile() {
  const [form, setForm] = useState({
    name: "Dina",
    email: "dinaelbry708@gmail.com",
    title: "Freelance Product Designer",
    location: "Berlin, Germany",
    bio: "I craft digital products with a focus on clarity and purpose. 7+ years working with startups and established brands globally.",
    password: "",
    confirmPassword: "",
    notifyEmail: true,
    notifyBrowser: false,
    notifyWeekly: true,
  });
  const [saved, setSaved] = useState(false);

  const set = (key) => (val) => setForm((f) => ({ ...f, [key]: val }));

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const sectionLabel = (text) => (
    <div style={{ fontSize: 12, color: "#f59e0b", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 18 }}>
      {text}
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 720 }}>
      <div>
        <div style={{ fontSize: 11, color: "#666", letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>Account</div>
        <div style={{ fontSize: 28, fontWeight: 700, color: "#f0ece3", fontFamily: "'DM Serif Display', serif" }}>Profile Settings</div>
      </div>

      {/* Avatar Card */}
      <div style={{ background: "#141414", border: "1px solid #222", borderRadius: 10, padding: 22, display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
        <div style={{
          width: 70, height: 70, borderRadius: "50%",
          background: "linear-gradient(135deg, #f59e0b, #d97706)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 26, fontWeight: 800, color: "#0a0a0a", flexShrink: 0,
          fontFamily: "'DM Serif Display', serif",
        }}>JV</div>
        <div style={{ flex: 1 }}>
          <div style={{ color: "#f0ece3", fontWeight: 700, fontSize: 18, fontFamily: "'DM Serif Display', serif" }}>{form.name}</div>
          <div style={{ color: "#888", fontSize: 13, marginTop: 2 }}>{form.title}</div>
          <div style={{ color: "#555", fontSize: 12, marginTop: 2 }}>📍 {form.location}</div>
        </div>
        <button style={{
          background: "transparent", border: "1px solid #333",
          borderRadius: 7, padding: "8px 16px", color: "#888",
          fontSize: 11, cursor: "pointer", letterSpacing: 1, textTransform: "uppercase",
        }}>Change Photo</button>
      </div>

      {/* Personal Info */}
      <div style={{ background: "#141414", border: "1px solid #222", borderRadius: 10, padding: 22 }}>
        {sectionLabel("Personal Information")}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="form-grid">
          <Field label="Full Name"          value={form.name}     onChange={set("name")} />
          <Field label="Email Address"      value={form.email}    onChange={set("email")}    type="email" />
          <Field label="Professional Title" value={form.title}    onChange={set("title")} />
          <Field label="Location"           value={form.location} onChange={set("location")} />
        </div>
        <div style={{ marginTop: 14 }}>
          <label style={{ fontSize: 10, color: "#666", letterSpacing: 2, textTransform: "uppercase", display: "block", marginBottom: 6 }}>Bio</label>
          <textarea
            value={form.bio} onChange={e => set("bio")(e.target.value)} rows={3}
            style={{ ...inputStyle, resize: "vertical" }}
            onFocus={e => (e.target.style.borderColor = "#f59e0b")}
            onBlur={e => (e.target.style.borderColor = "#2a2a2a")}
          />
        </div>
      </div>

      {/* Password */}
      <div style={{ background: "#141414", border: "1px solid #222", borderRadius: 10, padding: 22 }}>
        {sectionLabel("Change Password")}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="form-grid">
          <Field label="New Password"     value={form.password}        onChange={set("password")}        type="password" placeholder="Min. 8 characters" />
          <Field label="Confirm Password" value={form.confirmPassword}  onChange={set("confirmPassword")}  type="password" placeholder="Re-enter password" />
        </div>
      </div>

      {/* Notifications */}
      <div style={{ background: "#141414", border: "1px solid #222", borderRadius: 10, padding: 22 }}>
        {sectionLabel("Notifications")}
        {[
          { key: "notifyEmail",   label: "Email notifications",  desc: "Receive updates and alerts via email" },
          { key: "notifyBrowser", label: "Browser notifications", desc: "Push notifications in your browser" },
          { key: "notifyWeekly",  label: "Weekly digest",         desc: "Summary of activity every Monday" },
        ].map(({ key, label, desc }) => (
          <div key={key} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #1a1a1a" }}>
            <div>
              <div style={{ color: "#ccc", fontSize: 13 }}>{label}</div>
              <div style={{ color: "#555", fontSize: 11, marginTop: 2 }}>{desc}</div>
            </div>
            <Toggle checked={form[key]} onChange={set(key)} />
          </div>
        ))}
      </div>

      {/* Save */}
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <button onClick={handleSave} style={{
          background: saved ? "#34d399" : "linear-gradient(135deg, #f59e0b, #d97706)",
          border: "none", borderRadius: 7, padding: "11px 28px",
          color: "#0a0a0a", fontWeight: 700, fontSize: 12, cursor: "pointer",
          letterSpacing: 1, textTransform: "uppercase", transition: "background 0.3s",
        }}>{saved ? "✓ Saved!" : "Save Changes"}</button>
        <button style={{
          background: "transparent", border: "1px solid #2a2a2a",
          borderRadius: 7, padding: "11px 20px", color: "#666",
          fontSize: 12, cursor: "pointer", letterSpacing: 1, textTransform: "uppercase",
        }}>Discard</button>
      </div>
    </div>
  );
}
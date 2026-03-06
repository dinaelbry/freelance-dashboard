import { useState } from "react";

function Field({ label, value, onChange, type = "text", placeholder }) {
  return (
    <div className="form-field">
      <label className="form-label">{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="form-input"
      />
    </div>
  );
}

function Toggle({ checked, onChange }) {
  return (
    <div
      className={`toggle ${checked ? "on" : "off"}`}
      onClick={() => onChange(!checked)}
    >
      <div className="toggle__knob" />
    </div>
  );
}

export default function Profile() {
  const [form, setForm] = useState({
    name: "dina elbry",
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

  return (
    <div className="profile">
      <div>
        <div className="page-sup">Account</div>
        <div className="page-title">Profile Settings</div>
      </div>

      {/* Avatar Card */}
      <div className="profile-card profile-avatar-card">
        <div className="profile-avatar">DE</div>
        <div className="profile-avatar-info">
          <div className="profile-avatar-name">{form.name}</div>
          <div className="profile-avatar-title">{form.title}</div>
          <div className="profile-avatar-location">
            {" "}
            <i className="fa-solid fa-map-pin"></i>
            {form.location}
          </div>
        </div>
        <button className="btn-secondary">Change Photo</button>
      </div>

      {/* Personal Info */}
      <div className="profile-card">
        <div className="section-label">Personal Information</div>
        <div className="form-grid">
          <Field label="Full Name" value={form.name} onChange={set("name")} />
          <Field
            label="Email Address"
            value={form.email}
            onChange={set("email")}
            type="email"
          />
          <Field
            label="Professional Title"
            value={form.title}
            onChange={set("title")}
          />
          <Field
            label="Location"
            value={form.location}
            onChange={set("location")}
          />
        </div>
        <div className="form-field" style={{ marginTop: 14 }}>
          <label className="form-label">Bio</label>
          <textarea
            value={form.bio}
            onChange={(e) => set("bio")(e.target.value)}
            rows={3}
            className="form-input form-textarea"
          />
        </div>
      </div>

      {/* Password */}
      <div className="profile-card">
        <div className="section-label">Change Password</div>
        <div className="form-grid">
          <Field
            label="New Password"
            value={form.password}
            onChange={set("password")}
            type="password"
            placeholder="Min. 8 characters"
          />
          <Field
            label="Confirm Password"
            value={form.confirmPassword}
            onChange={set("confirmPassword")}
            type="password"
            placeholder="Re-enter password"
          />
        </div>
      </div>

      {/* Notifications */}
      <div className="profile-card">
        <div className="section-label">Notifications</div>
        {[
          {
            key: "notifyEmail",
            label: "Email notifications",
            desc: "Receive updates and alerts via email",
          },
          {
            key: "notifyBrowser",
            label: "Browser notifications",
            desc: "Push notifications in your browser",
          },
          {
            key: "notifyWeekly",
            label: "Weekly digest",
            desc: "Summary of activity every Monday",
          },
        ].map(({ key, label, desc }) => (
          <div key={key} className="notif-toggle-row">
            <div>
              <div className="notif-toggle-label">{label}</div>
              <div className="notif-toggle-desc">{desc}</div>
            </div>
            <Toggle checked={form[key]} onChange={set(key)} />
          </div>
        ))}
      </div>

      {/* Save */}
      <div className="profile-actions">
        <button
          onClick={handleSave}
          className={`btn-save ${saved ? "saved" : ""}`}
        >
          {saved ? " Saved!" : "Save Changes"}
        </button>
        <button className="btn-discard">Discard</button>
      </div>
    </div>
  );
}

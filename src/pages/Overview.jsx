import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import StatCard from "../components/statCard";
import CustomTooltip from "../components/CustomTooltip";
import { mockProjects, monthlyEarnings, taskBreakdown, recentActivities, PIE_COLORS } from "../data/mockData";

export default function Overview() {
  const totalEarnings = monthlyEarnings.reduce((s, m) => s + m.earnings, 0);
  const activeProjects = mockProjects.filter((p) => p.status === "In Progress").length;
  const tasksDue = mockProjects.filter((p) => p.status !== "Completed" && p.status !== "On Hold").length;

  const stats = [
    { label: "Total Projects",  value: mockProjects.length,              sub: "+2 this month",    icon: "◈", accent: "#f59e0b" },
    { label: "Total Earnings",  value: `$${totalEarnings.toLocaleString()}`, sub: "Last 6 months", icon: "◆", accent: "#34d399" },
    { label: "Active Projects", value: activeProjects,                   sub: "In progress now",  icon: "▲", accent: "#60a5fa" },
    { label: "Tasks Due Soon",  value: tasksDue,                         sub: "Next 30 days",     icon: "●", accent: "#f87171" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      {/* Stat Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
        {stats.map((s, i) => <StatCard key={i} {...s} />)}
      </div>

      {/* Charts Row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr minmax(240px, 340px)", gap: 16 }} className="chart-row">
        {/* Bar Chart */}
        <div style={{ background: "#141414", border: "1px solid #222", borderRadius: 10, padding: "22px 20px" }}>
          <div style={{ fontSize: 11, color: "#666", letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>Monthly Earnings</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#f0ece3", marginBottom: 20, fontFamily: "'DM Serif Display', serif" }}>Revenue Trend</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={monthlyEarnings} barSize={28}>
              <XAxis dataKey="month" tick={{ fill: "#555", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#555", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `$${v / 1000}k`} />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
              <Bar dataKey="earnings" fill="#f59e0b" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div style={{ background: "#141414", border: "1px solid #222", borderRadius: 10, padding: "22px 20px" }}>
          <div style={{ fontSize: 11, color: "#666", letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>Breakdown</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#f0ece3", marginBottom: 12, fontFamily: "'DM Serif Display', serif" }}>Task Types</div>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={taskBreakdown} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="value">
                {taskBreakdown.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} stroke="none" />)}
              </Pie>
              <Tooltip formatter={(v) => `${v}%`} contentStyle={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: 6, fontSize: 12 }} />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11, color: "#888" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div style={{ background: "#141414", border: "1px solid #222", borderRadius: 10, padding: "22px" }}>
        <div style={{ fontSize: 11, color: "#666", letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>Latest</div>
        <div style={{ fontSize: 22, fontWeight: 700, color: "#f0ece3", marginBottom: 20, fontFamily: "'DM Serif Display', serif" }}>Recent Activity</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {recentActivities.map((a, i) => (
            <div key={a.id} style={{
              display: "flex", alignItems: "center", gap: 16,
              padding: "13px 0",
              borderBottom: i < recentActivities.length - 1 ? "1px solid #1d1d1d" : "none",
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: `${a.color}18`, border: `1px solid ${a.color}44`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, color: a.color, flexShrink: 0,
              }}>{a.icon}</div>
              <div style={{ flex: 1, color: "#ccc", fontSize: 13 }}>{a.text}</div>
              <div style={{ fontSize: 11, color: "#555", whiteSpace: "nowrap" }}>{a.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
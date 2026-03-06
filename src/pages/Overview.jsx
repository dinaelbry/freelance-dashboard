import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faDollarSign,
  faFolderOpen,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import StatCard from "../components/StatCard";
import CustomTooltip from "../components/CustomTooltip";
import {
  mockProjects,
  monthlyEarnings,
  taskBreakdown,
  recentActivities,
  PIE_COLORS,
} from "../data/mockData";

export default function Overview() {
  const totalEarnings = monthlyEarnings.reduce((s, m) => s + m.earnings, 0);
  const activeProjects = mockProjects.filter(
    (p) => p.status === "In Progress",
  ).length;
  const tasksDue = mockProjects.filter(
    (p) => p.status !== "Completed" && p.status !== "On Hold",
  ).length;
  const stats = [
    {
      label: "Total Projects",
      value: mockProjects.length,
      sub: "+2 this month",
      icon: <FontAwesomeIcon icon={faGem} />,
      accent: "#f59e0b",
    },
    {
      label: "Total Earnings",
      value: `$${totalEarnings.toLocaleString()}`,
      sub: "Last 6 months",
      icon: <FontAwesomeIcon icon={faDollarSign} />,
      accent: "#34d399",
    },
    {
      label: "Active Projects",
      value: activeProjects,
      sub: "In progress now",
      icon: <FontAwesomeIcon icon={faFolderOpen} />,
      accent: "#60a5fa",
    },
    {
      label: "Tasks Due Soon",
      value: tasksDue,
      sub: "Next 30 days",
      icon: <FontAwesomeIcon icon={faClock} />,
      accent: "#f87171",
    },
  ];

  return (
    <div className="overview">
      {/* Stat Cards */}
      <div className="overview__stats-grid">
        {stats.map((s, i) => (
          <StatCard key={i} {...s} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="overview__charts-row">
        <div className="chart-card">
          <div className="chart-card__sup">Monthly Earnings</div>
          <div className="chart-card__title">Revenue Trend</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={monthlyEarnings} barSize={28}>
              <XAxis
                dataKey="month"
                tick={{ fill: "#555", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "#555", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `$${v / 1000}k`}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "rgba(255,255,255,0.03)" }}
              />
              <Bar dataKey="earnings" fill="#f59e0b" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <div className="chart-card__sup">Breakdown</div>
          <div className="chart-card__title chart-card__title--sm">
            Task Types
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={taskBreakdown}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={3}
                dataKey="value"
              >
                {taskBreakdown.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i]} stroke="none" />
                ))}
              </Pie>
              <Tooltip
                formatter={(v) => `${v}%`}
                contentStyle={{
                  background: "#1a1a1a",
                  border: "1px solid #333",
                  borderRadius: 6,
                  fontSize: 12,
                }}
              />
              <Legend
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ fontSize: 11, color: "#888" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="activity-card">
        <div className="activity-card__sup">Latest</div>
        <div className="activity-card__title">Recent Activity</div>
        <div className="activity-list">
          {recentActivities.map((a) => (
            <div key={a.id} className="activity-item">
              <div
                className="activity-item__icon"
                style={{
                  background: `${a.color}18`,
                  border: `1px solid ${a.color}44`,
                  color: a.color,
                }}
              >
                {a.icon}
              </div>
              <div className="activity-item__text">{a.text}</div>
              <div className="activity-item__time">{a.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

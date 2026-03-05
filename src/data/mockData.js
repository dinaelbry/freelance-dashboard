export const mockProjects = [
  { id: 1, name: "Luminary Brand Rebrand", client: "Luminary Co.", status: "In Progress", deadline: "2026-03-15", budget: 4200, progress: 65 },
  { id: 2, name: "Nova E-Commerce Platform", client: "Nova Retail", status: "Review", deadline: "2026-03-22", budget: 8500, progress: 90 },
  { id: 3, name: "Arc Mobile App UI", client: "Arc Labs", status: "Completed", deadline: "2026-02-28", budget: 3100, progress: 100 },
  { id: 4, name: "Drift Marketing Site", client: "Drift Agency", status: "In Progress", deadline: "2026-04-10", budget: 2700, progress: 40 },
  { id: 5, name: "Solstice Dashboard", client: "Solstice SaaS", status: "On Hold", deadline: "2026-04-30", budget: 5600, progress: 20 },
  { id: 6, name: "Crest SEO Overhaul", client: "Crest Media", status: "Completed", deadline: "2026-01-31", budget: 1800, progress: 100 },
];

export const monthlyEarnings = [
  { month: "Sep", earnings: 3200 },
  { month: "Oct", earnings: 5100 },
  { month: "Nov", earnings: 4400 },
  { month: "Dec", earnings: 2900 },
  { month: "Jan", earnings: 6800 },
  { month: "Feb", earnings: 7200 },
];

export const taskBreakdown = [
  { name: "Design", value: 38 },
  { name: "Development", value: 29 },
  { name: "Strategy", value: 18 },
  { name: "Copywriting", value: 15 },
];

export const recentActivities = [
  { id: 1, icon: "✦", text: "Nova E-Commerce entered Review phase", time: "2 hours ago", color: "#f59e0b" },
  { id: 2, icon: "◈", text: "Invoice #INV-044 paid — $3,100", time: "5 hours ago", color: "#34d399" },
  { id: 3, icon: "◆", text: "New message from Arc Labs", time: "Yesterday", color: "#60a5fa" },
  { id: 4, icon: "▲", text: "Drift Marketing deadline updated", time: "2 days ago", color: "#f87171" },
  { id: 5, icon: "●", text: "Crest SEO project marked complete", time: "3 days ago", color: "#a78bfa" },
];

export const notifications = [
  { id: 1, icon: "◈", title: "Payment Received", desc: "Invoice #INV-044 paid — $3,100", time: "5h ago", unread: true },
  { id: 2, icon: "✦", title: "Review Request", desc: "Nova platform ready for your review", time: "8h ago", unread: true },
  { id: 3, icon: "◆", title: "New Message", desc: "Arc Labs sent you a message", time: "1d ago", unread: false },
];

export const PIE_COLORS = ["#f59e0b", "#60a5fa", "#34d399", "#f87171"];

export const STATUS_STYLES = {
  "In Progress": { bg: "rgba(245,158,11,0.15)", text: "#f59e0b", dot: "#f59e0b" },
  "Review":      { bg: "rgba(96,165,250,0.15)", text: "#60a5fa", dot: "#60a5fa" },
  "Completed":   { bg: "rgba(52,211,153,0.15)", text: "#34d399", dot: "#34d399" },
  "On Hold":     { bg: "rgba(248,113,113,0.15)", text: "#f87171", dot: "#f87171" },
};
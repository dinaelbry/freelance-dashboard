import { useState } from "react";
import { mockProjects, STATUS_STYLES } from "../data/mockData";

const STATUSES = ["All", "In Progress", "Review", "Completed", "On Hold"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? mockProjects : mockProjects.filter((p) => p.status === filter);

  return (
    <div className="projects">
      <div className="projects__header">
        <div>
          <div className="page-sup">Manage</div>
          <div className="page-title">Projects</div>
        </div>
        <button className="btn-primary">+ New Project</button>
      </div>

      <div className="filter-tabs">
        {STATUSES.map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`filter-tab ${filter === s ? "active" : ""}`}
          >{s}</button>
        ))}
      </div>

      <div className="projects-table">
        <div className="projects-table__head">
          {["Project", "Client", "Deadline", "Status", "Budget"].map((h) => (
            <div key={h} className="projects-table__head-cell">{h}</div>
          ))}
        </div>

        {filtered.map((p) => {
          const st = STATUS_STYLES[p.status];
          const deadline = new Date(p.deadline);
          const isOverdue = deadline < new Date() && p.status !== "Completed";

          return (
            <div key={p.id} className="projects-table__row">
              <div>
                <div className="project-name">{p.name}</div>
                <div className="progress-bar-wrapper">
                  <div className="progress-bar-track">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${p.progress}%`, background: st.dot }}
                    />
                  </div>
                  <span className="progress-bar-pct">{p.progress}%</span>
                </div>
              </div>

              <div className="project-client">{p.client}</div>

              <div className={`project-deadline ${isOverdue ? "overdue" : ""}`}>
                {isOverdue ? "f071 " : ""}
                {deadline.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </div>

              <div>
                <span
                  className="status-badge"
                  style={{ background: st.bg, color: st.text }}
                >
                  <span className="status-badge__dot" style={{ background: st.dot }} />
                  {p.status}
                </span>
              </div>

              <div className="project-budget">${p.budget.toLocaleString()}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
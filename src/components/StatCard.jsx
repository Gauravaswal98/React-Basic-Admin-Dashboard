import Counter from "./Counter";

function StatCard({ title, value, icon, trend }) {
  return (
    <div className="stat-card">
      <div className="card-icon">{icon}</div>

      <div>
        <h4>{title}</h4>
        <p>
          <Counter value={value} />
          <span className={`trend ${trend}`}>
            {trend === "up" ? " ↑" : " ↓"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default StatCard;

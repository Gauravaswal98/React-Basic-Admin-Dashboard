import StatCard from "../components/StatCard";
import SalesChart from "../components/SalesChart";

function Dashboard() {
  return (
    <>
      <h2>Dashboard</h2>

      <div className="cards">
        <StatCard title="Users" value="1245" icon="👥" trend="up" />
        <StatCard title="Sales" value="78900" icon="💰" trend="up" />
        <StatCard title="Revenue" value="120000" icon="📈" trend="up" />
        <StatCard title="Tickets" value="32" icon="🎫" trend="down" />
      </div>

      <div className="chart">
        <SalesChart />
      </div>
    </>
  );
}

export default Dashboard;

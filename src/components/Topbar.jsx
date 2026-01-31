import { useNavigate } from "react-router-dom";

function Topbar({ title, toggleSidebar }) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  }

  function toggleTheme() {
    document.body.classList.toggle("dark");
  }

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="burger-btn" onClick={toggleSidebar}>
          ☰
        </button>
        <h3>{title}</h3>
      </div>

      <div className="topbar-search">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="topbar-actions">
        <button className="icon-btn" onClick={toggleTheme}>🌙</button>
        <button className="logout-btn" onClick={logout}>⏻ Logout</button>
      </div>
    </header>
  );
}

export default Topbar;

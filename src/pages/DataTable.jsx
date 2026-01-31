import { useState } from "react";

function DataTable() {
  const data = [
    { id: 1, name: "Ankit Sharma", email: "ankit@gmail.com", role: "Admin" },
    { id: 2, name: "Pooja Sharma", email: "pooja@gmail.com", role: "Agent" },
    { id: 3, name: "Gaurav Singh", email: "gaurav@gmail.com", role: "Manager" },
    { id: 4, name: "Rahul Verma", email: "rahul@gmail.com", role: "Agent" },
    { id: 5, name: "Neha Gupta", email: "neha@gmail.com", role: "Admin" },
  ];

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 2;

  const filtered = data.filter(
    d =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.email.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / perPage);
  const current = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="table-card">
      <div className="d-flex justify-content-between mb-3">
        <h3>Data Table</h3>
        <input
          className="form-control w-25"
          placeholder="Search..."
          value={search}
          onChange={e => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
      </div>

      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {current.map((d, i) => (
              <tr key={d.id}>
                <td>{(page - 1) * perPage + i + 1}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td><span className="badge bg-primary">{d.role}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="pagination justify-content-end">
        {[...Array(totalPages)].map((_, i) => (
          <li key={i} className={`page-item ${page === i + 1 ? "active" : ""}`}>
            <button className="page-link" onClick={() => setPage(i + 1)}>
              {i + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataTable;

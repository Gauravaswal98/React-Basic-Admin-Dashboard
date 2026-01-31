function Users() {
  const users = [
    { id: 1, name: "Ankit Sharma", email: "ankit@gmail.com", role: "Admin" },
    { id: 2, name: "Pooja Sharma", email: "pooja@gmail.com", role: "Agent" },
    { id: 3, name: "Gaurav Singh", email: "gaurav@gmail.com", role: "Manager" },
  ];

  return (
    <div className="table-card">
      <h3 className="mb-3">Users</h3>

      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={u.id}>
                <td>{i + 1}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>
                  <span className="badge bg-primary">{u.role}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;

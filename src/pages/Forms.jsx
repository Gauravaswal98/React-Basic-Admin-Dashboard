function Forms() {
  return (
    <div className="table-card">
      <h3 className="mb-4">Forms</h3>

      <form>
        {/* Text input */}
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" placeholder="Enter name" />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" />
        </div>

        {/* Select */}
        <div className="mb-3">
          <label className="form-label">Role</label>
          <select className="form-select">
            <option>Select role</option>
            <option>Admin</option>
            <option>Manager</option>
            <option>Agent</option>
          </select>
        </div>

        {/* Radio buttons */}
        <div className="mb-3">
          <label className="form-label d-block">Gender</label>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="gender" />
            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="gender" />
            <label className="form-check-label">Female</label>
          </div>
        </div>

        {/* Checkbox */}
        <div className="mb-3">
          <label className="form-label d-block">Skills</label>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label">HTML</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label">CSS</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label">JavaScript</label>
          </div>
        </div>

        {/* Switch */}
        <div className="mb-3 form-check form-switch">
          <input className="form-check-input" type="checkbox" />
          <label className="form-check-label">Active User</label>
        </div>

        {/* Range */}
        <div className="mb-3">
          <label className="form-label">Experience (Years)</label>
          <input type="range" className="form-range" min="0" max="10" />
        </div>

        {/* Date */}
        <div className="mb-3">
          <label className="form-label">Joining Date</label>
          <input type="date" className="form-control" />
        </div>

        {/* Date Range */}
        <div className="row mb-3">
          <div className="col">
            <label className="form-label">From</label>
            <input type="date" className="form-control" />
          </div>
          <div className="col">
            <label className="form-label">To</label>
            <input type="date" className="form-control" />
          </div>
        </div>

        {/* Color Picker */}
        <div className="mb-3">
          <label className="form-label">Favorite Color</label>
          <input type="color" className="form-control form-control-color" />
        </div>

        {/* Textarea */}
        <div className="mb-4">
          <label className="form-label">Description</label>
          <textarea className="form-control" rows="3"></textarea>
        </div>

        {/* Submit */}
        <button type="submit" className="btn btn-primary px-4">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Forms;

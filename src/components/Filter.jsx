function Filter({ role, setRole, location, setLocation }) {
  return (
    <div className="filters">
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="All">All Roles</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="UI/UX">UI/UX</option>
      </select>

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="All">All Locations</option>
        <option value="Chennai">Chennai</option>
        <option value="Bangalore">Bangalore</option>
      </select>
    </div>
  );
}

export default Filter;
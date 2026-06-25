function JobCard({ job, viewDetails, addBookmark }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> {job.salary}</p>

      <button onClick={() => viewDetails(job)}>
        View Details
      </button>

      <button onClick={() => addBookmark(job)}>
        ❤️ Bookmark
      </button>
    </div>
  );
}

export default JobCard;
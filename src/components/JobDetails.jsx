function JobDetails({ job }) {
  if (!job) return null;

  return (
    <div className="details">
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <p><strong>Description:</strong> {job.description}</p>
    </div>
  );
}

export default JobDetails;
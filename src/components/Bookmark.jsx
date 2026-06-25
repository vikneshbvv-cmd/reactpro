function Bookmark({ bookmarks }) {
  return (
    <div className="bookmark-section">
      <h2>Bookmarked Jobs</h2>

      {bookmarks.map((job) => (
        <div key={job.id}>
          {job.title} - {job.company}
        </div>
      ))}
    </div>
  );
}

export default Bookmark;
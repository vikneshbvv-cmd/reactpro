import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import JobCard from "./components/JobCard";
import JobDetails from "./components/JobDetails";
import Bookmark from "./components/Bookmark";

import jobsData from "./data/jobs";

function App() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All");
  const [location, setLocation] = useState("All");
  const [selectedJob, setSelectedJob] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (job) => {
    if (!bookmarks.find((item) => item.id === job.id)) {
      setBookmarks([...bookmarks, job]);
    }
  };

  const filteredJobs = jobsData.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (role === "All" || job.role === role) &&
      (location === "All" || job.location === location)
  );

  return (
    <div>
      <Navbar />

      <div className="container">
        <SearchBar search={search} setSearch={setSearch} />

        <Filter
          role={role}
          setRole={setRole}
          location={location}
          setLocation={setLocation}
        />

        <div className="jobs">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              viewDetails={setSelectedJob}
              addBookmark={addBookmark}
            />
          ))}
        </div>

        <JobDetails job={selectedJob} />

        <Bookmark bookmarks={bookmarks} />
      </div>
    </div>
  ); <div className="particles">
  {[...Array(25)].map((_, index) => (
    <span key={index}></span>
  ))}
</div>

}

export default App;
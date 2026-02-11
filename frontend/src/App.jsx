import React, { useState } from "react";
import jobsData from "./data/jobs";
import JobCard from "./components/JobCard";
import Filters from "./components/Filters";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [sortOrder, setSortOrder] = useState(false);

  // Step 1: Filter Jobs
  let filteredJobs = jobsData.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      job.location.toLowerCase().includes(locationFilter.toLowerCase()) &&
      job.type.toLowerCase().includes(typeFilter.toLowerCase())
    );
  });

  // Step 2: Sort (ONLY if enabled)
  if (sortOrder) {
    filteredJobs = [...filteredJobs].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  return (
    <div className="container">
      <h1>Job Listings</h1>

      <Filters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        locationFilter={locationFilter}
        setLocationFilter={setLocationFilter}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      <div className="job-list">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              searchTerm={searchTerm}
            />
          ))
        ) : (
          <p className="no-jobs">No jobs found.</p>
        )}
      </div>
    </div>
  );
}

export default App;

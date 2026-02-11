import React from "react";

function JobCard({ job, searchTerm }) {

  const highlightText = (text) => {
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  };

  return (
    <div className="job-card">
      <h3 dangerouslySetInnerHTML={{ __html: highlightText(job.title) }}></h3>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Type:</strong> {job.type}</p>
    </div>
  );
}

export default JobCard;

import React from "react";

function Filters({
  searchTerm,
  setSearchTerm,
  locationFilter,
  setLocationFilter,
  typeFilter,
  setTypeFilter,
  sortOrder,
  setSortOrder
}) {

  const handleClear = () => {
    setSearchTerm("");
    setLocationFilter("");
    setTypeFilter("");
    setSortOrder(false);
  };

  return (
    <div className="filters">

      <input
        type="text"
        placeholder="Search by job title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        value={locationFilter}
        onChange={(e) => setLocationFilter(e.target.value)}
      >
        <option value="">All Locations</option>
        <option value="Remote">Remote</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Chennai">Chennai</option>
      </select>

      <select
        value={typeFilter}
        onChange={(e) => setTypeFilter(e.target.value)}
      >
        <option value="">All Types</option>
        <option value="Internship">Internship</option>
        <option value="Full-time">Full-time</option>
      </select>

      <button
        className="sort-btn"
        onClick={() => setSortOrder(!sortOrder)}
      >
        {sortOrder ? "Sorted A-Z ✓" : "Sort A-Z"}
      </button>

      <button
        className="clear-btn"
        onClick={handleClear}
      >
        Clear Filters
      </button>

    </div>
  );
}

export default Filters;

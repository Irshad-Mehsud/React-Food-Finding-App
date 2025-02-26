import React from "react";

const NoItemsFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-4">
      <div className="card text-center shadow-lg p-4" style={{ width: "300px" }}>
        <h5 className="text-danger fw-bold">No Items Found</h5>
        <p className="text-muted">Try searching for another category or item.</p>
      </div>
    </div>
  );
};

export default NoItemsFound;

import React from "react";
import Table from "./Table";

const Trend: React.FC = () => {
  return (
    <div>
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "200",
        }}
        className="text-primary mb-4"
      >
        Trend Analysis
      </h2>
      <Table />
    </div>
  );
};

export default Trend;

import React from "react";
import clsx from "clsx";

interface TableRowProps {
  label: string;
  accuracy: number;
  attempt: number;
  score: number;
  band: number;
  isCurrentUserScore?: boolean;
}

const TableRow: React.FC<TableRowProps> = ({
  label,
  accuracy,
  attempt,
  score,
  band,
  isCurrentUserScore = false,
}) => (
  <tr className={clsx(isCurrentUserScore && "text-success font-weight-bolder")}>
    <td>{label}</td>
    <td>{`${accuracy}%`}</td>
    <td>{attempt}</td>
    <td>{score}</td>
    <td>{band}</td>
  </tr>
);

const Table: React.FC = () => {
  return (
    <table className="table table-borderless">
      <thead
        style={{
          borderBottom: "1px solid lightgrey",
        }}
      >
        <tr>
          <th>User</th>
          <th>Accuracy</th>
          <th>Attempt</th>
          <th>Score</th>
          <th>Band</th>
        </tr>
      </thead>
      <tbody>
        <TableRow label="You" accuracy={60} attempt={5} score={6} band={6} isCurrentUserScore />
        <TableRow
          label="Talati Shlok (Topper)"
          accuracy={95}
          attempt={3}
          score={8.5}
          band={8.5}
        />
      </tbody>
    </table>
  );
};

export default Table;

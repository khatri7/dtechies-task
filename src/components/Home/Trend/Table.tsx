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
    <td className="text-center">{`${accuracy}%`}</td>
    <td className="text-center">{attempt}</td>
    <td className="text-center">{score}</td>
    <td className="text-center">{band}</td>
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
          <th className="text-center">Accuracy</th>
          <th className="text-center">Attempt</th>
          <th className="text-center">Score</th>
          <th className="text-center">Band</th>
        </tr>
      </thead>
      <tbody>
        <TableRow
          label="You"
          accuracy={60}
          attempt={5}
          score={6}
          band={6}
          isCurrentUserScore
        />
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
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import { delScore } from "store/scores/actions";
import { Score, ScoringSection } from "utils/types";
import { Link } from "react-router-dom";

interface TableRowProps {
  id: number;
  listening: ScoringSection;
  reading: ScoringSection;
  writing: ScoringSection;
  speaking: ScoringSection;
  overallBand: number;
  onDelete: Function;
}

const TableRow: React.FC<TableRowProps> = ({
  id,
  listening,
  reading,
  writing,
  speaking,
  overallBand,
  onDelete,
}) => (
  <tr>
    <td>{listening.band}</td>
    <td>{reading.band}</td>
    <td>{writing.band}</td>
    <td>{speaking.band}</td>
    <td>{overallBand}</td>
    <td className="text-end">
      <Link
        type="button"
        className="btn btn-secondary"
        to={`/update-score/${id}`}
      >
        Update
      </Link>
    </td>
    <td className="text-end">
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </td>
  </tr>
);

const Scores: React.FC = () => {
  const userScores = useSelector(
    (state: RootState) => state.user.currentUser.scores
  );
  const dispatch = useDispatch();
  const onDelete = (scoreId: number) => dispatch(delScore(scoreId));
  if (!userScores.length)
    return <p className="text-center">No scores available</p>;
  return (
    <table className="table table-borderless">
      <thead
        style={{
          borderBottom: "1px solid lightgrey",
        }}
      >
        <tr>
          <th>Listening</th>
          <th>Reading</th>
          <th>Writing</th>
          <th>Speaking</th>
          <th>Overall</th>
        </tr>
      </thead>
      <tbody>
        {userScores.map((score: Score) => (
          <TableRow {...score} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
};

export default Scores;

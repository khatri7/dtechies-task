import React, { useMemo } from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { CurrentUser, Score, User } from "utils/types";

interface TableRowProps {
  label: string;
  accuracy: number;
  attempt: number;
  score: number;
  band: number;
  isCurrentUserScore?: boolean;
  isTopper?: boolean;
}

const TableRow: React.FC<TableRowProps> = ({
  label,
  accuracy,
  attempt,
  score,
  band,
  isCurrentUserScore = false,
  isTopper = false,
}) => (
  <tr className={clsx(isCurrentUserScore && "text-success font-weight-bolder")}>
    <td>
      {isCurrentUserScore ? "You" : `${label}${isTopper ? " (Topper)" : ""}`}
    </td>
    <td className="text-center">{`${accuracy}%`}</td>
    <td className="text-center">{attempt}</td>
    <td className="text-center">{score}</td>
    <td className="text-center">{band}</td>
  </tr>
);

const Table: React.FC = () => {
  const scores: Score[] = useSelector((state: RootState) => state.scores);
  const { users, currentUser }: { users: User[]; currentUser: CurrentUser } =
    useSelector((state: RootState) => state.user);

  const userScores = useMemo(() => {
    const scoreUserIdArr = scores?.map((score) => score?.userId);
    const usersWithScores = users?.filter(
      (user) =>
        scoreUserIdArr?.includes(user?.id) && user?.id !== currentUser?.id
    );
    const userTableRowObjects = usersWithScores?.map((user) => {
      const userScores = scores?.filter((score) => score?.userId === user?.id);
      const latestScore = userScores[userScores?.length - 1];

      return {
        label: user?.fullName,
        accuracy: latestScore?.overallBand * 10,
        attempt: userScores?.length,
        score: latestScore?.overallBand,
        band: latestScore?.overallBand,
      };
    });

    return userTableRowObjects.sort((a, b) => {
      return b.accuracy - a.accuracy;
    });
  }, [scores, users, currentUser]);

  const currentUserTableObj = useMemo(() => {
    const latestScore = currentUser?.scores[currentUser?.scores.length - 1];
    return {
      label: currentUser?.fullName,
      accuracy: latestScore?.overallBand * 10,
      attempt: currentUser?.scores.length,
      score: latestScore?.overallBand,
      band: latestScore?.overallBand,
      isCurrentUserScore: true,
    };
  }, [currentUser]);

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
        <TableRow {...currentUserTableObj} />
        {userScores.map((userScore, index) => (
          <TableRow {...userScore} isTopper={index === 0} key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

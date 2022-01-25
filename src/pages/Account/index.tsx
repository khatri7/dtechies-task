import Scores from "components/Account/Scores";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "store";

const Account: React.FC = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  return (
    <div className="container pt-5 pb-5">
      <Link to="/" type="button" className="btn btn-info mb-4">
        Home
      </Link>
      <h1>Hello{`, ${currentUser.fullName}`}</h1>
      <hr />
      <h2 className="text-primary">Your Scores</h2>
      <Scores />
      <div>
        <button type="button" className="btn btn-primary">
          Add Score
        </button>
      </div>
    </div>
  );
};

export default Account;

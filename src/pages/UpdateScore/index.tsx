import React, { useEffect, useState } from "react";
import Form, { FormInitialValue } from "components/AddScore/Form";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import { Score, User } from "utils/types";
import { updateScore } from "store/scores/actions";
import { createPostReqObj } from "utils/helpers";

const UpdateScore: React.FC = () => {
  const params = useParams();
  const scores = useSelector((state: RootState) => state.scores as Score[]);
  const currentUser = useSelector(
    (state: RootState) => state.user.currentUser as User
  );
  const [score, setScore] = useState<Score>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.scoreId) {
      const score = scores.filter(
        (score) => score.id === parseInt(params.scoreId as string)
      );
      setScore(score[0]);
    }
  }, [scores, params.scoreId]);

  const onSuccess = () => {
    navigate("/account");
  };

  const onSubmit = (values: FormInitialValue) => {
    if (score) {
      const body = createPostReqObj(values, currentUser.id);
      dispatch(updateScore(score.id, { ...body, id: score.id }, onSuccess));
    }
  };

  if (!params.scoreId) return <p>No Score Found</p>;

  if (!(score?.userId === currentUser.id))
    return <p>You are not the owner of this score</p>;

  return (
    <div className="container pt-5 pb-5">
      <h2 className="text-primary mb-3">Update Score</h2>
      <Form initialValues={score} onSubmit={onSubmit} />
    </div>
  );
};

export default UpdateScore;

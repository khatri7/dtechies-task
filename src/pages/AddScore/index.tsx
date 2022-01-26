import Form, { FormInitialValue } from "components/AddScore/Form";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import { addScore } from "store/scores/actions";
import { createPostReqObj } from "utils/helpers";
import { User } from "utils/types";
import { useNavigate } from "react-router-dom";

const AddScore: React.FC = () => {
  const currentUser = useSelector(
    (state: RootState) => state.user.currentUser as User
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSuccess = () => {
    navigate("/account");
  };

  const onSubmit = (values: FormInitialValue) => {
    const body = createPostReqObj(values, currentUser.id);
    dispatch(addScore(body, onSuccess));
  };

  return (
    <div className="container pt-5 pb-5">
      <h2 className="text-primary mb-3">Add Score</h2>
      <Form onSubmit={onSubmit} />
    </div>
  );
};

export default AddScore;

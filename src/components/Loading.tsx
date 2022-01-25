import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeApp } from "store/initialize/actions";
import LoadingGIF from "assets/loading.jpg";
import { RootState } from "store";

const Loading: React.FC = () => {
  const dispatch = useDispatch();
  const { isInitializing, appInitialized } = useSelector(
    (state: RootState) => state.initApp
  );

  useEffect(() => {
    if (!appInitialized) dispatch(initializeApp());
  }, []);

  if (isInitializing)
    return (
      <div
        className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
        style={{
          inset: 0,
          zIndex: 100,
          background: "white",
        }}
      >
        <img src={LoadingGIF} alt="loading" height={150} />
      </div>
    );

  return null;
};

export default Loading;

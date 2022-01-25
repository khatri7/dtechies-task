import React, { useEffect, useState } from "react";
import { ScoringSection, Section, Sections, Score, User } from "utils/types";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { Link } from "react-router-dom";

interface Props {
  selectedTab: number;
}

interface ScoreDetailsProps {
  label: string;
  score?: number;
}

interface BandProps {
  band?: number;
}

const Band: React.FC<BandProps> = ({ band }) => (
  <div style={{ height: "160px", width: "160px" }}>
    <div className="text-center border border-5 rounded-circle h-100 d-flex align-items-center justify-content-center">
      <div>
        <h1
          style={{
            fontWeight: "600",
          }}
        >
          {band}
        </h1>
        Band
      </div>
    </div>
  </div>
);

const ScoreDetails: React.FC<ScoreDetailsProps> = ({ label, score }) => (
  <div className="text-center text-primary">
    <p>{label}</p>
    <p>{score}</p>
  </div>
);

const TabBody: React.FC<Props> = ({ selectedTab }) => {
  const [sectionScore, setSectionScore] = useState<ScoringSection>();
  const [scores, setScores] = useState<Score>();
  const userScores = useSelector(
    (state: RootState) => state.user.currentUser.scores
  );

  useEffect(() => {
    if (userScores.length) {
      const latestScoreIndex = userScores.length - 1;
      setScores(userScores[latestScoreIndex]);
    }
  }, [userScores]);

  useEffect(() => {
    if (scores) {
      const currentSection = Sections[selectedTab] as Section;
      setSectionScore(scores[currentSection]);
    }
  }, [selectedTab, scores]);

  return (
    <div className="container pt-5 pb-5">
      <div className="row">
        <div className="col" />
        <div className="col-8">
          <div className="row align-items-center">
            {userScores.length ? (
              <>
                <div className="col-3">
                  <Band band={sectionScore?.band} />
                </div>
                <div
                  className="col-9 row"
                  style={{
                    height: "max-content",
                  }}
                >
                  <div className="col border-end">
                    <ScoreDetails
                      label="Total Questions"
                      score={sectionScore?.totalQuestions}
                    />
                  </div>
                  <div className="col border-end">
                    <ScoreDetails
                      label="Total Questions"
                      score={sectionScore?.questionsAttended}
                    />
                  </div>
                  <div className="col">
                    <ScoreDetails
                      label="Total Questions"
                      score={sectionScore?.correctAnswers}
                    />
                  </div>
                </div>
              </>
            ) : (
              <p className="text-center">
                You don't have any scores yet, please go to your{" "}
                <Link to="/account">Account page</Link> and add scores
              </p>
            )}
          </div>
        </div>
        <div className="col" />
      </div>
    </div>
  );
};

export default TabBody;

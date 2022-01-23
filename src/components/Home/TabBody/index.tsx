import React, { useEffect, useState } from "react";
import { scores } from "utils/data/scores";
import { ScoringSection, Section, Sections } from "utils/types";

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
  <div style={{ height: "150px", width: "150px" }}>
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
  useEffect(() => {
    const test = scores[0];
    const currentSection = Sections[selectedTab] as Section;
    setSectionScore(test[currentSection]);
  }, [selectedTab]);
  return (
    <div className="container pt-5 pb-5">
      <div className="row">
        <div className="col" />
        <div className="col-8">
          <div className="row align-items-center">
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
          </div>
        </div>
        <div className="col" />
      </div>
    </div>
  );
};

export default TabBody;

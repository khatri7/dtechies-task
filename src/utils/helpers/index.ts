import { FormInitialValue, SectionInputs } from "components/AddScore/Form";
import { Score, ScoringSection } from "utils/types";

const completeScoreSection = (obj: SectionInputs): ScoringSection => ({
  ...obj,
  totalQuestions: 40,
  band: parseFloat((obj.correctAnswers / 4).toFixed(1)),
});

export const createPostReqObj = (
  values: FormInitialValue,
  userId: number
): Omit<Score, "id"> => {
  const updatedSections = {
    listening: completeScoreSection(values.listening),
    speaking: completeScoreSection(values.speaking),
    reading: completeScoreSection(values.reading),
    writing: completeScoreSection(values.writing),
  };

  const overallBand = parseFloat(
    (
      (updatedSections.listening.band +
        updatedSections.speaking.band +
        updatedSections.reading.band +
        updatedSections.writing.band) /
      4
    ).toFixed(1)
  );

  return {
    ...updatedSections,
    overallBand,
    userId,
  };
};

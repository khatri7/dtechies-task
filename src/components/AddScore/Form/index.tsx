import React from "react";
import { Field, Formik, Form as FormikForm, ErrorMessage } from "formik";
import { Section, Sections } from "utils/types";
import { Link } from "react-router-dom";
import Loader from "assets/loader.gif";
import * as Yup from "yup";

export interface SectionInputs {
  questionsAttended: number;
  correctAnswers: number;
}
export interface FormInitialValue {
  listening: SectionInputs;
  reading: SectionInputs;
  writing: SectionInputs;
  speaking: SectionInputs;
}
interface Props {
  onSubmit: Function;
  initialValues?: FormInitialValue;
  isSubmitting?: boolean;
}

const FormField: React.FC<{
  label: string;
  name: string;
  isNotRequired?: boolean;
}> = ({ label, name, isNotRequired = false }) => {
  return (
    <div className="mb-2">
      <label htmlFor={name}>{label}</label>
      <div className="input-group">
        <Field
          id={name}
          type="number"
          name={name}
          required={!isNotRequired}
          placeholder={label}
          className="form-control"
        />
        <div className="input-group-append">
          <span className="input-group-text">/40</span>
        </div>
      </div>
      <ErrorMessage name={name}>
        {(msg) => <span className="text-danger text-small">{msg}</span>}
      </ErrorMessage>
    </div>
  );
};

const FormSection: React.FC<{
  section: Section;
}> = ({ section }) => {
  return (
    <div className="mb-4">
      <h4 className="text-capitalize">{section}</h4>
      <FormField
        label="Questions attempted"
        name={`${section}.questionsAttended`}
      />
      <FormField
        label="Answered correctly"
        name={`${section}.correctAnswers`}
      />
    </div>
  );
};

const SectionSchema = Yup.object().shape({
  questionsAttended: Yup.number()
    .min(0, "Enter valid number of questions attended")
    .max(40, "Enter valid number of questions attended")
    .required("Required"),
  correctAnswers: Yup.number()
    .min(0, "Enter valid number of correct answers")
    .max(40, "Enter valid number of correct answers")
    .required("Required"),
});

const ScoreSchema = Yup.object().shape({
  listening: SectionSchema,
  reading: SectionSchema,
  writing: SectionSchema,
  speaking: SectionSchema,
});

const Form: React.FC<Props> = ({
  onSubmit,
  initialValues = {},
  isSubmitting = false,
}) => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={ScoreSchema}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        <FormikForm>
          <div className="col-4 mb-4">
            {[0, 1, 2, 3].map((section) => (
              <FormSection section={Sections[section] as Section} />
            ))}
          </div>
          <Link type="button" className="btn btn-secondary me-3" to="/account">
            Go Back
          </Link>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <img src={Loader} alt="submitting" height={24} />
            ) : (
              "Submit"
            )}
          </button>
        </FormikForm>
      </Formik>
    </div>
  );
};

export default Form;

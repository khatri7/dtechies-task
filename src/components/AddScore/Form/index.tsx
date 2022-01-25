import React from "react";
import { Field, Formik, Form as FormikForm } from "formik";
import { Section, Sections } from "utils/types";
import { Link } from "react-router-dom";

interface Props {
  onSubmit?: Function;
}

const FormField: React.FC<{
  label: string;
  name: string;
  isNotRequired?: boolean;
}> = ({ label, name, isNotRequired = false }) => {
  return (
    <div className="mb-2 input-group">
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
  );
};

const FormSection: React.FC<{ section: Section }> = ({ section }) => {
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

const Form: React.FC<Props> = ({ onSubmit }) => {
  return (
    <div>
      <Formik
        initialValues={{}}
        onSubmit={(values) => {
          console.log(values);
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </FormikForm>
      </Formik>
    </div>
  );
};

export default Form;

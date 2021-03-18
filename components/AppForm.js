import React from "react";
import { Formik } from "formik";
import PropTypes from "prop-types";

function AppForm({ initialValues, validationSchema, onSubmit, children }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

AppForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  validationSchema: PropTypes.any.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
};

export default AppForm;

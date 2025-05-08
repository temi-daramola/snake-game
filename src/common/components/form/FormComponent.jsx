import { Box } from "@chakra-ui/react";
import { Formik } from "formik";
import React from "react";

export const ControlledForm = ({
  children,
  initialValues,
  schema,
  handleSubmit,
  resetRef,
  useFormik,
  ...props
}) => {
  return (
    <Box {...props}>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={schema}
        resetRef={resetRef}
        onSubmit={(values) => {
          if (handleSubmit) handleSubmit(values);
        }}
        // onReset={(values, reset)=> {
        // }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            {useFormik ? (
              <React.Fragment>{children(formik)}</React.Fragment>
            ) : (
              <React.Fragment>{children}</React.Fragment>
            )}
            <button
              type="button"
              hidden
              ref={resetRef}
              onClick={formik.resetForm}
            ></button>
          </form>
        )}
      </Formik>
    </Box>
  );
};

import React from "react";
import PropTypes from "prop-types";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";

// Reusable FormField component
function FormField({ label, ...rest }) {
  return (
    <MDBox mb={2}>
      <MDInput {...rest} variant="standard" label={label} fullWidth />
    </MDBox>
  );
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FormField;

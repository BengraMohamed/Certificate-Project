import React from "react";
import PropTypes from "prop-types";
import MDInput from "components/MDInput";

function FormField({ label, ...rest }) {
  return <MDInput {...rest} label={label} variant="standard" fullWidth />;
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FormField;

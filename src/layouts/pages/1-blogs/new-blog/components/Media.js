import React, { useMemo } from "react";
import PropTypes from "prop-types";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDDropzone from "components/MDDropzone";

function Media({ blogData, updateBlogData }) {
  return (
    <MDBox>
      <MDTypography variant="h5">Media</MDTypography>
      <MDBox mt={3}>
        <MDTypography component="label" variant="button" fontWeight="regular" color="text">
          Blog Main Image
        </MDTypography>
        {useMemo(
          () => (
            <MDDropzone
              options={{ addRemoveLinks: true }}
              onDrop={(files) => updateBlogData("mainImage", files[0])}
            />
          ),
          [updateBlogData]
        )}
      </MDBox>
    </MDBox>
  );
}

Media.propTypes = {
  blogData: PropTypes.object.isRequired,
  updateBlogData: PropTypes.func.isRequired,
};

export default Media;

import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import FormField from "./FormField";
import MDEditor from "components/MDEditor";

function BlogInfos({ blogData, updateBlogData }) {
  return (
    <MDBox>
      <MDTypography variant="h5">Blog Details</MDTypography>
      <MDBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormField
              type="text"
              label="Title"
              value={blogData.title}
              onChange={(e) => updateBlogData("title", e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              type="text"
              label="Author"
              value={blogData.author}
              onChange={(e) => updateBlogData("author", e.target.value)}
            />
          </Grid>
        </Grid>
        <MDBox mt={3}>
          <MDTypography component="label" variant="button" fontWeight="regular" color="text">
            Description
          </MDTypography>
          <MDEditor
            value={blogData.description}
            onChange={(value) => updateBlogData("description", value)}
          />
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

BlogInfos.propTypes = {
  blogData: PropTypes.object.isRequired,
  updateBlogData: PropTypes.func.isRequired,
};

export default BlogInfos;

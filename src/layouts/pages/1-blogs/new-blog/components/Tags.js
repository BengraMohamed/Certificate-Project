import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import Switch from "@mui/material/Switch";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import FormField from "./FormField";

function Tags({ blogData, updateBlogData }) {
  return (
    <MDBox>
      <MDTypography variant="h5">Settings</MDTypography>
      <MDBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              options={["Technology", "Lifestyle", "Travel", "Education", "Health"]}
              value={blogData.category}
              onChange={(_, value) => updateBlogData("category", value)}
              renderInput={(params) => <FormField {...params} label="Category" />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              multiple
              options={["ReactJS", "JavaScript", "Web Development", "Health", "Travel"]}
              value={blogData.tags}
              onChange={(_, value) => updateBlogData("tags", value)}
              renderInput={(params) => <FormField {...params} label="Tags" />}
            />
          </Grid>
        </Grid>
        <MDBox mt={3}>
          <Switch
            checked={blogData.isActive}
            onChange={(e) => updateBlogData("isActive", e.target.checked)}
          />
          <MDTypography component="label" variant="button" fontWeight="regular" color="text">
            Is Active
          </MDTypography>
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

Tags.propTypes = {
  blogData: PropTypes.object.isRequired,
  updateBlogData: PropTypes.func.isRequired,
};

export default Tags;

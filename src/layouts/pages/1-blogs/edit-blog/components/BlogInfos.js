import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import FormField from "./FormField";

function BlogInfos() {
  return (
    <Card>
      <MDBox p={3}>
        <MDTypography variant="h5">Blog Information</MDTypography>
        <MDBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormField type="text" label="Title" defaultValue="Blog Title" />
            </Grid>
            <Grid item xs={12}>
              <FormField
                type="text"
                label="Description"
                defaultValue="Brief description of the blog."
              />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BlogInfos;

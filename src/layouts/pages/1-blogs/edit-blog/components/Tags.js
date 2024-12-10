import React, { useState } from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDEditor from "components/MDEditor";
import Autocomplete from "@mui/material/Autocomplete";
import MDInput from "components/MDInput";

function Tags() {
  const [editorValue, setEditorValue] = useState(
    `<p>
      Start writing your blog content here...
    </p>`
  );

  return (
    <MDBox mt={3}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <MDBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
            <MDTypography component="label" variant="button" fontWeight="regular" color="text">
              Content
            </MDTypography>
          </MDBox>
          <MDEditor value={editorValue} onChange={(value) => setEditorValue(value)} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MDBox mb={3}>
            <Autocomplete
              defaultValue="Category"
              options={["Technology", "Lifestyle", "Business", "Health", "Travel"]}
              renderInput={(params) => <MDInput {...params} variant="standard" />}
            />
          </MDBox>
          <MDBox mb={3}>
            <Autocomplete
              multiple
              defaultValue={["React", "JavaScript"]}
              options={["React", "JavaScript", "Web Development", "Health", "Lifestyle"]}
              renderInput={(params) => <MDInput {...params} variant="standard" />}
            />
          </MDBox>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default Tags;

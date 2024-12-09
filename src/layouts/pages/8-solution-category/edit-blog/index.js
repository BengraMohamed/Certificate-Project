import { useState } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDEditor from "components/MDEditor";

// Layout components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Placeholder Image
import defaultImage from "assets/images/blog/default-image.jpg";

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

// EditBlog component
function EditBlog() {
  const [editorValue, setEditorValue] = useState(
    `<p>
      Start writing your blog content here...
    </p>`
  );
  const [mainImage, setMainImage] = useState(defaultImage);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setMainImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox my={3}>
        <MDBox mb={6}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={6}>
              <MDTypography variant="h4" fontWeight="medium">
                Edit Blog
              </MDTypography>
              <MDBox mt={1} mb={2}>
                <MDTypography variant="body2" color="text">
                  Modify the details of your blog below.
                </MDTypography>
              </MDBox>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MDBox display="flex" justifyContent="flex-end">
                <MDButton variant="gradient" color="info">
                  Save
                </MDButton>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <Grid container spacing={3}>
          {/* Blog Main Image */}
          <Grid item xs={12} lg={4}>
            <Card>
              <MDBox p={3} textAlign="center">
                <MDBox
                  component="img"
                  src={mainImage}
                  alt="Main Blog Image"
                  borderRadius="lg"
                  shadow="sm"
                  width="100%"
                  height="100%"
                  mb={2}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                  id="upload-image"
                />
                <label htmlFor="upload-image">
                  <MDButton variant="gradient" color="info" component="span">
                    Upload Image
                  </MDButton>
                </label>
              </MDBox>
            </Card>
          </Grid>

          {/* Blog Info */}
          <Grid item xs={12} lg={8}>
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
                <MDBox mt={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <MDBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                        <MDTypography
                          component="label"
                          variant="button"
                          fontWeight="regular"
                          color="text"
                        >
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
                          options={[
                            "React",
                            "JavaScript",
                            "Web Development",
                            "Health",
                            "Lifestyle",
                          ]}
                          renderInput={(params) => <MDInput {...params} variant="standard" />}
                        />
                      </MDBox>
                      <FormField type="text" label="Author" defaultValue="Author Name" />
                      <FormField type="text" label="Is Active" defaultValue="true" />
                    </Grid>
                  </Grid>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default EditBlog;

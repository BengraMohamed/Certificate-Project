import { useState, useMemo } from "react";
import PropTypes from "prop-types";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Card from "@mui/material/Card";
import Autocomplete from "@mui/material/Autocomplete";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDEditor from "components/MDEditor";
import MDDropzone from "components/MDDropzone";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function FormField({ label, ...rest }) {
  return <MDInput {...rest} label={label} variant="standard" fullWidth />;
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
};

function BlogDetails({ blogData, updateBlogData }) {
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

BlogDetails.propTypes = {
  blogData: PropTypes.object.isRequired,
  updateBlogData: PropTypes.func.isRequired,
};

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

function Settings({ blogData, updateBlogData }) {
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

Settings.propTypes = {
  blogData: PropTypes.object.isRequired,
  updateBlogData: PropTypes.func.isRequired,
};

function AddNewBlog({ addBlog }) {
  const [activeStep, setActiveStep] = useState(0);
  const [blogData, setBlogData] = useState({
    title: "",
    author: "",
    description: "",
    mainImage: null,
    category: "",
    tags: [],
    isActive: false,
  });

  const handleNext = () => {
    if (activeStep === 2) {
      addBlog(blogData);
    }
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const updateBlogData = (field, value) => {
    setBlogData((prev) => ({ ...prev, [field]: value }));
  };

  const steps = ["1. Blog Details", "2. Media", "3. Settings"];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6} mb={8} textAlign="center">
        <MDBox mb={1}>
          <MDTypography variant="h3" fontWeight="bold">
            Add New Blog
          </MDTypography>
        </MDBox>
        <MDTypography variant="h5" fontWeight="regular" color="secondary">
          This information will describe more about the blog.
        </MDTypography>
      </MDBox>
      <MDBox mt={5} mb={9}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox mt={-3} mb={3} mx={2}>
                <Stepper activeStep={activeStep} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </MDBox>
              <MDBox p={2}>
                {activeStep === 0 && (
                  <BlogDetails blogData={blogData} updateBlogData={updateBlogData} />
                )}
                {activeStep === 1 && <Media blogData={blogData} updateBlogData={updateBlogData} />}
                {activeStep === 2 && (
                  <Settings blogData={blogData} updateBlogData={updateBlogData} />
                )}
                <MDBox mt={3} display="flex" justifyContent="space-between">
                  <MDButton
                    variant="gradient"
                    color="light"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    Back
                  </MDButton>
                  <MDButton variant="gradient" color="dark" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? "Publish" : "Next"}
                  </MDButton>
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

AddNewBlog.propTypes = {
  addBlog: PropTypes.func.isRequired,
};

export default AddNewBlog;

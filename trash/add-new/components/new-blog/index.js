import { useState, useMemo } from "react";
import PropTypes from "prop-types"; // Add this line
import Switch from "@mui/material/Switch";

// @mui material components
import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Card from "@mui/material/Card";
import Autocomplete from "@mui/material/Autocomplete";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDEditor from "components/MDEditor";
import MDDropzone from "components/MDDropzone";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Reusable FormField component
function FormField({ label, ...rest }) {
  return <MDInput {...rest} label={label} variant="standard" fullWidth />;
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
};

// Step 1: Blog Details
function BlogDetails() {
  return (
    <MDBox>
      <MDTypography variant="h5">Blog Details</MDTypography>
      <MDBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormField type="text" label="Title" />
          </Grid>
          <Grid item xs={12}>
            <FormField type="text" label="Author" />
          </Grid>
        </Grid>
        <MDBox mt={3}>
          <MDBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
            <MDTypography component="label" variant="button" fontWeight="regular" color="text">
              Description
            </MDTypography>
          </MDBox>
          <MDEditor />
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

// Step 2: Media
function Media() {
  return (
    <MDBox>
      <MDTypography variant="h5">Media</MDTypography>
      <MDBox mt={3}>
        <MDBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
          <MDTypography component="label" variant="button" fontWeight="regular" color="text">
            Blog Main Image
          </MDTypography>
        </MDBox>
        {useMemo(
          () => (
            <MDDropzone options={{ addRemoveLinks: true }} />
          ),
          []
        )}
      </MDBox>
    </MDBox>
  );
}

// Step 3: Settings
function Settings() {
  return (
    <MDBox>
      <MDTypography variant="h5">Settings</MDTypography>
      <MDBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              options={["Technology", "Lifestyle", "Travel", "Education", "Health"]}
              renderInput={(params) => <FormField {...params} label="Category" />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              multiple
              options={["ReactJS", "JavaScript", "Web Development", "Health", "Travel"]}
              renderInput={(params) => <FormField {...params} label="Tags" />}
            />
          </Grid>
        </Grid>
        <MDBox mt={3}>
          <FormField type="checkbox" label="Is Active" />
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

// Main AddNewBlog Page
function AddNewBlog() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["1. Blog Details", "2. Media", "3. Settings"];
  const isLastStep = activeStep === steps.length - 1;

  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <BlogDetails />;
      case 1:
        return <Media />;
      case 2:
        return <Settings />;
      default:
        return null;
    }
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={5} mb={9}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={8}>
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
                <MDBox>
                  {getStepContent(activeStep)}
                  <MDBox mt={3} width="100%" display="flex" justifyContent="space-between">
                    {activeStep === 0 ? (
                      <MDBox />
                    ) : (
                      <MDButton variant="gradient" color="light" onClick={handleBack}>
                        Back
                      </MDButton>
                    )}
                    <MDButton
                      variant="gradient"
                      color="dark"
                      onClick={!isLastStep ? handleNext : undefined}
                    >
                      {isLastStep ? "Publish" : "Next"}
                    </MDButton>
                  </MDBox>
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

export default AddNewBlog;

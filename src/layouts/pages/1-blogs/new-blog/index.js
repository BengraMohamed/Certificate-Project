import React, { useState } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import BlogInfos from "./components/BlogInfos";
import Media from "./components/Media";
import Tags from "./components/Tags";

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
                  <BlogInfos blogData={blogData} updateBlogData={updateBlogData} />
                )}
                {activeStep === 1 && <Media blogData={blogData} updateBlogData={updateBlogData} />}
                {activeStep === 2 && <Tags blogData={blogData} updateBlogData={updateBlogData} />}
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

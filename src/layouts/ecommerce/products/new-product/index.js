import { useState, useMemo } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Card from "@mui/material/Card";
import Autocomplete from "@mui/material/Autocomplete";

import PropTypes from "prop-types";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDEditor from "components/MDEditor";
import MDDropzone from "components/MDDropzone";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// FormField component
function FormField({ label, ...rest }) {
  return <MDInput {...rest} label={label} variant="standard" fullWidth />;
}
FormField.propTypes = {
  label: PropTypes.string.isRequired, // Ensures `label` is required and is a string
};
// Main Component
function NewProduct() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["1. Product Info", "2. Media", "3. Socials", "4. Pricing"];
  const isLastStep = activeStep === steps.length - 1;

  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <MDBox>
            <MDTypography variant="h5">Product </MDTypography>
            <MDBox mt={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <FormField type="text" label="Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormField type="text" label="Weight" />
                </Grid>
              </Grid>
            </MDBox>
            <MDBox mt={2}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <MDBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                    <MDTypography
                      component="label"
                      variant="button"
                      fontWeight="regular"
                      color="text"
                    >
                      Description&nbsp;&nbsp;
                      <MDTypography variant="caption" color="text">
                        (optional)
                      </MDTypography>
                    </MDTypography>
                  </MDBox>
                  <MDEditor />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <MDBox mb={3}>
                    <MDBox mb={2} display="inline-block">
                      <MDTypography
                        component="label"
                        variant="button"
                        fontWeight="regular"
                        color="text"
                        textTransform="capitalize"
                      >
                        Category
                      </MDTypography>
                    </MDBox>
                    <Autocomplete
                      defaultValue="Clothing"
                      options={["Clothing", "Electronics", "Furniture", "Others", "Real Estate"]}
                      renderInput={(params) => <MDInput {...params} variant="standard" />}
                    />
                  </MDBox>
                  <MDBox mb={2} display="inline-block">
                    <MDTypography
                      component="label"
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      textTransform="capitalize"
                    >
                      Size
                    </MDTypography>
                  </MDBox>
                  <Autocomplete
                    defaultValue="Medium"
                    options={["Extra Large", "Extra Small", "Large", "Medium", "Small"]}
                    renderInput={(params) => <MDInput {...params} variant="standard" />}
                  />
                </Grid>
              </Grid>
            </MDBox>
          </MDBox>
        );
      case 1:
        return (
          <MDBox>
            <MDTypography variant="h5">Media</MDTypography>
            <MDBox mt={3}>
              <MDBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <MDTypography component="label" variant="button" fontWeight="regular" color="text">
                  Product Image
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
      case 2:
        return (
          <MDBox>
            <MDTypography variant="h5" fontWeight="bold">
              Socials
            </MDTypography>
            <MDBox mt={2}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormField type="text" label="Shoppify Handle" />
                </Grid>
                <Grid item xs={12}>
                  <FormField type="text" label="Facebook Account" />
                </Grid>
                <Grid item xs={12}>
                  <FormField type="text" label="Instagram Account" />
                </Grid>
              </Grid>
            </MDBox>
          </MDBox>
        );
      case 3:
        return (
          <MDBox>
            <MDTypography variant="h5">Pricing</MDTypography>
            <MDBox mt={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                  <FormField type="text" label="Price" placeholder="99.00" />
                </Grid>
                <Grid item xs={12} sm={4} sx={{ mt: 2 }}>
                  <Autocomplete
                    defaultValue="USD"
                    options={["BTC", "CNY", "EUR", "GBP", "INR", "USD"]}
                    renderInput={(params) => <MDInput {...params} variant="standard" />}
                  />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <FormField type="text" label="SKU" placeholder="71283476591" />
                </Grid>
              </Grid>
            </MDBox>
            <MDBox mt={1}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <MDBox my={2} display="inline-block">
                    <MDTypography
                      component="label"
                      variant="button"
                      fontWeight="regular"
                      color="text"
                    >
                      Tags
                    </MDTypography>
                  </MDBox>
                  <Autocomplete
                    multiple
                    defaultValue={["In Stock", "Out of Stock"]}
                    options={["Black Friday", "Expired", "Out of Stock", "In Stock", "Sale"]}
                    renderInput={(params) => <MDInput {...params} variant="standard" />}
                  />
                </Grid>
              </Grid>
            </MDBox>
          </MDBox>
        );
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={5} mb={9}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={8}>
            <MDBox mt={6} mb={8} textAlign="center">
              <MDBox mb={1}>
                <MDTypography variant="h3" fontWeight="bold">
                  Add New Product
                </MDTypography>
              </MDBox>
              <MDTypography variant="h5" fontWeight="regular" color="secondary">
                This information will describe more about the product.
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
                      {isLastStep ? "Send" : "Next"}
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

export default NewProduct;

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
import TextField from "@mui/material/TextField";

import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function FormField({ label, ...rest }) {
  return <MDInput {...rest} label={label} variant="standard" fullWidth />;
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
};

function ExamDetails({ examData, updateExamData }) {
  return (
    <MDBox>
      <MDTypography variant="h5">Exam Details</MDTypography>
      <MDBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormField
              type="text"
              label="Title"
              value={examData.title}
              onChange={(e) => updateExamData("title", e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <MDTypography component="label" variant="button" fontWeight="regular" color="text">
              Description
            </MDTypography>
            <MDEditor
              value={examData.description}
              onChange={(value) => updateExamData("description", value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              multiple
              options={["ReactJS", "JavaScript", "Web Development"]}
              value={examData.technologies}
              onChange={(_, value) => updateExamData("technologies", value)}
              renderInput={(params) => <FormField {...params} label="Technologies" />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              options={["Technology", "Health", "Education", "Science"]}
              value={examData.categories}
              onChange={(_, value) => updateExamData("categories", value)}
              renderInput={(params) => <FormField {...params} label="Categories" />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              multiple
              options={["ReactJS", "JavaScript", "Web Development"]}
              value={examData.prerequisites}
              onChange={(_, value) => updateExamData("prerequisites", value)}
              renderInput={(params) => <FormField {...params} label="Prerequisites" />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type="number"
              label="Attempts Allowed"
              value={examData.attemptsAllowed}
              onChange={(e) => updateExamData("attemptsAllowed", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type="number"
              label="Price"
              value={examData.price}
              onChange={(e) => updateExamData("price", e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormField
              type="number"
              label="Voucher"
              value={examData.voucherAvailable}
              onChange={(e) => updateExamData("voucher", e.target.value)}
            />
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

ExamDetails.propTypes = {
  examData: PropTypes.object.isRequired,
  updateExamData: PropTypes.func.isRequired,
};

function Media({ examData, updateExamData }) {
  return (
    <MDBox>
      <MDTypography variant="h5">Media</MDTypography>
      <MDBox mt={3}>
        <MDTypography component="label" variant="button" fontWeight="regular" color="text">
          Main Image
        </MDTypography>
        {useMemo(
          () => (
            <MDDropzone
              options={{ addRemoveLinks: true }}
              onDrop={(files) => updateExamData("mainimg", files[0])}
            />
          ),
          [updateExamData]
        )}
      </MDBox>
    </MDBox>
  );
}

Media.propTypes = {
  examData: PropTypes.object.isRequired,
  updateExamData: PropTypes.func.isRequired,
};

function Settings({ examData, updateExamData }) {
  return (
    <MDBox>
      <MDTypography variant="h5">Settings</MDTypography>
      <MDBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              options={["", "PersonVue"]}
              value={examData.onSite}
              onChange={(_, value) => updateExamData("onSite", value)}
              renderInput={(params) => <FormField {...params} label="Onsite" />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              options={["", "OnVue", "Home"]}
              value={examData.remote}
              onChange={(_, value) => updateExamData("remote", value)}
              renderInput={(params) => <FormField {...params} label="Remote" />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type="number"
              label="Durtion"
              value={examData.durtion}
              onChange={(e) => updateExamData("durtion", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type="number"
              label="Language"
              value={examData.language}
              onChange={(e) => updateExamData("language", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type="number"
              label="Sum of Site"
              value={examData.sumOfSite}
              onChange={(e) => updateExamData("sumOfSite", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type="number"
              label="Reserved Places"
              value={examData.reservedPlaces}
              onChange={(e) => updateExamData("reservedPlaces", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type="text"
              label="Coupon ID"
              value={examData.copon || ""}
              onChange={(e) => updateExamData("copon", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              multiple
              options={["ObjectID1", "ObjectID2", "ObjectID3", "ObjectID4"]}
              value={examData.support || []}
              onChange={(event, value) => updateExamData("support", value)}
              renderInput={(params) => (
                <MDInput {...params} label="Select Support IDs" variant="standard" fullWidth />
              )}
            />
          </Grid>
        </Grid>
        <MDBox mt={3}>
          <Switch
            checked={examData.isActive}
            onChange={(e) => updateExamData("isActive", e.target.checked)}
          />
          <MDTypography component="label" variant="button" fontWeight="regular" color="text">
            Is Active
          </MDTypography>
        </MDBox>
        <MDBox mt={2}>
          <Switch
            container
            spacing={6}
            alignItems="center"
            checked={examData.inSlider}
            onChange={(e) => updateExamData("inSlider", e.target.checked)}
          />
          <MDTypography component="label" variant="button" fontWeight="regular" color="text">
            Is Slider
          </MDTypography>
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

Settings.propTypes = {
  examData: PropTypes.object.isRequired,
  updateExamData: PropTypes.func.isRequired,
};

function EditExam({ addExam }) {
  const [activeStep, setActiveStep] = useState(0);
  const [examData, setExamData] = useState({
    title: "",
    description: "",
    technologies: [],
    categories: [],
    prerequisites: [],
    mainimg: null,
    attemptsAllowed: 0,
    price: 0,
    voucherAvailable: 0,
    isActive: false,
    inSlider: false,
    onSite: "",
    remote: "",
    sumOfSite: 0,
    language: 0,
    reservedPlaces: 0,
    code: null,
    duration: 0,
    support: [],
  });

  const handleNext = () => {
    if (activeStep === 2) {
      addExam(examData);
    }
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const updateExamData = (field, value) => {
    setExamData((prev) => ({ ...prev, [field]: value }));
  };

  const steps = ["1. Exam Details", "2. Media", "3. Settings"];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6} mb={8} textAlign="center">
        <MDBox mb={1}>
          <MDTypography variant="h3" fontWeight="bold">
            Edit Exam
          </MDTypography>
        </MDBox>
        <MDTypography variant="h5" fontWeight="regular" color="secondary">
          Modify the details of your blog below.
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
                  <ExamDetails examData={examData} updateExamData={updateExamData} />
                )}
                {activeStep === 1 && <Media examData={examData} updateExamData={updateExamData} />}
                {activeStep === 2 && (
                  <Settings examData={examData} updateExamData={updateExamData} />
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
                    {activeStep === steps.length - 1 ? "Save" : "Next"}
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

EditExam.propTypes = {
  addExam: PropTypes.func.isRequired,
};

export default EditExam;

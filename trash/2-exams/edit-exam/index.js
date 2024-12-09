import React, { useState, useMemo, useEffect } from "react";
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
import MDDropzone from "components/MDDropzone";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Reuse FormField
function FormField({ label, ...rest }) {
  return <MDInput {...rest} label={label} variant="standard" fullWidth />;
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
};

// Reuse exam details components (ExamDetails1, ExamDetails2, ExamDetails3, Media, Settings)
// Reuse the same structure as provided in AddNewExam

function EditExam({ examId, fetchExamDetails, updateExam }) {
  const [activeStep, setActiveStep] = useState(0);
  const [examData, setExamData] = useState({
    title: "",
    description: "",
    technologies: [],
    categories: [],
    prerequisites: "",
    attemptsAllowed: 0,
    price: 0,
    isActive: false,
    mainimg: null,
    remote: "",
  });

  useEffect(() => {
    // Fetch exam details when the page loads
    fetchExamDetails(examId).then((data) => setExamData(data));
  }, [examId, fetchExamDetails]);

  const handleNext = () => {
    if (activeStep === 4) {
      updateExam(examId, examData);
    }
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const updateExamData = (field, value) => {
    setExamData((prev) => ({ ...prev, [field]: value }));
  };

  const steps = [
    "1. Exam Details (1)",
    "2. Exam Details (2)",
    "3. Exam Details (3)",
    "4. Media",
    "5. Settings",
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6} mb={8} textAlign="center">
        <MDTypography variant="h3" fontWeight="bold">
          Edit Exam
        </MDTypography>
        <MDTypography variant="h5" fontWeight="regular" color="secondary">
          Update the details of the exam.
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
              {/* <MDBox p={2}>
                {activeStep === 0 && (
                  <ExamDetails1 examData={examData} updateExamData={updateExamData} />
                )}
                {activeStep === 1 && (
                  <ExamDetails2 examData={examData} updateExamData={updateExamData} />
                )}
                {activeStep === 2 && (
                  <ExamDetails3 examData={examData} updateExamData={updateExamData} />
                )}
                {activeStep === 3 && <Media examData={examData} updateExamData={updateExamData} />}
                {activeStep === 4 && (
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
                    {activeStep === steps.length - 1 ? "Update" : "Next"}
                  </MDButton>
                </MDBox>
              </MDBox> */}
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

EditExam.propTypes = {
  examId: PropTypes.string.isRequired,
  fetchExamDetails: PropTypes.func.isRequired,
  updateExam: PropTypes.func.isRequired,
};

export default EditExam;

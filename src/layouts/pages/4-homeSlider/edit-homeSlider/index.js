import { useState } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
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

function EditHomeSlider({ editHomeSlider }) {
  const [sliderData, setSliderData] = useState({
    title: "",
    mainDescription: "",
    shortDescription: "",
    buttonText: "",
    buttonLink: "",
    backgroundImg: null,
  });

  const updateSliderData = (field, value) => {
    setSliderData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    addHomeSliedit(sliderData);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6} mb={8} textAlign="center">
        <MDBox mb={1}>
          <MDTypography variant="h3" fontWeight="bold">
            Edit Home Slider
          </MDTypography>
        </MDBox>
        <MDTypography variant="h5" fontWeight="regular" color="secondary">
          Modify th details of your Home Slider below.
        </MDTypography>
      </MDBox>
      <MDBox mt={5} mb={9}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <FormField
                      type="text"
                      label="Title"
                      value={sliderData.title}
                      onChange={(e) => updateSliderData("title", e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormField
                      type="text"
                      label="Main Description"
                      value={sliderData.mainDescription}
                      onChange={(e) => updateSliderData("mainDescription", e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormField
                      type="text"
                      label="Short Description"
                      value={sliderData.shortDescription}
                      onChange={(e) => updateSliderData("shortDescription", e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormField
                      type="text"
                      label="Button Text"
                      value={sliderData.buttonText}
                      onChange={(e) => updateSliderData("buttonText", e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormField
                      type="text"
                      label="Button Link"
                      value={sliderData.buttonLink}
                      onChange={(e) => updateSliderData("buttonLink", e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MDTypography
                      component="label"
                      variant="button"
                      fontWeight="regular"
                      color="text"
                    >
                      Background Image
                    </MDTypography>
                    <MDDropzone
                      options={{ addRemoveLinks: true }}
                      onDrop={(files) => updateSliderData("backgroundImg", files[0])}
                    />
                  </Grid>
                </Grid>
                <MDBox mt={3} display="flex" justifyContent="center">
                  <MDButton variant="gradient" color="dark" onClick={handleSubmit}>
                    Save
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

EditHomeSlider.propTypes = {
  editHomeSlider: PropTypes.func.isRequired,
};

export default EditHomeSlider;

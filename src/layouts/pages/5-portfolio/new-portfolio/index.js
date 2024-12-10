import { useState } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import PortfolioDetails from "./components/PortfolioDetails";
import Media from "./components/Media";

function AddNewPortfolio({ addPortfolio }) {
  const [portfolioData, setPortfolioData] = useState({
    title: "",
    mainDescription: "",
    mainImg: null,
    categories: [],
  });

  const updatePortfolioData = (field, value) => {
    setPortfolioData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    addPortfolio(portfolioData);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6} mb={8} textAlign="center">
        <MDBox mb={1}>
          <MDTypography variant="h3" fontWeight="bold">
            Add New Portfolio
          </MDTypography>
        </MDBox>
        <MDTypography variant="h5" fontWeight="regular" color="secondary">
          This information will describe more about the Portfolio.
        </MDTypography>
      </MDBox>
      <MDBox mt={5} mb={9}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2}>
                <PortfolioDetails
                  portfolioData={portfolioData}
                  updatePortfolioData={updatePortfolioData}
                />
                <Grid item xs={12} mt={3}>
                  <Media onImageUpload={(file) => updatePortfolioData("mainImg", file)} />
                </Grid>
                <MDBox mt={3} display="flex" justifyContent="center">
                  <MDButton variant="gradient" color="dark" onClick={handleSubmit}>
                    Publish
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

AddNewPortfolio.propTypes = {
  addPortfolio: PropTypes.func.isRequired,
};

export default AddNewPortfolio;

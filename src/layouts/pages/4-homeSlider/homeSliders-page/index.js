import { useState } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import DataTable from "examples/Tables/DataTable";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function SliderStatus({ isActive }) {
  return (
    <MDBadge
      variant="contained"
      color={isActive ? "success" : "error"}
      badgeContent={isActive ? "Active" : "Inactive"}
    />
  );
}

SliderStatus.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

function HomeSlidersPage() {
  const [sliders, setSliders] = useState([
    {
      id: 1,
      title: "Winter Sale",
      description: "Great discounts on winter products",
      buttonText: "Shop Now",
      isActive: true,
    },
    {
      id: 2,
      title: "Summer Collection",
      description: "Fresh arrivals for summer",
      buttonText: "Explore",
      isActive: false,
    },
  ]);

  const addSlider = (newSlider) =>
    setSliders((prev) => [...prev, { id: Date.now(), ...newSlider }]);

  const deleteSlider = (id) => setSliders((prev) => prev.filter((slider) => slider.id !== id));

  const slidersTableData = {
    columns: [
      { Header: "title", accessor: "title", align: "left" },
      { Header: "description", accessor: "description", align: "left" },
      { Header: "button text", accessor: "buttonText", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "actions", accessor: "actions", align: "center" },
    ],
    rows: sliders.map((slider) => ({
      title: slider.title,
      description: slider.description,
      buttonText: slider.buttonText,
      status: <SliderStatus isActive={slider.isActive} />,
      actions: (
        <MDBox display="flex" justifyContent="center" gap={1}>
          <Tooltip title="Edit Slider">
            <IconButton color="info">
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete Slider">
            <IconButton color="error" onClick={() => deleteSlider(slider.id)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </MDBox>
      ),
    })),
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox
        mx={2}
        mt={-1}
        py={3}
        px={2}
        variant="gradient"
        bgColor="info"
        borderRadius="lg"
        coloredShadow="info"
      >
        <MDTypography variant="h6" color="white">
          All Home Sliders
        </MDTypography>
      </MDBox>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <MDBox pt={3}>
                <DataTable
                  table={slidersTableData}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default HomeSlidersPage;

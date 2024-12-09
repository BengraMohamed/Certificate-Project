import React from "react";
import PropTypes from "prop-types";

// Material Dashboard 2 PRO React components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// BlogStatus Component
function BlogStatus({ isActive }) {
  return (
    <MDBadge
      variant="contained"
      color={isActive ? "success" : "error"}
      badgeContent={isActive ? "Active" : "Inactive"}
    />
  );
}

BlogStatus.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

// BlogsPage Component
function BlogsPage() {
  const blogsTableData = {
    columns: [
      { Header: "title", accessor: "title", width: "30%", align: "left" },
      { Header: "categories", accessor: "categories", width: "20%", align: "left" },
      { Header: "tags", accessor: "tags", width: "20%", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
    ],
    rows: [
      {
        title: "Understanding React Lifecycle",
        categories: "Programming",
        tags: "React, JavaScript",
        status: <BlogStatus isActive={true} />,
      },
      {
        title: "Guide to Healthy Living",
        categories: "Lifestyle",
        tags: "Health, Wellness",
        status: <BlogStatus isActive={true} />,
      },
      {
        title: "Travel Destinations in 2024",
        categories: "Travel",
        tags: "Adventure, Tourism",
        status: <BlogStatus isActive={false} />,
      },
      {
        title: "Exploring AI Trends",
        categories: "Technology",
        tags: "AI, Machine Learning",
        status: <BlogStatus isActive={true} />,
      },
    ],
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  All Blogs
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={blogsTableData}
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

export default BlogsPage;

import { useState } from "react";
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

function PortfolioPage() {
  const [portfolios, setPortfolios] = useState([]);

  const addPortfolio = (newPortfolio) =>
    setPortfolios((prev) => [...prev, { id: Date.now(), ...newPortfolio }]);

  const deletePortfolio = (id) =>
    setPortfolios((prev) => prev.filter((portfolio) => portfolio.id !== id));

  const portfolioTableData = {
    columns: [
      { Header: "Title", accessor: "title", align: "left" },
      { Header: "Description", accessor: "mainDescription", align: "left" },
      { Header: "Categories", accessor: "categories", align: "left" },
      { Header: "Image", accessor: "mainImg", align: "center" },
      { Header: "Actions", accessor: "actions", align: "center" },
    ],
    rows: portfolios.map((portfolio) => ({
      title: portfolio.title,
      mainDescription: portfolio.mainDescription,
      categories: portfolio.categories.join(", "),
      mainImg: portfolio.mainImg ? (
        <img
          src={URL.createObjectURL(portfolio.mainImg)}
          alt={portfolio.title}
          style={{ width: "50px", height: "50px", borderRadius: "8px" }}
        />
      ) : (
        "No Image"
      ),
      actions: (
        <MDBox display="flex" justifyContent="center" gap={1}>
          <Tooltip title="Delete Portfolio">
            <IconButton color="error" onClick={() => deletePortfolio(portfolio.id)}>
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
          All Portfolios
        </MDTypography>
      </MDBox>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <MDBox pt={3}>
                <DataTable
                  table={portfolioTableData}
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

export default PortfolioPage;

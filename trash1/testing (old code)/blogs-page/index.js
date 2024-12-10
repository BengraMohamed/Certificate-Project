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

function BlogsPage() {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "React Basics", categories: "Technology", tags: ["React"], isActive: true },
    { id: 2, title: "Healthy Living", categories: "Lifestyle", tags: ["Health"], isActive: false },
  ]);

  const addBlog = (newBlog) => setBlogs((prev) => [...prev, { id: Date.now(), ...newBlog }]);

  const deleteOneBlog = (id) => setBlogs((prev) => prev.filter((blog) => blog.id !== id));

  const blogsTableData = {
    columns: [
      { Header: "title", accessor: "title", align: "left" },
      { Header: "categories", accessor: "categories", align: "left" },
      { Header: "tags", accessor: "tags", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "actions", accessor: "actions", align: "center" },
    ],
    rows: blogs.map((blog) => ({
      title: blog.title,
      categories: blog.categories,
      tags: blog.tags.join(", "),
      status: <BlogStatus isActive={blog.isActive} />,
      actions: (
        <MDBox display="flex" justifyContent="center" gap={1}>
          <Tooltip title="Update Blog">
            <IconButton color="info">
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete Blog">
            <IconButton color="error" onClick={() => deleteOneBlog(blog.id)}>
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
          All Blogs
        </MDTypography>
      </MDBox>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
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

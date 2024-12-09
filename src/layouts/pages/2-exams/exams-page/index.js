import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

// ExamStatus component to show the status of the exam (e.g., active or inactive)
function ExamStatus({ isActive }) {
  return (
    <MDBadge
      variant="contained"
      color={isActive ? "success" : "error"}
      badgeContent={isActive ? "Active" : "Inactive"}
    />
  );
}

ExamStatus.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

function ExamsPage() {
  const navigate = useNavigate();
  const [exams, setExams] = useState([
    { id: 1, title: "Math Exam", date: "2024-12-15", duration: "2 hours", isActive: true },
    { id: 2, title: "Physics Exam", date: "2024-12-18", duration: "3 hours", isActive: false },
  ]);

  // Function to add a new exam
  const addExam = (newExam) => setExams((prev) => [...prev, { id: Date.now(), ...newExam }]);

  // Function to delete an exam
  const deleteOneExam = (id) => setExams((prev) => prev.filter((exam) => exam.id !== id));

  // Table data for displaying the exams
  const examsTableData = {
    columns: [
      { Header: "Title", accessor: "title", align: "left" },
      { Header: "Date", accessor: "date", align: "left" },
      { Header: "Duration", accessor: "duration", align: "left" },
      { Header: "Status", accessor: "status", align: "center" },
      { Header: "Actions", accessor: "actions", align: "center" },
    ],
    rows: exams.map((exam) => ({
      title: exam.title,
      date: exam.date,
      duration: exam.duration,
      status: <ExamStatus isActive={exam.isActive} />,
      actions: (
        <MDBox display="flex" justifyContent="center" gap={1}>
          <Tooltip title="Update Exam">
            <IconButton color="info">
              <EditIcon onClick={() => navigate(`/dashboard/2-exams/edit-exam/${exam.id}`)} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete Exam">
            <IconButton color="error" onClick={() => deleteOneExam(exam.id)}>
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
          All Exams
        </MDTypography>
      </MDBox>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <MDBox pt={3}>
                <DataTable
                  table={examsTableData}
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

export default ExamsPage;

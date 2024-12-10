import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import FormField from "./FormField";

function PortfolioDetails({ portfolioData, updatePortfolioData }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <FormField
          type="text"
          label="Title"
          value={portfolioData.title}
          onChange={(e) => updatePortfolioData("title", e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <FormField
          type="text"
          label="Main Description"
          value={portfolioData.mainDescription}
          onChange={(e) => updatePortfolioData("mainDescription", e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <FormField
          type="text"
          label="Category ID (comma-separated)"
          value={portfolioData.categories.join(", ")}
          onChange={(e) =>
            updatePortfolioData(
              "categories",
              e.target.value.split(",").map((id) => id.trim())
            )
          }
        />
      </Grid>
    </Grid>
  );
}

PortfolioDetails.propTypes = {
  portfolioData: PropTypes.shape({
    title: PropTypes.string,
    mainDescription: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  updatePortfolioData: PropTypes.func.isRequired,
};

export default PortfolioDetails;

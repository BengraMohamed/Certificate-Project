import { useState } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDEditor from "components/MDEditor";

// Layout components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Images
import productImage from "assets/images/products/product-11.jpg";

// Reusable FormField component
function FormField({ label, ...rest }) {
  return (
    <MDBox mb={2}>
      <MDInput {...rest} variant="standard" label={label} fullWidth />
    </MDBox>
  );
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
};

// EditProduct component
function EditProduct() {
  const [editorValue, setEditorValue] = useState(
    `<p>
      Long sleeves black denim jacket with a twisted design. Contrast stitching. Button up closure. White arrow prints on the back.
    </p>`
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox my={3}>
        <MDBox mb={6}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={6}>
              <MDTypography variant="h4" fontWeight="medium">
                Make the changes below
              </MDTypography>
              <MDBox mt={1} mb={2}>
                <MDTypography variant="body2" color="text">
                  We’re
                </MDTypography>
              </MDBox>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MDBox display="flex" justifyContent="flex-end">
                <MDButton variant="gradient" color="info">
                  save
                </MDButton>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <Grid container spacing={3}>
          {/* Product Image */}
          <Grid item xs={12} lg={4}>
            <Card
              sx={{
                "&:hover .card-header": {
                  transform: "translate3d(0, -50px, 0)",
                },
              }}
            >
              <MDBox
                position="relative"
                borderRadius="lg"
                mt={-3}
                mx={2}
                className="card-header"
                sx={{ transition: "transform 300ms cubic-bezier(0.34, 1.61, 0.7, 1)" }}
              >
                <MDBox
                  component="img"
                  src={productImage}
                  alt="Product Image"
                  borderRadius="lg"
                  shadow="sm"
                  width="100%"
                  height="100%"
                  position="relative"
                  zIndex={10}
                  mb={2}
                />
              </MDBox>
              <MDBox textAlign="center" pt={2} pb={3} px={3}>
                <MDBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mt={-10}
                  position="relative"
                  zIndex={1}
                >
                  <MDBox mr={1}>
                    <MDButton variant="gradient" color="info" size="small">
                      edit
                    </MDButton>
                  </MDBox>
                  <MDButton variant="outlined" color="dark" size="small">
                    remove
                  </MDButton>
                </MDBox>
                <MDTypography variant="h5" fontWeight="regular" sx={{ mt: 4 }}>
                  Product Image
                </MDTypography>
                <MDTypography variant="body2" color="text" sx={{ mt: 1.5, mb: 1 }}>
                  The place is close to Barceloneta Beach and bus stop just 2 min by walk and nearto
                  &#8220;Naviglio&#8221; where you can enjoy the main night life in Barcelona.
                </MDTypography>
              </MDBox>
            </Card>
          </Grid>

          {/* Product Info */}
          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={3}>
                <MDTypography variant="h5">Product Information</MDTypography>
                <MDBox mt={1}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <FormField type="text" label="Name" defaultValue="Minimal Bar Stool" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormField type="number" label="Weight" defaultValue={2} />
                    </Grid>
                  </Grid>
                </MDBox>
                <MDBox mt={1}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={3}>
                      <FormField type="text" label="Collection" defaultValue="Summer" />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <FormField type="text" label="Price" defaultValue="$90" />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <FormField type="number" label="Quantity" defaultValue={50} />
                    </Grid>
                  </Grid>
                </MDBox>
                <MDBox mt={1}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <MDBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                        <MDTypography
                          component="label"
                          variant="button"
                          fontWeight="regular"
                          color="text"
                        >
                          Description&nbsp;&nbsp;
                          <MDTypography variant="caption" fontWeight="regular" color="text">
                            (optional)
                          </MDTypography>
                        </MDTypography>
                      </MDBox>
                      <MDEditor value={editorValue} onChange={(value) => setEditorValue(value)} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <MDBox mb={3}>
                        <MDBox mb={1.625} display="inline-block">
                          <MDTypography
                            component="label"
                            variant="button"
                            fontWeight="regular"
                            color="text"
                            textTransform="capitalize"
                          >
                            Category
                          </MDTypography>
                        </MDBox>
                        <Autocomplete
                          defaultValue="Clothing"
                          options={[
                            "Clothing",
                            "Electronics",
                            "Furniture",
                            "Others",
                            "Real Estate",
                          ]}
                          renderInput={(params) => <MDInput {...params} variant="standard" />}
                        />
                      </MDBox>
                      <MDBox mb={1.625} display="inline-block">
                        <MDTypography
                          component="label"
                          variant="button"
                          fontWeight="regular"
                          color="text"
                          textTransform="capitalize"
                        >
                          Color
                        </MDTypography>
                      </MDBox>
                      <Autocomplete
                        defaultValue="Black"
                        options={["Black", "Blue", "Green", "Orange", "White"]}
                        renderInput={(params) => <MDInput {...params} variant="standard" />}
                      />
                    </Grid>
                  </Grid>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>

          {/* Socials */}
          <Grid item xs={12} lg={4}>
            <Card>
              <MDBox p={3}>
                <MDTypography variant="h5" fontWeight="bold">
                  Socials
                </MDTypography>
                <MDBox mt={1}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <FormField type="text" label="Shoppify Handle" defaultValue="@soft" />
                    </Grid>
                    <Grid item xs={12}>
                      <FormField type="text" label="Facebook Account" defaultValue="https://..." />
                    </Grid>
                    <Grid item xs={12}>
                      <FormField type="text" label="Instagram Account" defaultValue="https://..." />
                    </Grid>
                  </Grid>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>

          {/* Pricing */}
          <Grid item xs={12} lg={8}>
            <Card sx={{ overflow: "visible" }}>
              <MDBox p={3}>
                <MDTypography variant="h5" fontWeight="bold">
                  Pricing
                </MDTypography>
                <MDBox mt={1}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={3}>
                      <FormField type="number" label="Price" defaultValue="99.00" />
                    </Grid>
                    <Grid item xs={12} sm={4} sx={{ mt: 2 }}>
                      <Autocomplete
                        defaultValue="USD"
                        options={["BTC", "CNY", "EUR", "GBP", "INR", "USD"]}
                        renderInput={(params) => <MDInput {...params} variant="standard" />}
                      />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                      <FormField type="text" label="SKU" defaultValue="71283476591" />
                    </Grid>
                  </Grid>
                </MDBox>
                <MDBox mt={1}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <MDBox my={2} display="inline-block">
                        <MDTypography
                          component="label"
                          variant="button"
                          fontWeight="regular"
                          color="text"
                        >
                          Tags
                        </MDTypography>
                      </MDBox>
                      <Autocomplete
                        multiple
                        defaultValue={["In Stock", "Out of Stock"]}
                        options={["Black Friday", "Expired", "Out of Stock", "In Stock", "Sale"]}
                        renderInput={(params) => <MDInput {...params} variant="standard" />}
                      />
                    </Grid>
                  </Grid>
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

export default EditProduct;

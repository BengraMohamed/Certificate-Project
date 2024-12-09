import { useState } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDBadge from "components/MDBadge";
import MDProgress from "components/MDProgress";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// react-images-viewer components
import ImgsViewer from "react-images-viewer";

// Images
import blackChair from "assets/images/ecommerce/black-chair.jpeg";
import chairPink from "assets/images/ecommerce/chair-pink.jpeg";
import chairSteel from "assets/images/ecommerce/chair-steel.jpeg";
import chairWood from "assets/images/ecommerce/chair-wood.jpeg";
import image1 from "assets/images/products/product-details-1.jpg";
import image2 from "assets/images/products/product-details-2.jpg";
import image3 from "assets/images/products/product-details-3.jpg";
import image4 from "assets/images/products/product-details-4.jpg";
import image5 from "assets/images/products/product-details-5.jpg";

// DefaultCell Component
function DefaultCell({ children }) {
  return (
    <MDTypography variant="button" color="secondary">
      {children}
    </MDTypography>
  );
}

DefaultCell.propTypes = {
  children: PropTypes.string.isRequired,
};

// ProductCell Component
function ProductCell({ image, name }) {
  return (
    <MDBox display="flex" alignItems="center" pr={2}>
      <MDBox mr={2}>
        <MDAvatar src={image} alt={name} />
      </MDBox>
      <MDTypography variant="button" fontWeight="medium">
        {name}
      </MDTypography>
    </MDBox>
  );
}

ProductCell.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

// ProductImages Component
function ProductImages() {
  const [currentImage, setCurrentImage] = useState(image1);
  const [imgsViewer, setImgsViewer] = useState(false);
  const [imgsViewerCurrent, setImgsViewerCurrent] = useState(0);

  const handleSetCurrentImage = ({ currentTarget }) => {
    setCurrentImage(currentTarget.src);
    setImgsViewerCurrent(Number(currentTarget.id));
  };

  const openImgsViewer = () => setImgsViewer(true);
  const closeImgsViewer = () => setImgsViewer(false);
  const imgsViewerNext = () => setImgsViewerCurrent(imgsViewerCurrent + 1);
  const imgsViewerPrev = () => setImgsViewerCurrent(imgsViewerCurrent - 1);

  return (
    <MDBox>
      <ImgsViewer
        imgs={[{ src: image1 }, { src: image2 }, { src: image3 }, { src: image4 }, { src: image5 }]}
        isOpen={imgsViewer}
        onClose={closeImgsViewer}
        currImg={imgsViewerCurrent}
        onClickPrev={imgsViewerPrev}
        onClickNext={imgsViewerNext}
        backdropCloseable
      />

      <MDBox
        component="img"
        src={currentImage}
        alt="Product Image"
        shadow="lg"
        borderRadius="lg"
        width="100%"
        onClick={openImgsViewer}
      />
      <MDBox mt={2} pt={1}>
        <Stack direction="row" spacing={3}>
          {[image1, image2, image3, image4, image5].map((img, index) => (
            <MDBox
              key={index}
              component="img"
              id={index}
              src={img}
              alt={`small image ${index + 1}`}
              borderRadius="lg"
              shadow="md"
              width="100%"
              height="5rem"
              minHeight="5rem"
              sx={{ cursor: "pointer", objectFit: "cover" }}
              onClick={handleSetCurrentImage}
            />
          ))}
        </Stack>
      </MDBox>
    </MDBox>
  );
}

// ProductInfo Component
function ProductInfo() {
  return (
    <MDBox>
      <MDBox mb={1}>
        <MDTypography variant="h3" fontWeight="bold">
          Minimal Bar Stool
        </MDTypography>
      </MDBox>
      <MDTypography variant="h4" color="text">
        <Icon>star</Icon>
        <Icon>star</Icon>
        <Icon>star</Icon>
        <Icon>star</Icon>
        <Icon>star_half</Icon>
      </MDTypography>
      <MDBox mt={1}>
        <MDTypography variant="h6" fontWeight="medium">
          Price
        </MDTypography>
      </MDBox>
      <MDBox mb={1}>
        <MDTypography variant="h5" fontWeight="medium">
          $1,419
        </MDTypography>
      </MDBox>
      <MDBadge variant="contained" color="success" badgeContent="in stock" container />
      <MDBox mt={3} mb={1} ml={0.5}>
        <MDTypography variant="button" fontWeight="regular" color="text">
          Description
        </MDTypography>
      </MDBox>
      <MDBox component="ul" m={0} pl={4} mb={2}>
        <MDBox component="li" color="text" fontSize="1.25rem" lineHeight={1}>
          <MDTypography variant="body2" color="text" fontWeight="regular" verticalAlign="middle">
            The most beautiful curves of this swivel stool adds an elegant touch to any environment
          </MDTypography>
        </MDBox>
        <MDBox component="li" color="text" fontSize="1.25rem" lineHeight={1}>
          <MDTypography variant="body2" color="text" fontWeight="regular" verticalAlign="middle">
            Memory swivel seat returns to original seat position
          </MDTypography>
        </MDBox>
        <MDBox component="li" color="text" fontSize="1.25rem" lineHeight={1}>
          <MDTypography variant="body2" color="text" fontWeight="regular" verticalAlign="middle">
            Comfortable integrated layered chair seat cushion design
          </MDTypography>
        </MDBox>
        <MDBox component="li" color="text" fontSize="1.25rem" lineHeight={1}>
          <MDTypography variant="body2" color="text" fontWeight="regular" verticalAlign="middle">
            Fully assembled! No assembly required
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5}>
            <MDBox mb={1.5} lineHeight={0} display="inline-block">
              <MDTypography component="label" variant="button" color="text" fontWeight="regular">
                Frame Material
              </MDTypography>
            </MDBox>
            <Autocomplete
              defaultValue="Steel"
              options={["Aluminium", "Carbon", "Steel", "Wood"]}
              renderInput={(params) => <MDInput {...params} variant="standard" />}
            />
          </Grid>
          <Grid item xs={12} lg={5}>
            <MDBox mb={1.5} lineHeight={0} display="inline-block">
              <MDTypography component="label" variant="button" color="text" fontWeight="regular">
                Color
              </MDTypography>
            </MDBox>
            <Autocomplete
              defaultValue="White"
              options={["Black", "Blue", "Grey", "Pink", "Red", "White"]}
              renderInput={(params) => <MDInput {...params} variant="standard" />}
            />
          </Grid>
          <Grid item xs={12} lg={2}>
            <MDBox mb={1.5} lineHeight={0} display="inline-block">
              <MDTypography component="label" variant="button" color="text" fontWeight="regular">
                Quantity
              </MDTypography>
            </MDBox>
            <MDInput inputProps={{ type: "number" }} defaultValue={1} variant="standard" />
          </Grid>
        </Grid>
      </MDBox>
      <MDBox mt={3}>
        <Grid item xs={12} lg={5} container>
          <MDButton variant="gradient" color="info" fullWidth>
            add to cart
          </MDButton>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

// ReviewCell Component
function ReviewCell({ rating }) {
  const ratings = {
    0.5: ["star_outline", "star_outline", "star_outline", "star_outline", "star_outline"],
    1: ["star", "star_outline", "star_outline", "star_outline", "star_outline"],
    1.5: ["star", "star_half", "star_outline", "star_outline", "star_outline"],
    2: ["star", "star", "star_outline", "star_outline", "star_outline"],
    2.5: ["star", "star", "star_half", "star_outline", "star_outline"],
    3: ["star", "star", "star", "star_outline", "star_outline"],
    3.5: ["star", "star", "star", "star_half", "star_outline"],
    4: ["star", "star", "star", "star", "star_outline"],
    4.5: ["star", "star", "star", "star", "star_half"],
    5: ["star", "star", "star", "star", "star"],
  };

  const renderStars = ratings[rating].map((star, index) => (
    <Icon key={`star-${index}`}>{star}</Icon>
  ));

  return (
    <MDTypography variant="h6" color="text">
      {renderStars}
    </MDTypography>
  );
}

ReviewCell.defaultProps = {
  rating: 0,
};

ReviewCell.propTypes = {
  rating: PropTypes.number,
};

// ProductPage Component
function ProductPage() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox my={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5}>
            <ProductImages />
          </Grid>
          <Grid item xs={12} lg={7}>
            <ProductInfo />
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ProductPage;

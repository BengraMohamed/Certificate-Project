import React, { useState } from "react";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import defaultImage from "assets/images/blog/default-image.jpg";

function Media() {
  const [mainImage, setMainImage] = useState(defaultImage);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setMainImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card>
      <MDBox p={3} textAlign="center">
        <MDBox
          component="img"
          src={mainImage}
          alt="Main Blog Image"
          borderRadius="lg"
          shadow="sm"
          width="100%"
          height="100%"
          mb={2}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }}
          id="upload-image"
        />
        <label htmlFor="upload-image">
          <MDButton variant="gradient" color="info" component="span">
            Upload Image
          </MDButton>
        </label>
      </MDBox>
    </Card>
  );
}

export default Media;

import PropTypes from "prop-types";
import MDTypography from "components/MDTypography";
import MDDropzone from "components/MDDropzone";

function Media({ onImageUpload }) {
  return (
    <>
      <MDTypography component="label" variant="button" fontWeight="regular" color="text">
        Main Image
      </MDTypography>
      <MDDropzone options={{ addRemoveLinks: true }} onDrop={(files) => onImageUpload(files[0])} />
    </>
  );
}

Media.propTypes = {
  onImageUpload: PropTypes.func.isRequired,
};

export default Media;

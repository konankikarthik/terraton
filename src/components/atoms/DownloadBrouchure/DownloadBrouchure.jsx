import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import DownloadIcon from "@mui/icons-material/Download";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import "./styles.scss";

export const DownloadBrouchure = () => {
  return (
    <Box sx={{ width: 1 / 4 }} minHeight="500px" borderRadius={"15px"}>
      <Paper
        minHeight="500px"
        style={{
          borderRadius: "10px",
        }}
      >
        <Box
          style={{
            position: "relative",
            boxShadow:
              " rgba(0, 0, 0, 0.14) 0rem 0.25rem 1.25rem 0rem, rgba(0, 187, 212, 0.4) 0rem 0.4375rem 0.625rem -0.3125rem;",
          }}
        >
          <div className="blur-background"></div>
          <div className="dwnld-brchr-img"></div>
          <div className="brouchure-card-content-container">
            <Typography
              variant="h6"
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              style={{
                color: "#000",
                padding: 0,
                margin: 0,
                justifyContent: "center",
                paddingTop: "20px",
                fontSize: "2.25rem",
                fontFamily: "roboto-slab, serif",
                fontWeight: "bold",
                fontStyle: "normal",
                color: "#344767",
                lineHeight: "1.3",
                textAlign: "center",
              }}
            >
              Download EBrochure
            </Typography>
            <Button
              variant="contained"
              endIcon={<SaveAltIcon />}
              className="download-brchr-btn"
            ></Button>
          </div>
        </Box>
      </Paper>
    </Box>
  );
};

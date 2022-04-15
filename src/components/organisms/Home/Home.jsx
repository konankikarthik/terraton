import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import HomeCards from "../../atoms/HomeCards";
import DownloadBrouchure from "../../atoms/DownloadBrouchure";
import "./styles.scss";

export const Home = () => {
  return (
    <Container maxWidth="xl" style={{ padding: "0" }}>
      <div className="banner-container">
        <div className="banner-image"></div>
      </div>
      <Container
        style={{
          position: "relative",
          top: "-50px",
          backgroundColor: "#fff",
          borderRadius: "15px",
          boxShadow: "rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem",
        }}
      >
        <Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            style={{
              //   letterSpacing: "3px",
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
            }}
          >
            Featured Products
          </Typography>
          <HomeCards />
        </Box>
        <Box justifyContent={"center"} display="flex" marginTop="50px">
          <DownloadBrouchure />
        </Box>
      </Container>
    </Container>
  );
};

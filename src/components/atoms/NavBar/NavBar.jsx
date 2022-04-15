import React, { useState, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import HoverDropDown from "../HoverDropDown";
import { navOptions } from "../../../constantData";

export const NavBar = () => {
  const pages = ["Products", "Pricing", "Blog"];
  const anchorRef = React.useRef(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const options = [
    {
      name: "Products",
      options: [
        {
          name: "Indoor lightings",
          options: [
            {
              name: "Down light",
              options: [],
            },
            {
              name: "Tube light",
              options: [],
            },
            {
              name: "Bulb",
              options: [],
            },
          ],
        },
        {
          name: "Outdoor lightings",
          options: [
            {
              name: "Street light",
              options: [],
            },
          ],
        },
      ],
    },
    {
      name: "Company overview",
      options: [
        {
          name: "About us",
        },
        {
          name: "Our vision",
        },
        {
          name: "OEM service",
        },
      ],
    },
    {
      name: "Constact us",
      options: [],
    },
  ];

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{
        background: "transparent",
      }}
    >
      <AppBar
        position="static"
        style={{
          borderRadius: "15px",
          maxWidth: "85%",
          backgroundColor: "#fff",
          position: "fixed",
          top: "20px",
          color: "#344767",
          zIndex: "1000",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box width={1} display="flex" justifyContent="space-between">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                style={{
                  letterSpacing: "10px",
                  color: "#000",
                  paddingTop: "3px",
                  color: "#344767",
                }}
              >
                Terraton
              </Typography>
              <Box display="flex">
                {options.map((option) => {
                  return (
                    <HoverDropDown
                      name={option.name}
                      options={option.options}
                    />
                  );
                })}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

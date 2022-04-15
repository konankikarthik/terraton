import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import "./styles.scss";

export const HomeCards = () => {
  const boxStyle = {
    textAlign: "center",
  };
  return (
    <Box
      sx={{ width: "100%" }}
      display="flex"
      justifyContent={"space-around"}
      paddingTop="20px"
    >
      <Box sx={{ width: 1 / 4 }} style={boxStyle} fontSize="16px">
        <div className="led-bulb-img"></div>
        Low energy consumption of 0.5W max.Long life upto 10 years,with multiple
        colour options.Having wide range of Deco bulbs to our needs
      </Box>
      <Divider orientation="vertical" flexItem></Divider>
      <Box sx={{ width: 1 / 4 }} style={boxStyle} fontSize="16px">
        <div className="floor-light-img"></div>
        Wide operating voltage range,extruded aluminium body.Glare free optics
        and easy installation
      </Box>
    </Box>
  );
};

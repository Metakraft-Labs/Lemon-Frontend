import { Box, IconButton, Typography } from "@mui/material";
import React, { useContext } from "react";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";
import UserStore from "../../contexts/UserStore";

export default function Footer() {
  const { theme } = useContext(UserStore);

  return (
    <Box
      sx={{ background: "transparent", padding: "43px 57px 22px 57px" }}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Typography
        variant="h6"
        fontSize={"36px"}
        sx={{
          mr: 4,
          display: "flex",
          fontFamily: "Zen Dots",
          textTransform: "uppercase",
          color: theme === "light" ? "#000000" : "#FFFFFF",
        }}
      >
        {process.env.REACT_APP_NAME}
      </Typography>
      <Typography
        fontSize={"14px"}
        sx={{
          color: theme === "light" ? "#000000" : "#FFFFFF",
        }}
      >
        © 2020 Lift Media. All rights reserved.
      </Typography>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        gap={"20px"}
        alignItems={"center"}
      >
        <IconButton
          sx={{
            borderRadius: "50%",
            background: theme === "light" ? "#FFFFFF" : "#0A142F",
          }}
        >
          <BiLogoFacebook
            size={"20px"}
            color={theme === "light" ? "#0A142F" : "#FFFFFF"}
          />
        </IconButton>
        <IconButton
          sx={{
            borderRadius: "50%",
            background: theme === "light" ? "#FFFFFF" : "#0A142F",
          }}
        >
          <BiLogoInstagram
            size={"20px"}
            color={theme === "light" ? "#0A142F" : "#FFFFFF"}
          />
        </IconButton>
        <IconButton
          sx={{
            borderRadius: "50%",
            background: theme === "light" ? "#FFFFFF" : "#0A142F",
          }}
        >
          <BiLogoTwitter
            size={"20px"}
            color={theme === "light" ? "#0A142F" : "#FFFFFF"}
          />
        </IconButton>
      </Box>
    </Box>
  );
}

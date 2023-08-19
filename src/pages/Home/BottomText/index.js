import { Box, Typography } from "@mui/material";
import React from "react";
import Button from "../../../components/Button";

export default function BottomText() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      pt={"74px"}
    >
      <Typography
        fontSize={"80px"}
        sx={{
          background: "linear-gradient(219deg, #CCC 0%, #575757 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Play Explore
      </Typography>
      <Typography fontSize={"24px"} color={"#757575"}>
        Now don’t Just Spend Your Time but Earn By Playing
      </Typography>
      <Button
        border={"#FFFFFF"}
        style={{
          borderRadius: "16px",
          background: "#FFFFFF",
          color: "#000000",
          height: "70px",
          width: "251px",
          "&:hover": {
            background: "rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        Contact Us
      </Button>
    </Box>
  );
}

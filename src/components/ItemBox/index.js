import { Box, Typography } from "@mui/material";
import React, { useRef } from "react";

export default function ItemBox({ image, title, description, style = {} }) {
  const ref = useRef(0);

  return (
    <Box
      sx={{
        width: "357px",
        height: "257px",
        borderRadius: "17.625px",
        backgroundImage: `url(${image})`,
        backgroundSize: `${style?.width || "357px"} ${
          style?.height || "257px"
        }`,
        backgroundRepeat: "no-repeat",
        cursor: "pointer",
        ...style,
      }}
      onMouseOver={() => {
        ref.current.style.display = "block";
      }}
      onMouseLeave={() => {
        ref.current.style.display = "none";
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          display: "none",
          height: "100%",
          width: "100%",
          borderRadius: style?.borderRadius || "17.625px",
          padding: "1rem",
          overflow: "hidden",
        }}
        ref={ref}
      >
        <Typography
          textAlign={"center"}
          fontSize={"20px"}
          color={"#FFFFFF"}
          mb={"5px"}
        >
          {title}
        </Typography>
        <Typography textAlign={"center"} fontSize={"20px"} color={"#FFFFFF"}>
          {description?.length > 193
            ? description?.substring(0, 190) + "..."
            : description}
        </Typography>
      </Box>
    </Box>
  );
}

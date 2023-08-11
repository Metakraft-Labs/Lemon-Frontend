import { Button, CircularProgress } from "@mui/material";
import React from "react";

export default function ButtonComponent({
  children,
  height,
  width,
  fontColor,
  color,
  border,
  style,
  loading,
  ...props
}) {
  return (
    <Button
      sx={{
        background: color || "linear-gradient(43deg, #DAAD76 0%, #FA4947 100%)",
        border: border || "2px solid",
        ...(!border
          ? {
              borderImageSource:
                "linear-gradient(43deg, #DAAD76 0%, #FA4947 100%)",
              borderImageSlice: 1,
            }
          : {}),
        height: height || "44px",
        width: width || "194px",
        color: fontColor || "#FFFFFF",
        ...style,
      }}
      {...(loading ? { disabled: true } : {})}
      {...props}
    >
      {loading ? <CircularProgress size={"2rem"} /> : children}
    </Button>
  );
}

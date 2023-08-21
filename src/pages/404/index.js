import { Typography } from "@mui/material";
import React from "react";
import Title from "../../shared/Title";

export default function Error404() {
  return (
    <>
      <Title title={"404"} />
      <Typography variant="h1" textAlign={"center"}>
        NOT FOUND
      </Typography>
    </>
  );
}

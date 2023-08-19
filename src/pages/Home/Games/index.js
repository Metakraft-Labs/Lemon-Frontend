import { Box, Grid } from "@mui/material";
import React from "react";
import demoImg from "../../../assets/images/demoimg.png";
import ItemBox from "../../../components/ItemBox";

export default function Games() {
  return (
    <Grid
      container
      gap={"20px"}
      gridTemplateColumns={"1fr 1fr"}
      sx={{
        md: {
          gridTemplateColumns: "1fr",
        },
      }}
      height={"700px"}
      paddingLeft={"84px"}
      paddingRight={"84px"}
      pt={"10px"}
      justifyContent={"space-between"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        width={"475px"}
      >
        <ItemBox
          title={"Demo"}
          image={demoImg}
          style={{ width: "100%", height: "462px" }}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          }
          link={"/games/1"}
        />
        <Box display={"flex"} justifyContent={"space-between"}>
          <ItemBox
            title={"Demo"}
            image={demoImg}
            style={{ width: "304px", height: "185px" }}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            }
            link={"/games/1"}
          />
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <ItemBox
              title={"Demo"}
              image={demoImg}
              style={{ width: "136px", height: "90px" }}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
              }
              link={"/games/1"}
            />
            <ItemBox
              title={"Demo"}
              image={demoImg}
              style={{ width: "136px", height: "90px" }}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
              }
              link={"/games/1"}
            />
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        height={"100%"}
        width={"785px"}
      >
        <ItemBox
          title={"Demo"}
          image={demoImg}
          style={{ height: "100%", width: "100%" }}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          }
          link={"/games/1"}
        />
      </Box>
    </Grid>
  );
}

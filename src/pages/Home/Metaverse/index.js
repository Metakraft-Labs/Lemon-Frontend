import { Grid } from "@mui/material";
import React from "react";
import demoImg from "../../../assets/images/demoimg.png";
import ItemBox from "../../../components/ItemBox";

export default function Metaverse() {
  return (
    <Grid
      container
      gap={"75px"}
      gridAutoColumns={"1fr 1fr 1fr"}
      sx={{
        md: {
          gridTemplateColumns: "1fr",
        },
      }}
      paddingLeft={"84px"}
      paddingRight={"84px"}
      pt={"10px"}
      mt={"53px"}
    >
      <ItemBox
        title={"Demo"}
        style={{ width: "400px", height: "400px" }}
        image={demoImg}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
        link={"/metaverse/1"}
      />
      <ItemBox
        title={"Demo"}
        style={{ width: "400px", height: "400px" }}
        image={demoImg}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
        link={"/metaverse/1"}
      />
      <ItemBox
        title={"Demo"}
        style={{ width: "400px", height: "400px" }}
        image={demoImg}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
        link={"/metaverse/1"}
      />
    </Grid>
  );
}

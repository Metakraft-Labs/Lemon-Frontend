import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import demoImg from "../../../assets/images/demoimg.png";
import ItemBox from "../../../components/ItemBox";
import UserStore from "../../../contexts/UserStore";

export default function AiList() {
  const { theme } = useContext(UserStore);

  return (
    <Box padding={"20px"}>
      <Typography variant="h1" fontSize={"50px"} fontWeight={"700"}>
        AI
      </Typography>
      <Divider
        sx={{
          border: `1px solid var(--dark, ${
            theme === "light" ? "#0A142F" : "#FFFFFF"
          })`,
          width: "20%",
          opacity: "0.12",
        }}
      />
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
          image={demoImg}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          }
          link={"/ai-bots/1"}
        />
        <ItemBox
          title={"Demo"}
          image={demoImg}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          }
          link={"/ai-bots/1"}
        />
        <ItemBox
          title={"Demo"}
          image={demoImg}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          }
          link={"/ai-bots/1"}
        />
      </Grid>
    </Box>
  );
}

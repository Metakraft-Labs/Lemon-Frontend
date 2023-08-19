import { Box, Grid, IconButton, Typography } from "@mui/material";
import React, { useContext } from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import demoImg from "../../../assets/images/demoimg.png";
import Input from "../../../components/Input";
import ItemBox from "../../../components/ItemBox";
import UserStore from "../../../contexts/UserStore";

export default function Ai() {
  const { theme } = useContext(UserStore);

  return (
    <Grid
      container
      gap={"75px"}
      gridAutoColumns={"506px 223px 473px"}
      paddingLeft={"84px"}
      paddingRight={"84px"}
      pt={"10px"}
      mt={"53px"}
    >
      <Box
        borderRadius={"20px"}
        width={"506px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        sx={{ background: "linear-gradient(136deg, #9747FF 0%, #FF6813 100%)" }}
      >
        <Box padding={"20px"}>
          <Typography textAlign={"end"} fontSize={"24px"} color={"#FFFFFF"}>
            Stay Up To Date
          </Typography>
          <Typography textAlign={"end"} fontSize={"48px"} color={"#FFFFFF"}>
            Get Your
          </Typography>
          <Typography textAlign={"end"} fontSize={"48px"} color={"#FFFFFF"}>
            Newsletter
          </Typography>
          <Input
            placeholder={"Enter Your Email"}
            width={"450px"}
            style={{
              background:
                theme === "light"
                  ? "rgba(255, 255, 255, 0.51)"
                  : "rgba(0, 0, 0, 0.51)",
              float: "right",
            }}
          />
        </Box>

        <Box
          borderRadius={"20px 50px 20px 20px"}
          sx={{ background: theme === "light" ? "#FFFFFF" : "#0A1929" }}
          width={"100%"}
          display={"flex"}
          gap={"60px"}
          padding={"30px"}
        >
          <IconButton>
            <AiOutlineWhatsApp
              size={"49px"}
              color={theme === "light" ? "#9747FF" : "#FFFFFF"}
            />
          </IconButton>
          <IconButton>
            <AiOutlineFacebook
              size={"49px"}
              color={theme === "light" ? "#9747FF" : "#FFFFFF"}
            />
          </IconButton>
          <IconButton>
            <AiOutlineInstagram
              size={"49px"}
              color={theme === "light" ? "#9747FF" : "#FFFFFF"}
            />
          </IconButton>
          <IconButton>
            <AiOutlineTwitter
              size={"49px"}
              color={theme === "light" ? "#9747FF" : "#FFFFFF"}
            />
          </IconButton>
        </Box>
      </Box>
      <Box
        borderRadius={"20px"}
        width={"224px"}
        display={"flex"}
        flexDirection={"column"}
        gap={"24px"}
      >
        <ItemBox
          title={"Demo"}
          style={{ width: "100%", height: "224px" }}
          image={demoImg}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          }
          link={"/ai-bots/1"}
        />
        <ItemBox
          title={"Demo"}
          style={{ width: "100%", height: "224px" }}
          image={demoImg}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          }
          link={"/ai-bots/1"}
        />
      </Box>
      <ItemBox
        title={"Demo"}
        style={{ width: "470px", height: "472px" }}
        image={demoImg}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
        link={"/ai-bots/1"}
      />
    </Grid>
  );
}

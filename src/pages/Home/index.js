import { Box, Divider } from "@mui/material";
import React from "react";
import Footer from "../../components/Footer";
import Title from "../../shared/Title";
import Ai from "./Ai";
import BottomText from "./BottomText";
import Games from "./Games";
import Header from "./Header";
import Metaverse from "./Metaverse";

export default function Home() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.5) 46%, rgba(91,104,223,0.4) 48%, rgba(115,224,169,0.6) 78%)",
      }}
    >
      <Title title={"Home"} />
      <Header />
      <Games />
      <Metaverse />
      <Ai />
      <BottomText />
      <Box display={"flex"} justifyContent={"center"}>
        <Divider
          sx={{
            marginTop: "43px",
            border: "1px solid var(--dark, #0A142F)",
            width: "90%",
            opacity: "0.12",
          }}
        />
      </Box>
      <Footer />
    </Box>
  );
}

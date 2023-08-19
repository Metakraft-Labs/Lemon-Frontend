import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ReactComponent as LeftArrowIcon } from "../../../assets/icons/left-arrow.svg";
import { ReactComponent as RightArrowIcon } from "../../../assets/icons/right-arrow.svg";
import consoleImage from "../../../assets/images/console.png";
import demoImg from "../../../assets/images/demoimg.png";
import ItemBox from "../../../components/ItemBox";

export default function Header() {
  const [selectedSlide, setSelectedSlide] = useState(0);

  return (
    <Box
      sx={{
        backgroundImage: `url(${consoleImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <Box width={"600px"} paddingLeft={"84px"} pt={"44px"}>
        <Typography
          fontSize={"80px"}
          fontWeight={"600"}
          lineHeight={"104.5%"}
          sx={{
            background: "linear-gradient(270deg, #EAADFF 0%, #FFC46C 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Find Games in a Click
        </Typography>
        <Box display={"flex"} gap={"23px"} justifyContent={"start"}>
          <IconButton
            onClick={() => {
              setSelectedSlide((slide) => slide - 1);
            }}
          >
            <LeftArrowIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              setSelectedSlide((slide) => slide + 1);
            }}
          >
            <RightArrowIcon />
          </IconButton>
        </Box>
      </Box>
      <Box paddingLeft={"84px"} pt={"44px"}>
        <Carousel
          selectedItem={selectedSlide}
          showStatus={false}
          autoPlay={true}
          showArrows={false}
          infiniteLoop={true}
        >
          <Box display={"flex"} gap="10px">
            <ItemBox
              image={demoImg}
              title={"Demo"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
              }
            />
            <ItemBox
              image={demoImg}
              title={"Demo"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
              }
            />
            <ItemBox
              image={demoImg}
              title={"Demo"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
              }
            />
            <ItemBox
              image={demoImg}
              title={"Demo"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
              }
            />
          </Box>
          <Box display={"flex"} gap="10px">
            <ItemBox
              image={demoImg}
              title={"Demo"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
              }
            />
            <ItemBox
              image={demoImg}
              title={"Demo"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
              }
            />
            <ItemBox
              image={demoImg}
              title={"Demo"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
              }
            />
            <ItemBox
              image={demoImg}
              title={"Demo"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
              }
            />
          </Box>
        </Carousel>
      </Box>
    </Box>
  );
}

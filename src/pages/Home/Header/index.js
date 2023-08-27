import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { list } from "../../../apis/entities";
import { ReactComponent as LeftArrowIcon } from "../../../assets/icons/left-arrow.svg";
import { ReactComponent as RightArrowIcon } from "../../../assets/icons/right-arrow.svg";
import consoleImage from "../../../assets/images/console.png";
import ItemBox from "../../../components/ItemBox";

export default function Header() {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [entities, setEntities] = useState(null);

  const fetchEntities = useCallback(async () => {
    const res = await list();

    setEntities(res?.data || []);
  }, []);

  useEffect(() => {
    fetchEntities();
  }, [fetchEntities]);

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
          centerMode={true}
          centerSlidePercentage={100 / 3}
        >
          {!entities ? (
            <CircularProgress />
          ) : !entities?.length ? (
            <Typography>No entity found</Typography>
          ) : (
            entities?.map((entity, index) => {
              return (
                <ItemBox
                  key={index}
                  image={entity?.thumbnail}
                  title={entity?.name}
                  description={entity?.description}
                  link={`/${
                    entity?.type === "ai"
                      ? "ai-bots"
                      : entity?.type === "game"
                      ? "games"
                      : entity?.type
                  }/${entity?.id}`}
                />
              );
            })
          )}
        </Carousel>
      </Box>
    </Box>
  );
}

import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { get } from "../../../apis/entities";
import Footer from "../../../components/Footer";
import Title from "../../../shared/Title";

export default function AiDetails() {
  const [ai, setAi] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchAi = useCallback(async () => {
    const entity = await get({ id });

    if (!entity) {
      return navigate("/error-404");
    }

    setAi(entity);
  }, [id, navigate]);

  useState(() => {
    fetchAi();
  }, [fetchAi]);

  return (
    <>
      <Title title={"ai"} />
      {!ai ? (
        <CircularProgress />
      ) : (
        <>
          <Box
            sx={{
              width: "100%",
              height: "500px",
              background: `url(${ai?.thumbnail})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 500px",
              backgroundPosition: "center",
            }}
          >
            <Box
              sx={{
                background: "rgba(0,0,0,0.3)",
                width: "100%",
                height: "100%",
              }}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              gap={"50px"}
            >
              <Typography
                textAlign={"center"}
                variant="h1"
                color={"#FFFFFF"}
                fontWeight={"600"}
              >
                {ai?.name}
              </Typography>
            </Box>
          </Box>
          <Box p={"30px"}>
            <Typography variant="h3">Description</Typography>
            <Typography
              variant="h6"
              dangerouslySetInnerHTML={{ __html: ai?.description }}
            />
          </Box>
          <Box borderTop={"1px solid black"}>
            <Footer />
          </Box>
        </>
      )}
    </>
  );
}

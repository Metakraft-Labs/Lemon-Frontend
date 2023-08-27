import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { get } from "../../../apis/entities";
import Footer from "../../../components/Footer";
import Title from "../../../shared/Title";

export default function MetaverseDetails() {
  const [metaverse, setMetaverse] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchMetaverse = useCallback(async () => {
    const entity = await get({ id });

    if (!entity) {
      return navigate("/error-404");
    }

    setMetaverse(entity);
  }, [id, navigate]);

  useState(() => {
    fetchMetaverse();
  }, [fetchMetaverse]);

  return (
    <>
      <Title title={"metaverse"} />
      {!metaverse ? (
        <CircularProgress />
      ) : (
        <>
          <Box
            sx={{
              width: "100%",
              height: "500px",
              background: `url(${metaverse?.thumbnail})`,
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
                {metaverse?.name}
              </Typography>
            </Box>
          </Box>
          <Box p={"30px"}>
            <Typography variant="h3">Description</Typography>
            <Typography
              variant="h6"
              dangerouslySetInnerHTML={{ __html: metaverse?.description }}
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

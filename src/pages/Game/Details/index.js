import { Box, CircularProgress, Modal, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { get } from "../../../apis/entities";
import Button from "../../../components/Button";
import Footer from "../../../components/Footer";
import Title from "../../../shared/Title";

export default function GameDetails() {
  const [game, setGame] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const fetchGame = useCallback(async () => {
    const entity = await get({ id });

    if (!entity) {
      return navigate("/error-404");
    }

    setGame(entity);
  }, [id, navigate]);

  useState(() => {
    fetchGame();
  }, [fetchGame]);

  return (
    <>
      <Title title={"Game"} />
      {!game ? (
        <CircularProgress />
      ) : (
        <>
          <Box
            sx={{
              width: "100%",
              height: "500px",
              background: `url(${game?.thumbnail})`,
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
                {game?.name}
              </Typography>
              <Button onClick={() => setOpen(true)}>Play Now</Button>
            </Box>
          </Box>
          <Box p={"30px"}>
            <Typography variant="h3">Description</Typography>
            <Typography
              variant="h6"
              dangerouslySetInnerHTML={{ __html: game?.description }}
            />
          </Box>
          <Box borderTop={"1px solid black"}>
            <Footer />
          </Box>

          <Modal open={open} onClose={() => setOpen(false)}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "40px",
                width: "100%",
                height: "100%",
              }}
            >
              <iframe
                title={game?.name}
                height={"80%"}
                width={"80%"}
                src={`${process.env.REACT_APP_S3}/games/${
                  game?.zip?.split(".zip")[0] + "-" + game?.slug
                }/index.html`}
              />

              <Button onClick={() => setOpen(false)}>Close</Button>
            </Box>
          </Modal>
        </>
      )}
    </>
  );
}

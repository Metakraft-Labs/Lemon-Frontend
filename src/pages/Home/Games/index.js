import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { list } from "../../../apis/entities";
import ItemBox from "../../../components/ItemBox";

export default function Games() {
  const [games, setGames] = useState(null);

  const fetchGames = useCallback(async () => {
    const res = await list({ type: "game", limit: 5 });

    setGames(res?.data || []);
  }, []);

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

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
      {!games ? (
        <CircularProgress />
      ) : !games?.length ? (
        <Typography>No games found</Typography>
      ) : (
        <>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            width={"475px"}
            sx={{
              xl: {
                height: "700px",
              },
              lg: {
                height: "700px",
              },
              md: {
                height: "350px",
              },
              sm: {
                height: "350px",
              },
              xs: {
                height: "350px",
              },
            }}
          >
            <ItemBox
              title={games[0]?.name}
              image={games[0]?.thumbnail}
              style={{ width: "100%", height: "462px" }}
              description={games[0]?.description}
              link={`/games/${games[0]?.id}`}
            />
            <Box display={"flex"} justifyContent={"space-between"}>
              <ItemBox
                title={games[1]?.name}
                image={games[1]?.thumbnail}
                style={{ width: "304px", height: "285px" }}
                description={games[1]?.description}
                link={`/games/${games[1]?.id}`}
              />
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-between"}
              >
                <ItemBox
                  title={games[2]?.name}
                  image={games[2]?.thumbnail}
                  style={{ width: "137px", height: "136px" }}
                  description={games[2]?.description}
                  link={`/games/${games[2]?.id}`}
                />
                <ItemBox
                  title={games[3]?.name}
                  image={games[3]?.thumbnail}
                  style={{ width: "137px", height: "136px" }}
                  description={games[3]?.description}
                  link={`/games/${games[3]?.id}`}
                />
              </Box>
            </Box>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            sx={{
              xl: {
                height: "800px",
              },
              lg: {
                height: "800px",
              },
              md: {
                height: "350px",
              },
              sm: {
                height: "350px",
              },
              xs: {
                height: "350px",
              },
            }}
            width={"785px"}
          >
            <ItemBox
              title={games[4]?.name}
              image={games[4]?.thumbnail}
              style={{ width: "100%", height: "100%" }}
              description={games[4]?.description}
              link={`/games/${games[4]?.id}`}
            />
          </Box>
        </>
      )}
    </Grid>
  );
}

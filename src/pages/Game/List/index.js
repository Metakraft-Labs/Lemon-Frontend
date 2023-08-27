import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { list } from "../../../apis/entities";
import Button from "../../../components/Button";
import ItemBox from "../../../components/ItemBox";
import UserStore from "../../../contexts/UserStore";

export default function GameList() {
  const { theme } = useContext(UserStore);
  const [games, setGames] = useState(null);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({});

  const fetchGames = useCallback(async () => {
    const res = await list({ type: "game", page });

    setGames((prev) => {
      if (prev) {
        return [...prev, ...(res?.data || [])];
      } else {
        return res?.data || [];
      }
    });
    setPagination(res?.pagination || {});
  }, [page]);

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  return (
    <Box padding={"20px"}>
      <Typography variant="h1" fontSize={"50px"} fontWeight={"700"}>
        Games
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
        {!games ? (
          <CircularProgress />
        ) : !games?.length ? (
          <Typography>No games found</Typography>
        ) : (
          games?.map((game, index) => {
            return (
              <ItemBox
                key={index}
                image={game?.thumbnail}
                title={game?.name}
                description={game?.description}
                link={`/games/${game?.id}`}
              />
            );
          })
        )}
      </Grid>
      {pagination?.next_page ? (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          mt="30px"
        >
          <Button
            onClick={() => {
              setPage(pagination?.next_page);
            }}
          >
            Load More
          </Button>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}

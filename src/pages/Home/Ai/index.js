import {
  Box,
  CircularProgress,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { list } from "../../../apis/entities";
import Input from "../../../components/Input";
import ItemBox from "../../../components/ItemBox";
import UserStore from "../../../contexts/UserStore";

export default function Ai() {
  const { theme } = useContext(UserStore);

  const [ai, setAi] = useState(null);

  const fetchAi = useCallback(async () => {
    const res = await list({ type: "ai", limit: 5 });

    setAi(res?.data || []);
  }, []);

  useEffect(() => {
    fetchAi();
  }, [fetchAi]);

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
      {!ai ? (
        <CircularProgress />
      ) : !ai?.length ? (
        <Typography>No AI bots found</Typography>
      ) : (
        <>
          <Box
            borderRadius={"20px"}
            width={"224px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"24px"}
          >
            <ItemBox
              title={ai[0]?.name}
              style={{ width: "100%", height: "224px" }}
              image={ai[0]?.thumbnail}
              description={ai[0]?.description}
              link={`/ai-bots/${ai[0]?.id}`}
            />
            <ItemBox
              title={ai[1]?.name}
              style={{ width: "100%", height: "224px" }}
              image={ai[1]?.thumbnail}
              description={ai[1]?.description}
              link={`/ai-bots/${ai[1]?.id}`}
            />
          </Box>
          <ItemBox
            title={ai[2]?.name}
            style={{ width: "470px", height: "472px" }}
            image={ai[2]?.thumbnail}
            description={ai[2]?.description}
            link={`/ai-bots/${ai[2]?.id}`}
          />
        </>
      )}
    </Grid>
  );
}

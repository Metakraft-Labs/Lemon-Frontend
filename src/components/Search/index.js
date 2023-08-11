import { Box } from "@mui/material";
import React, { useContext } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import UserStore from "../../contexts/UserStore";
import Input from "../Input";

export default function Search({ width }) {
  const { theme } = useContext(UserStore);

  return (
    <Box>
      <Input
        width={width}
        placeholder={"Search items, games, AI "}
        icon={<SearchIcon />}
        InputProps={{
          sx: {
            borderRadius: "90px",
            border: "1px solid transparent",
            backgroundImage: `${
              theme === "light"
                ? "linear-gradient(white, white)"
                : "linear-gradient(#0A1929, #0A1929)"
            }, linear-gradient(43deg, #DAAD76 0%, #FA4947 100%)`,
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          },
        }}
      />
    </Box>
  );
}

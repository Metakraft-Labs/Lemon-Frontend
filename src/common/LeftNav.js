import {
  Box,
  Divider,
  Drawer,
  Icon,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { useConnectWallet } from "@web3-onboard/react";
import { useContext, useState } from "react";
import { BsMoonFill, BsSun } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ReactComponent as WalletIcon } from "../assets/icons/wallet.svg";
import ButtonComponent from "../components/Button";
import Search from "../components/Search";
import UserStore from "../contexts/UserStore";
import { useWallet } from "../hooks/useWallet";
import { Links } from "./Links";

export default function LeftNav({
  leftOpen,
  handleTheme,
  showModal,
  setShowModal,
  setShowLaunchModal,
}) {
  const [open, setOpen] = useState(true);
  const { theme, user } = useContext(UserStore);
  const [{ wallet, connecting }] = useConnectWallet();
  const { connectWalletHandler, disconnectWalletHandler } = useWallet({
    showModal,
    setShowModal,
  });

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={() => {
        setOpen(false);
        leftOpen(false);
      }}
    >
      <Box
        width={"10rem"}
        display="flex"
        justifyContent={"center"}
        height={"100%"}
        sx={{
          backgroundColor: theme === "light" ? "#FFFFFF" : "#0A1929",
          color: theme === "light" ? "#000000" : "#FFFFFF",
        }}
      >
        <List sx={{ width: "100%" }}>
          <ListItem>
            <Search width={"100%"} />
          </ListItem>
          {Links.map((link, i) => {
            if (link.showInNavigation) {
              return (
                <ListItemButton key={`LeftNav-${i}`}>
                  <Link
                    to={link.path}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    {link.name}
                  </Link>
                </ListItemButton>
              );
            }
            return "";
          })}
          <ListItemButton>
            <Icon
              color="inherit"
              size="small"
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                color: "inherit",
                textDecoration: "none",
                "&:hover": { background: "transparent" },
              }}
              onClick={() => handleTheme()}
            >
              {theme === "light" ? <BsMoonFill /> : <BsSun />}
            </Icon>
          </ListItemButton>

          <Divider />
          <ListItem>
            <ButtonComponent
              startIcon={<WalletIcon />}
              disabled={connecting}
              width={"194px"}
              onClick={() =>
                wallet ? disconnectWalletHandler() : connectWalletHandler()
              }
              style={{
                fontFamily: "Advent Pro",
                fontWeight: "700",
                letterSpacing: "0.64px",
                fontSize: "10px",
              }}
            >
              {connecting ? "Connecting" : wallet ? "Disconnect" : "Connect"}{" "}
              Wallet
            </ButtonComponent>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

import { Box, IconButton, Toolbar, Typography } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useConnectWallet } from "@web3-onboard/react";
import { Fragment, useContext, useState } from 'react';
import { BsMoonFill, BsSun } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { ReactComponent as WalletIcon } from "../assets/icons/wallet.svg";
import ButtonComponent from "../components/Button";
import Search from "../components/Search";
import UserStore from '../contexts/UserStore';
import { useWallet } from "../hooks/useWallet";
import LeftNav from './LeftNav';
import { Links } from './Links';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });


  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Appbar(props) {
  const { theme, setTheme } = useContext(UserStore);
  const [{ wallet, connecting }] = useConnectWallet();
  const { connectWalletHandler, disconnectWalletHandler } = useWallet();

  const [leftNavOpen, setLeftNavOpen] = useState(false)

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
    else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{ backgroundColor: theme === "light" ? "#FFFFFF" : "#0A1929", color: theme === "light" ? "#5A5C69" : "#FFFFFF", boxShadow: "none" }}>
          {leftNavOpen ? <LeftNav leftOpen={setLeftNavOpen} handleTheme={handleTheme} /> : <></>}
          <Toolbar variant="regular" sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
            <Box sx={{ mr: 3, display: { xs: "flex", md: "none" } }}>
              <IconButton color="inherit" onClick={() => { setLeftNavOpen(true) }}>
                <FiMenu />
              </IconButton>
            </Box>
            <Link to="/" style={{ color: "inherit", textDecoration: "none", marginTop: "3px" }}>
              <Typography variant='h6' sx={{ mr: 4, display: "flex", fontFamily: "Zen Dots", textTransform: "uppercase", color: theme === "light" ? "#000000" : "#FFFFFF" }}>{process.env.REACT_APP_NAME}</Typography>
            </Link>
            <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "space-around", alignItems: "center", gap: "25px" }}>
              <Search width={"400px"} />
              {Links.map((link, i) => {
                if (link.showInNavigation) {
                  return (
                    <Link key={i} to={link.path} style={{ color: "inherit", textDecoration: "none", marginTop: "3px", marginRight: "1rem" }}>
                      {link.name}
                    </Link>
                  );
                }
                return "";
              })}
              <IconButton color="inherit" size='small' sx={{ ml: 1 }} onClick={() => handleTheme()}>
                {theme === "light" ? <BsMoonFill /> : <BsSun />}
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" }, gap: "31px" }}>
              <ButtonComponent
                color={"#FFFFFF"}
                fontColor={"#000000"}
                style={{
                  letterSpacing: "1.64px",
                  "&:hover": {
                    color: "#FFFFFF",
                    background: "linear-gradient(43deg, #DAAD76 0%, #FA4947 100%)"
                  }
                }}
              >
                Contact Us
              </ButtonComponent>
              <ButtonComponent
                startIcon={<WalletIcon />}
                disabled={connecting}
                onClick={() =>
                  wallet ? disconnectWalletHandler() : connectWalletHandler()
                }
                style={{ fontFamily: "Advent Pro", fontWeight: "700", letterSpacing: "1.64px" }}
              >
                {connecting ? "Connecting" : wallet ? "Disconnect" : "Connect"} Wallet
              </ButtonComponent>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Fragment>
  );
}

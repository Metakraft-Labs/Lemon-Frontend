import { Toolbar } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import coinbaseWalletModule from "@web3-onboard/coinbase";
import injectedModule from "@web3-onboard/injected-wallets";
import { Web3OnboardProvider, init } from "@web3-onboard/react";
import React, { useCallback, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { status } from "./apis/auth";
import Appbar from "./common/Appbar";
import Routers from "./common/Routers";
import UserStore from "./contexts/UserStore";

const coinbaseWalletSdk = coinbaseWalletModule({ darkMode: true });
const INFURA_KEY = "";
const ethereumRopsten = {
  id: "0x3",
  token: "rETH",
  label: "Ethereum Ropsten",
  rpcUrl: `https://ropsten.infura.io/v3/${INFURA_KEY}`,
};

const chains = [ethereumRopsten];
const wallets = [injectedModule(), coinbaseWalletSdk];
const web3Onboard = init({
  wallets,
  chains,
  appMetadata: {
    name: "Lemon",
    icon: "<svg>App Icon</svg>",
    description: "Choose a wallet to connect",
  },
});

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);

  const lightTheme = createTheme({
    palette: {
      background: {
        default: "#FFFFFF",
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      background: {
        default: "#121212",
      },
      text: {
        primary: "#ffffff",
      },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& label": {
              color: "#ffffff",
            },
            "& .MuiInput-underline:before": {
              borderBottomColor: "#ffffff",
            },
          },
        },
      },
    },
  });

  const getStatus = useCallback(async () => {
    if ((localStorage.getItem("token") || token) && !user) {
      const res = await status();
      setUser(res.data);
    }
  }, [user, token]);

  useState(() => {
    getStatus();
  }, [getStatus]);

  useState(() => {
    const params = new URLSearchParams(window.location.search);
    const ref_code = params.get("ref");
    if (ref_code) localStorage.setItem("ref_code", ref_code);
  }, []);

  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <UserStore.Provider
        value={{
          theme,
          setTheme,
          token,
          setToken,
          user,
          setUser,
          defaultAccount,
          setDefaultAccount,
        }}
      >
        <BrowserRouter>
          <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
            <Appbar />
            <Toolbar />
            <Routers />

            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme={theme}
            />
          </ThemeProvider>
        </BrowserRouter>
      </UserStore.Provider>
    </Web3OnboardProvider>
  );
}

export default App;

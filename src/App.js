import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Routers from "./common/Routers";
import UserStore from "./contexts/UserStore";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [session, setSession] = useState(localStorage.getItem("session") || null);
  const [user, setUser] = useState(null);
  const lightTheme = createTheme({
    palette: {
      background: {
        default: "#F5F5F5"
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      background: {
        default: "#121212"
      },
      text: {
        primary: "#ffffff"
      }
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& label": {
              color: "#ffffff"
            },
            "& .MuiInput-underline:before": {
              borderBottomColor: "#ffffff"
            }
          }
        }
      }
    }
  });

  return (
    <UserStore.Provider value={{ theme, setTheme, session, setSession, user, setUser }}>
      <BrowserRouter>
        <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
          {/* <Toolbar /> */}
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
  );
}

export default App;

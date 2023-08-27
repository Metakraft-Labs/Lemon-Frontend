import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useConnectWallet } from "@web3-onboard/react";
import { Fragment, useContext, useRef, useState } from "react";
import { BsMoonFill, BsSun } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { register, status } from "../apis/auth";
import { post as createEntity } from "../apis/entities";
import { uploadFile } from "../apis/upload";
import { ReactComponent as WalletIcon } from "../assets/icons/wallet.svg";
import ButtonComponent from "../components/Button";
import Search from "../components/Search";
import UserStore from "../contexts/UserStore";
import { useWallet } from "../hooks/useWallet";
import LeftNav from "./LeftNav";
import { Links } from "./Links";

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
  const { theme, setTheme, defaultAccount, setUser, setToken, user } =
    useContext(UserStore);
  const [showModal, setShowModal] = useState(false);
  const [showLaunchModal, setShowLaunchModal] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [entityName, setEntityName] = useState("");
  const [entityDescription, setEntityDescription] = useState("");
  const [entityType, setEntityType] = useState("");
  const [entityLink, setEntityLink] = useState("");
  const [entityZip, setEntityZip] = useState("");
  const [entityThumbnail, setEntityThumbnail] = useState("");
  const uploadThumbnailInput = useRef(0);
  const uploadZipInput = useRef(0);
  const [{ wallet, connecting }] = useConnectWallet();
  const { connectWalletHandler, disconnectWalletHandler } = useWallet({
    showModal,
    setShowModal,
  });

  const [leftNavOpen, setLeftNavOpen] = useState(false);

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  const handleRegister = async () => {
    setIsSubmit(true);
    const res = await register({
      email,
      name,
      wallet: defaultAccount?.address,
    });
    if (res) {
      setToken(res);
      localStorage.setItem("token", res);
      const data = await status();
      if (data) {
        setUser(data);
      }
    }

    setIsSubmit(false);
    setShowModal(false);
    toast.success("Registered successfully");
  };

  const uploadThumbnail = async () => {
    setIsSubmit(true);

    const data = await uploadFile(uploadThumbnailInput.current.files[0]);

    if (data) {
      const { object_id, container_id } = data;

      const url = `${process.env.REACT_APP_NEO_FS_URL}/get/${container_id}/${object_id}`;
      setEntityThumbnail(url);

      toast.success("Thumbnail uploaded successfully");
    }

    setIsSubmit(false);
  };

  const uploadZip = async () => {
    setIsSubmit(true);

    const data = await uploadFile(uploadZipInput.current.files[0]);

    if (data) {
      const { object_id, container_id } = data;

      const url = `${process.env.REACT_APP_NEO_FS_URL}/get/${container_id}/${object_id}`;
      setEntityZip(url);

      toast.success("Zip uploaded successfully");
    }

    setIsSubmit(false);
  };

  const handleLaunch = async () => {
    if (!entityName || !entityDescription || !entityType || !entityThumbnail) {
      toast.error("Please pass the required files");
      return;
    }

    if (entityType === "game" && !entityZip) {
      toast.error("Thumbnail is required in case of games");
      return;
    }

    const data = {
      name: entityName,
      description: entityDescription,
      type: entityType,
      thumbnail: entityThumbnail,
      link: entityLink,
      zip: entityZip,
      images: [entityThumbnail],
    };

    const res = await createEntity(data);

    if (res) {
      toast.success("Uploaded successfully");
      setShowLaunchModal(false);
    }
  };

  return (
    <Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            backgroundColor: theme === "light" ? "#FFFFFF" : "#0A1929",
            color: theme === "light" ? "#5A5C69" : "#FFFFFF",
            boxShadow: "none",
          }}
        >
          {leftNavOpen ? (
            <LeftNav
              leftOpen={setLeftNavOpen}
              handleTheme={handleTheme}
              showModal={showModal}
              setShowModal={setShowModal}
              setShowLaunchModal={setShowLaunchModal}
            />
          ) : (
            <></>
          )}
          <Toolbar
            variant="regular"
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box sx={{ mr: 3, display: { xs: "flex", md: "none" } }}>
              <IconButton
                color="inherit"
                onClick={() => {
                  setLeftNavOpen(true);
                }}
              >
                <FiMenu />
              </IconButton>
            </Box>
            <Link
              to="/"
              style={{
                color: "inherit",
                textDecoration: "none",
                marginTop: "3px",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  mr: 4,
                  display: "flex",
                  fontFamily: "Zen Dots",
                  textTransform: "uppercase",
                  color: theme === "light" ? "#000000" : "#FFFFFF",
                }}
              >
                {process.env.REACT_APP_NAME}
              </Typography>
            </Link>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "space-around",
                alignItems: "center",
                gap: "25px",
              }}
            >
              <Search width={"400px"} />
              {Links.map((link, i) => {
                if (link.showInNavigation) {
                  return (
                    <Link
                      key={i}
                      to={link.path}
                      style={{
                        color: "inherit",
                        textDecoration: "none",
                        marginTop: "3px",
                        marginRight: "1rem",
                      }}
                    >
                      {link.name}
                    </Link>
                  );
                }
                return "";
              })}
              <IconButton
                color="inherit"
                size="small"
                sx={{ ml: 1 }}
                onClick={() => handleTheme()}
              >
                {theme === "light" ? <BsMoonFill /> : <BsSun />}
              </IconButton>
            </Box>

            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "none", md: "flex" },
                gap: "31px",
              }}
            >
              {!user ? (
                ""
              ) : (
                <ButtonComponent
                  color={"#FFFFFF"}
                  onClick={() => setShowLaunchModal(true)}
                  fontColor={"#000000"}
                  style={{
                    letterSpacing: "1.64px",
                    "&:hover": {
                      color: "#FFFFFF",
                      background:
                        "linear-gradient(43deg, #DAAD76 0%, #FA4947 100%)",
                    },
                  }}
                >
                  Launch App
                </ButtonComponent>
              )}
              <ButtonComponent
                startIcon={<WalletIcon />}
                disabled={connecting}
                onClick={() =>
                  wallet ? disconnectWalletHandler() : connectWalletHandler()
                }
                style={{
                  fontFamily: "Advent Pro",
                  fontWeight: "700",
                  letterSpacing: "1.64px",
                }}
              >
                {connecting ? "Connecting" : wallet ? "Disconnect" : "Connect"}{" "}
                Wallet
              </ButtonComponent>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Register Modal */}
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"100%"}
        >
          <Box
            width={"500px"}
            height="296px"
            sx={{
              backgroundColor: theme === "dark" ? "#000000" : "#D9D9D9",
              borderRadius: "16px",
            }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleRegister();
              }}
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              <TextField
                name={"name"}
                type={"text"}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={"Enter Name"}
                sx={{ width: "80%", backgroundColor: "white" }}
              />
              <TextField
                name={"email"}
                type={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={"Enter Email"}
                sx={{ width: "80%", backgroundColor: "white" }}
              />
              <ButtonComponent
                border={"#FFFFFF"}
                style={{
                  borderRadius: "16px",
                  background: "#FFFFFF",
                  color: isSubmit ? "#D9D9D9" : "#000000",
                  cursor: isSubmit ? "default" : "pointer",
                  height: "70px",
                  "&:hover": {
                    background: "rgba(0, 0, 0, 0.1)",
                  },
                }}
                loading={isSubmit}
                type={"submit"}
              >
                Register
              </ButtonComponent>
            </form>
          </Box>
        </Box>
      </Modal>

      {/* Launch App Modal */}
      <Modal open={showLaunchModal} onClose={() => setShowLaunchModal(false)}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"100%"}
        >
          <Box
            width={"800px"}
            height="700px"
            overflow={"auto"}
            sx={{
              backgroundColor: theme === "dark" ? "#0A1929" : "#FFFFFF",
              borderRadius: "16px",
            }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleLaunch();
              }}
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              <Typography variant={"h2"}>Launch your app with us</Typography>
              <TextField
                name={"name"}
                type={"text"}
                value={entityName}
                onChange={(e) => setEntityName(e.target.value)}
                placeholder={"Enter Name"}
                sx={{
                  width: "80%",
                  backgroundColor: theme === "light" ? "#FFFFFF" : "#0A1929",
                  border: `1px solid ${
                    theme === "light" ? "#0A1929" : "#FFFFFF"
                  }`,
                }}
              />
              <Box>
                <ReactQuill
                  style={{
                    width: "40rem",
                    height: "10rem",
                    backgroundColor: theme === "light" ? "#FFFFFF" : "#0A1929",
                    border: `1px solid ${
                      theme === "light" ? "#0A1929" : "#FFFFFF"
                    }`,
                  }}
                  theme="snow"
                  value={entityDescription}
                  onChange={setEntityDescription}
                />
              </Box>
              <TextField
                name={"link"}
                type={"text"}
                value={entityLink}
                onChange={(e) => setEntityLink(e.target.value)}
                placeholder={"Enter Link"}
                sx={{
                  width: "80%",
                  backgroundColor: theme === "light" ? "#FFFFFF" : "#0A1929",
                  border: `1px solid ${
                    theme === "light" ? "#0A1929" : "#FFFFFF"
                  }`,
                }}
              />
              <FormControl
                fullWidth
                sx={{
                  width: "80%",
                }}
              >
                <InputLabel id="selectLabel">Select Type</InputLabel>
                <Select
                  labelId={"selectLabel"}
                  value={entityType}
                  onChange={(e) => setEntityType(e.target.value)}
                  sx={{
                    width: "100%",
                    backgroundColor: theme === "light" ? "#FFFFFF" : "#0A1929",
                    border: `1px solid ${
                      theme === "light" ? "#0A1929" : "#FFFFFF"
                    }`,
                  }}
                >
                  <MenuItem value={"game"} selected={entityType === "game"}>
                    Game
                  </MenuItem>
                  <MenuItem
                    value={"metaverse"}
                    selected={entityType === "metaverse"}
                  >
                    Metaverse
                  </MenuItem>
                  <MenuItem value={"ai"} selected={entityType === "ai"}>
                    AI Bot
                  </MenuItem>
                </Select>
              </FormControl>
              <Box
                display={"flex"}
                justifyContent={"space-around"}
                flexDirection={"row"}
                gap={"10px"}
              >
                <input
                  id="upload-thumbnail"
                  ref={uploadThumbnailInput}
                  onChange={uploadThumbnail}
                  hidden={true}
                  type={"file"}
                />
                <ButtonComponent
                  border={"#FFFFFF"}
                  width={"140px"}
                  loading={isSubmit}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid black",
                    color: isSubmit ? "#D9D9D9" : "#000000",
                    cursor: isSubmit ? "default" : "pointer",
                    "&:hover": {
                      background: "rgba(0, 0, 0, 0.1)",
                    },
                    width: "100%",
                  }}
                  type={"button"}
                  onClick={(e) => {
                    e.preventDefault();
                    uploadThumbnailInput.current?.click();
                  }}
                >
                  Upload Thumbnail
                </ButtonComponent>
                <input
                  id="upload-zip"
                  ref={uploadZipInput}
                  onChange={uploadZip}
                  hidden={true}
                  type={"file"}
                />
                <ButtonComponent
                  border={"#FFFFFF"}
                  width={"140px"}
                  loading={isSubmit}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid black",
                    color: isSubmit ? "#D9D9D9" : "#000000",
                    cursor: isSubmit ? "default" : "pointer",
                    "&:hover": {
                      background: "rgba(0, 0, 0, 0.1)",
                    },
                    width: "100%",
                  }}
                  type={"button"}
                  onClick={(e) => {
                    e.preventDefault();
                    uploadZipInput.current?.click();
                  }}
                >
                  Upload Zip
                </ButtonComponent>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"end"}
                flexDirection={"row"}
                alignItems={"center"}
                gap={"10px"}
              >
                <ButtonComponent
                  border={"#FFFFFF"}
                  width={"140px"}
                  style={{
                    background: "#FFFFFF",
                    color: isSubmit ? "#D9D9D9" : "#000000",
                    cursor: isSubmit ? "default" : "pointer",
                    "&:hover": {
                      background: "rgba(0, 0, 0, 0.1)",
                    },
                  }}
                  type={"reset"}
                  onClick={() => {
                    setShowLaunchModal(false);
                  }}
                >
                  Cancel
                </ButtonComponent>

                <ButtonComponent
                  width={"140px"}
                  loading={isSubmit}
                  type={"submit"}
                >
                  Launch
                </ButtonComponent>
              </Box>
            </form>
          </Box>
        </Box>
      </Modal>
    </Fragment>
  );
}

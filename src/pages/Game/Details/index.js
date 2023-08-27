import { Box, CircularProgress, Modal, Typography } from "@mui/material";
import { useConnectWallet } from "@web3-onboard/react";
import { Contract, ethers } from "ethers";
import React, { useCallback, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { get } from "../../../apis/entities";
import abi from "../../../assets/abi/nftContract.json";
import Button from "../../../components/Button";
import Footer from "../../../components/Footer";
import UserStore from "../../../contexts/UserStore";
import Title from "../../../shared/Title";

const CONTRACT = "0xe61AbaFeB1BCc00371890696f0ef3b28899b6b19";

export default function GameDetails() {
  const [game, setGame] = useState(null);
  const { id } = useParams();
  const [{ wallet }] = useConnectWallet();
  const { defaultAccount } = useContext(UserStore);
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

  const mint = async () => {
    if (!wallet) {
      toast.error("Please connect to wallet first");
      return;
    }
    try {
      const ethersProvider = new ethers.BrowserProvider(wallet.provider, "any");
      const signer = await ethersProvider?.getSigner();
      const contract = new Contract(CONTRACT, abi, signer);

      const tx = await contract.mint(defaultAccount?.address, game?.zip);

      const receipt = await tx.wait();

      if (receipt) {
        toast.success("Minting done");
      }
    } catch (err) {
      toast.error("Error");
    }
  };

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
              <Box display={"flex"} justifyContent={"center"} gap="20px">
                {/* <Button onClick={() => setOpen(true)}>Play Now</Button> */}
                <Button onClick={mint}>Mint Now</Button>
              </Box>
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

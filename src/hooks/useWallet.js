import { useConnectWallet } from "@web3-onboard/react";
import { useContext } from "react";
import { toast } from "react-toastify";
import { login, status } from "../apis/auth";
import UserStore from "../contexts/UserStore";

export const useWallet = ({ showModal, setShowModal }) => {
  const [{ wallet }, connect, disconnect] = useConnectWallet();
  const { setDefaultAccount, setUser, setToken, token, user } =
    useContext(UserStore);

  const connectWalletHandler = async (connectionRequired = false) => {
    if (!wallet) {
      const [wallets] = await connect();
      const { accounts } = wallets || {};

      if (!accounts?.[0]) {
        if (connectionRequired)
          toast.error(
            "Wallet account not found. Please check your wallet and try again."
          );
        return;
      }

      if (user || token || localStorage?.getItem("token")) {
        if (!user) {
          const res = await status();
          if (res) {
            setUser(res);
          }
        }
        setToken(token);
      } else {
        const res = await login({ wallet: accounts[0]?.address });
        if (res) {
          setToken(res);
          localStorage.setItem("token", res);
          const data = await status();
          if (data) {
            setUser(data);
          }
        } else {
          setShowModal(true);
        }
      }

      setDefaultAccount(accounts[0]);
    }
  };

  const disconnectWalletHandler = async () => {
    if (wallet) {
      await disconnect(wallet);

      setDefaultAccount(null);
      setToken(null);
      setUser(null);
      localStorage.removeItem("token");
    }
  };

  return {
    connectWalletHandler,
    disconnectWalletHandler,
  };
};

import { Divider, Menu, MenuItem } from "@mui/material";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserStore from "../contexts/UserStore";

export default function UserMenu({
  profileMenuAnchor,
  profileMenuOpen,
  setProfileMenuAnchor,
}) {
  const navigator = useNavigate();
  const { setToken, setUser } = useContext(UserStore);
  const menu_item_style = useRef({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    color: "#000000",
  });

  const handleLogout = () => {
    setProfileMenuAnchor(null);
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    toast.success("You have been logged out");
  };
  return (
    <Menu
      id="profile-menu"
      anchorEl={profileMenuAnchor}
      sx={{ width: "10rem" }}
      open={profileMenuOpen}
      onClose={() => setProfileMenuAnchor(null)}
    >
      <MenuItem
        sx={menu_item_style.current}
        button="button"
        onClick={() => {
          navigator("/user/profile");
        }}
      >
        Profile
      </MenuItem>
      <MenuItem
        sx={menu_item_style.current}
        button="button"
        onClick={() => {
          navigator("/user/settings");
        }}
      >
        Settings
      </MenuItem>
      <Divider />
      <MenuItem
        sx={menu_item_style.current}
        button="button"
        onClick={handleLogout}
      >
        Logout
      </MenuItem>
    </Menu>
  );
}

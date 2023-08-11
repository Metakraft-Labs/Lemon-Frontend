import { toast } from "react-toastify";
import { auth, noAuth } from "../index";

export const login = async ({ wallet }) => {
    try {
        const res = await noAuth({ method: "POST", url: "/auth/login", data: { wallet } });

        return res?.data;
    }
    catch (err) {
        toast.error(err?.response?.data?.message || err?.message || "Something went wrong");
    }
};

export const register = async ({ email, wallet, ref_code }) => {
    try {
        const res = await noAuth({ method: "POST", url: "/auth/register", data: { email, ...(wallet ? { wallet } : {}), ...(ref_code ? { ref_code } : {}) } });

        return res?.data;
    }
    catch (err) {
        toast.error(err?.response?.data?.message || err?.message || "Something went wrong");
    }
};

export const status = async () => {
    try {
        const res = await auth({ method: "GET", url: "/auth/status" });

        return res?.data;
    }
    catch (err) {
        if (err?.response?.data?.message === "Invalid auth token provided") {
            localStorage.removeItem("token");
            return;
        }
        toast.error(err?.response?.data?.message || err?.message || "Something went wrong");
    }
};
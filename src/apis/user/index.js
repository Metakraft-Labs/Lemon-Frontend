import { toast } from "react-toastify";
import { auth } from "..";

export const update = async ({ wallet }) => {
    try {
        const res = await auth({ method: "PUT", url: "/user", data: { wallet } });

        return res?.data;
    }
    catch (err) {
        toast.error(err?.response?.data?.message || err?.message || "Something went wrong");
    }
};
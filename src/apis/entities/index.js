import { toast } from "react-toastify";
import { auth, noAuth } from "../index";

export const list = async ({
  type,
  search,
  page = 1,
  limit = 10,
  sortField = "created_at",
  sortOrder = "desc",
} = {}) => {
  try {
    const query = `${type ? `filters[type]=${type}&` : ""}${
      search ? `search=${search}&` : ""
    }page=${page}&limit=${limit}&sortField=${sortField}&sortOrder=${sortOrder}`;
    const res = await noAuth({ method: "GET", url: `/entity?${query}` });

    return res;
  } catch (err) {
    toast.error(
      err?.response?.data?.message || err?.message || "Something went wrong"
    );
  }
};

export const get = async ({ id } = {}) => {
  try {
    const res = await noAuth({ method: "GET", url: `/entity/${id}` });

    return res?.data;
  } catch (err) {
    toast.error(
      err?.response?.data?.message || err?.message || "Something went wrong"
    );
  }
};

export const post = async ({
  type,
  name,
  description,
  thumbnail,
  link,
  images,
  zip = null,
} = {}) => {
  try {
    const res = await auth({
      method: "POST",
      url: `/entity`,
      data: {
        type,
        name,
        description,
        thumbnail,
        images,
        ...(zip ? { zip } : {}),
        ...(link ? { link } : {}),
      },
    });

    return res?.data;
  } catch (err) {
    toast.error(
      err?.response?.data?.message || err?.message || "Something went wrong"
    );
  }
};

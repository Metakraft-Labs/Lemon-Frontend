import { toast } from "react-toastify";
import { auth } from "..";

export const uploadFile = async (file) => {
  try {
    const formData = new FormData();

    formData.append("file", file);

    const res = await auth({
      method: "POST",
      url: "/upload",
      data: formData,
      options: {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    });

    return res?.data;
  } catch (err) {
    toast.error("Something went wrong while uploading your file", err.message);
  }
};

export const uploadS3 = async (file, slug) => {
  try {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("slug", slug);
    const res = await auth({
      method: "POST",
      url: "/upload/s3",
      data: formData,
      options: {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    });

    return res?.data;
  } catch (err) {
    toast.error(
      "Something went wrong while uploading your file to S3",
      err.message
    );
  }
};

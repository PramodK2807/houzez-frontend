import Swal from "sweetalert2";
import apiInterceptors from "./apiInterceptors";

// PROPERTIES

export async function AllProperties(formData) {
  try {
    const { data } = await apiInterceptors.get(
      `${process.env.REACT_APP_API}api/all-properties`,
      formData
    );

    if (!data?.error) {
      return { data };
    } else
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function NewProperties(formData) {
  try {
    const { data } = await apiInterceptors.get(
      `${process.env.REACT_APP_API}api/latest-properties`,
      formData
    );

    if (!data?.error) {
      return { data };
    } else
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function AddProperties(formData) {
  try {
    const { data } = await apiInterceptors.post(
      `${process.env.REACT_APP_API}api/auth/add-new-property`,
      formData
    );

    if (!data?.error) {
      return { data };
    } else
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}

// BOOKMARKS
export async function GetBookmarkedProperty(id) {
  try {
    const { data } = await apiInterceptors.get(
      `${process.env.REACT_APP_API}api/get-bookmark-properties/${id}`
    );

    if (!data?.error) {
      return { data };
    } else
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function GetMyProperty(id) {
  try {
    const { data } = await apiInterceptors.get(
      `${process.env.REACT_APP_API}api/get-my-properties/${id}`
    );

    if (!data?.error) {
      return { data };
    } else
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}

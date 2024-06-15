import apiInterceptors from "../ApiServices/apiInterceptors";
import Swal from "sweetalert2";

export async function adminLogin(formData) {
  try {
    const { data, headers } = await apiInterceptors.post(
      `${process.env.REACT_APP_API}api/user/login`,
      formData
    );

    if (!data?.error) {
      localStorage.setItem("houzez-token", data?.token);
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
export async function RegisterUser(formData) {
  try {
    const { data } = await apiInterceptors.post(
      `${process.env.REACT_APP_API}api/user/register`,
      formData
    );
    if (data && !data?.error) {
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

export async function SendOtpOnEmail(formData) {
  try {
    const { data } = await apiInterceptors.put(
      `${process.env.REACT_APP_API}api/user/send-otp`,
      formData
    );
    if (data && !data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return { data };
    }
    if (data?.error) {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    }
  } catch (error) {
    Swal.fire({
      toast: true,
      icon: "error",
      position: "top-end",
      title: error?.response?.data?.message,
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 3000,
    });
  }
}
export async function VerifyOTP(formData) {
  try {
    const { data } = await apiInterceptors.post(
      `${process.env.REACT_APP_API}api/user/verify-otp`,
      formData
    );
    if (data && !data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return { data };
    }
    if (data?.error) {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    }
  } catch (error) {
    Swal.fire({
      toast: true,
      icon: "error",
      position: "top-end",
      title: error?.response?.data?.message,
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 3000,
    });
  }
}
export async function ResetPassword(formData) {
  try {
    const { data } = await apiInterceptors.put(
      `${process.env.REACT_APP_API}api/user/reset-password`,
      formData
    );
    if (data && !data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return { data };
    }
    if (data?.error) {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    }
  } catch (error) {
    Swal.fire({
      toast: true,
      icon: "error",
      position: "top-end",
      title: error?.response?.data?.message,
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 3000,
    });
  }
}

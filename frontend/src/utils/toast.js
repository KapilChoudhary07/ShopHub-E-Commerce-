
import { toast } from "react-toastify";

const baseConfig = {
  position: "top-right",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

export const successToast = (msg) =>
  toast.success(msg, {
    ...baseConfig,
    icon: "✓",
  });

export const errorToast = (msg) =>
  toast.error(msg, {
    ...baseConfig,
    icon: "✕",
    autoClose: 1000,
  });

export const infoToast = (msg) =>
  toast.info(msg, {
    ...baseConfig,
    icon: "→",
  });

export const warningToast = (msg) =>
  toast.warning(msg, {
    ...baseConfig,
    icon: "!",
    autoClose: 1000,
  });
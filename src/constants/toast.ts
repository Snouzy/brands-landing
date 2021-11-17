import { Zoom } from "react-toastify";

export const TOAST_AUTOCLOSE = 5000;
export const toastRequestOpts = {
  transition: Zoom,
  isLoading: false,
  autoClose: TOAST_AUTOCLOSE,
};

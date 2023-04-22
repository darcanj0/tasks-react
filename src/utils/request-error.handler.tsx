/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAlert } from "../contexts/alert.context";

export const HandleRequestError = (error: any) => {
  const { alert, setAlert } = useAlert();
  setAlert({
    ...alert,
    open: true,
    message: error.response.data.message as string,
  });
  console.error(error);
};

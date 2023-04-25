import { AlertColor } from "@mui/material";
import { ReactNode, createContext, useContext, useState } from "react";

interface Alert {
  open: boolean;
  vertical: string;
  horizontal: string;
  message: string;
  severity: AlertColor;
}

interface IAlertContextProvider {
  alert: Alert;
  setAlert: React.Dispatch<React.SetStateAction<Alert>>;
}

interface IAlertContextProviderProps {
  children: ReactNode;
}

const AlertContext = createContext<IAlertContextProvider>(
  {} as IAlertContextProvider
);

const AlertContextProvider = (props: IAlertContextProviderProps) => {
  const [alert, setAlert] = useState<Alert>({
    open: false,
    vertical: "top",
    horizontal: "right",
    message: "",
    severity: "error",
  });

  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

const useAlert = () => useContext(AlertContext);

export { AlertContextProvider, useAlert };

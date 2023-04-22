import { ReactNode, createContext, useContext, useState } from "react";

interface Alert {
  open: boolean;
  vertical: string;
  horizontal: string;
  message: string;
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
  const [alert, setAlert] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
    message: "",
  });

  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

const useAlert = () => useContext(AlertContext);

export { AlertContextProvider, useAlert };

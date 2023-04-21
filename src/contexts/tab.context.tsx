/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useState } from "react";

interface ITabContextProvider {
  tabValue: number;
  setTabValue: React.Dispatch<React.SetStateAction<number>>;
}

interface ITabContextProviderProps {
  children: ReactNode;
}

const TabContext = createContext<ITabContextProvider>(
  {} as ITabContextProvider
);

const TabContextProvider = (props: ITabContextProviderProps) => {
  const [tabValue, setTabValue] = useState(1);

  return (
    <TabContext.Provider value={{ tabValue, setTabValue }}>
      {props.children}
    </TabContext.Provider>
  );
};

const useTab = () => useContext(TabContext);

export { TabContextProvider, useTab };

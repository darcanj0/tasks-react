import { Container, SxProps } from "@mui/material";
import { ReactNode } from "react";
import { LogoutFloatButton } from "../components/buttons/logout.float-button";
import { AddFloatButton } from "../components/buttons/add.float-button";
import { useTab } from "../contexts/tab.context";
import { TabIndexes } from "../types/tab-indexes";

interface ContentContainerProps {
  children: ReactNode;
  setOpenTaskModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenTagModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContentContainer = ({
  children,
  setOpenTagModal,
  setOpenTaskModal,
}: ContentContainerProps) => {
  const { tabValue } = useTab();

  const css: SxProps = {
    width: "100%",
    height: "100%",
    display: "flex",
    background: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Container sx={css} maxWidth={false} disableGutters>
      <LogoutFloatButton />
      {children}
      {tabValue !== TabIndexes.PROFILE && (
        <AddFloatButton
          onclick={
            tabValue === TabIndexes.TAGS
              ? () => setOpenTagModal(true)
              : tabValue === TabIndexes.TASKS
              ? () => setOpenTaskModal(true)
              : () => console.log()
          }
        />
      )}
    </Container>
  );
};

import { Box, Modal, SxProps } from "@mui/material";
import { useTab } from "../contexts/tab.context";
import { TabIndexes } from "../types/tab-indexes";

export interface TasksTabProps {
  openModal: boolean;
  onCloseModal: () => void;
}

export const TasksTab = ({ openModal, onCloseModal }: TasksTabProps) => {
  const { tabValue } = useTab();

  const css: SxProps = {
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return tabValue === TabIndexes.TASKS ? (
    <>
      <Modal open={openModal} onClose={() => onCloseModal()}>
        <h1>Olá outro modal</h1>
      </Modal>
      <Box sx={css}>
        <h1>Tasks</h1>
      </Box>
    </>
  ) : (
    <></>
  );
};

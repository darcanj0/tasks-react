import { Box, Modal, SxProps } from "@mui/material";
import { useTab } from "../contexts/tab.context";
import { TabIndexes } from "../types/tab-indexes";
import { CreateTaskModal } from "../components/modals/create-task.modal";

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

  const modalCss: SxProps = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return tabValue === TabIndexes.TASKS ? (
    <>
      <Modal sx={modalCss} open={openModal} onClose={() => onCloseModal()}>
        <CreateTaskModal />
      </Modal>
      <Box sx={css}>
        <h1>Tasks</h1>
      </Box>
    </>
  ) : (
    <></>
  );
};

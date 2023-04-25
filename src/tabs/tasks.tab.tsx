import { Box, Modal, SxProps } from "@mui/material";
import { useTab } from "../contexts/tab.context";
import { TabIndexes } from "../types/tab-indexes";
import { CreateTaskModal } from "../components/modals/create-task.modal";
import { useEffect } from "react";
import { AppPaths } from "../types/app.paths";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../contexts/tasks.context";
import { TaskCard } from "../components/cards/task.card";

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
    gap: "20px",
  };

  const modalCss: SxProps = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const { getMyTasks, myTasks } = useTasks();

  const navigate = useNavigate();

  useEffect(() => {
    const isLogged = !!localStorage.getItem(AppPaths.APP_TOKEN);
    if (!isLogged) navigate(AppPaths.SIGNIN);
    getMyTasks();
  }, []);

  return tabValue === TabIndexes.TASKS ? (
    <>
      <Modal sx={modalCss} open={openModal} onClose={() => onCloseModal()}>
        <CreateTaskModal closeModal={onCloseModal} />
      </Modal>
      <Box sx={css}>
        {myTasks.map((task) => (
          <TaskCard task={task} />
        ))}
      </Box>
    </>
  ) : (
    <></>
  );
};

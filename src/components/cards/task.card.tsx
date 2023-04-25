import { Box, IconButton, Typography } from "@mui/material";
import { Task } from "../../types/task";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTags } from "../../contexts/tags.context";
import { TagChip } from "./tag.chip";
import { Api } from "../../api/axios";
import { ApiFeedbacks, ApiPaths } from "../../types/api.paths";
import { useTasks } from "../../contexts/tasks.context";
import { useAlert } from "../../contexts/alert.context";

export interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  const { myTags } = useTags();
  const { getMyTasks } = useTasks();
  const { alert, setAlert } = useAlert();

  const deleteTask = async (taskId: string) => {
    try {
      console.log(taskId);
      Api.delete(ApiPaths.DELETE_TASK, {
        data: { tasksIds: [taskId] },
      }).then(() => {
        getMyTasks();
        setAlert({
          ...alert,
          open: true,
          message: ApiFeedbacks.DELETE_TASK,
          severity: "success",
        });
      });
    } catch (error: any) {
      setAlert({
        ...alert,
        open: true,
        message: error.response.data.message as string,
        severity: "error",
      });
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        height: "50px",
        width: "900px",
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        borderRadius: "10px",
        border: "2px solid black",
        padding: "0 15px",
      }}
    >
      <Typography
        sx={{
          width: "250px",
          height: "100%",
          textOverflow: "ellipsis",
          overflow: "clip",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
        }}
        variant="h6"
      >
        {task.title}
      </Typography>
      <Box
        sx={{
          height: "100%",
          width: "280px",
          overflow: "clip",
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        {task.tags.map((tagId) => {
          const tag = myTags.find((tag) => tag.id === tagId);
          return tag ? <TagChip tag={tag} /> : <></>;
        })}
      </Box>
      <Typography
        sx={{
          width: "120px",
          height: "100%",
          textOverflow: "ellipsis",
          overflow: "clip",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
        }}
        variant="h6"
      >
        {new Date(task.dueDate).toLocaleDateString()}
      </Typography>
      <IconButton aria-label="delete" onClick={() => deleteTask(task.id)}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

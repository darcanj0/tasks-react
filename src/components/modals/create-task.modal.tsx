import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  SxProps,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Api } from "../../api/axios";
import { useAlert } from "../../contexts/alert.context";
import { useTags } from "../../contexts/tags.context";
import { useTasks } from "../../contexts/tasks.context";
import { ApiFeedbacks, ApiPaths } from "../../types/api.paths";

interface ICreateTaskProps {
  title: string;
  dueDate: Date;
  tags: Array<string>;
}

const createTaskSchema = yup.object().shape({
  title: yup
    .string()
    .required("Title is required")
    .min(5, "Title is too short")
    .max(50, "Title is too long"),
  dueDate: yup.date().optional(),
});

export interface CreateTaskModalProps {
  closeModal: () => void;
}

export const CreateTaskModal = ({ closeModal }: CreateTaskModalProps) => {
  const css: SxProps = {
    width: "500px",
    height: "500px",
    background: "#fff",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
  };

  const textFieldCss: SxProps = {
    width: "80%",
    color: "white",
  };

  const { alert, setAlert } = useAlert();

  const createTask = async ({ dueDate, tags, title }: ICreateTaskProps) => {
    try {
      Api.post(ApiPaths.CREATE_TASK, { dueDate, tags, title }).then(() => {
        getMyTasks();
        setAlert({
          ...alert,
          severity: "success",
          message: ApiFeedbacks.CREATE_TASK,
          open: true,
        });
        closeModal();
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateTaskProps>({
    resolver: yupResolver(createTaskSchema),
  });

  const { getMyTasks } = useTasks();
  const { myTags } = useTags();

  const [selectedTags, setSelectedTags] = useState<Array<string>>([]);

  const handlePickTag = (event: SelectChangeEvent<string[]>) => {
    const { value } = event.target;
    setSelectedTags(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box component={"form"} sx={css} onSubmit={handleSubmit(createTask)}>
      <Typography variant="h3">Create a Task</Typography>
      <TextField
        {...register("title")}
        id="outlined-basic"
        label="Title"
        variant="outlined"
        error={!!errors.title?.message}
        helperText={errors.title?.message}
        sx={textFieldCss}
      />

      <TextField
        {...register("dueDate")}
        id="outlined-basic"
        variant="outlined"
        error={!!errors.dueDate?.message}
        helperText={errors.dueDate?.message}
        type="date"
        sx={textFieldCss}
      />

      <InputLabel id="multiple-tags-label">Pick your tags</InputLabel>
      <Select
        {...register("tags")}
        multiple
        sx={textFieldCss}
        id="multiple-chip"
        variant="outlined"
        value={selectedTags}
        onChange={handlePickTag}
        labelId="multiple-tags-label"
        error={!!errors.tags?.message}
        input={<OutlinedInput id="select-multiple-chip" label="Pick Tags" />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => {
              const tagById = myTags.find((tag) => tag.id === value);
              return (
                <Box
                  key={value}
                  sx={{
                    width: "100px",
                    height: "30px",
                    background: tagById?.hex,
                    borderRadius: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    fontSize={"15px"}
                    textOverflow={"revert"}
                    variant="h6"
                  >
                    {tagById?.title}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        )}
      >
        {myTags.map((tag) => (
          <MenuItem value={tag.id}>{tag.title}</MenuItem>
        ))}
      </Select>

      <Button variant="contained" color="success" type="submit">
        Create
      </Button>
    </Box>
  );
};

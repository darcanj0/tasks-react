import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, SxProps, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Api } from "../../api/axios";
import { useAlert } from "../../contexts/alert.context";
import { useTags } from "../../contexts/tags.context";
import { ApiPaths } from "../../types/api.paths";

interface ICreateTagProps {
  title: string;
  hex: string;
}

const createTagSchema = yup.object().shape({
  title: yup
    .string()
    .required("Title is required")
    .min(3, "Title is too short")
    .max(15, "Title is too long"),
  hex: yup
    .string()
    .optional()
    .min(4, "Hex is too short")
    .max(9, "Hex is too long"),
});

export const CreateTagModal = () => {
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

  const createTag = async (props: ICreateTagProps) => {
    try {
      Api.post(ApiPaths.CREATE_TAG, props).then(() => {
        getMyTags();
      });
    } catch (error: any) {
      setAlert({
        ...alert,
        open: true,
        message: error.response.data.message as string,
      });
      console.error(error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateTagProps>({
    resolver: yupResolver(createTagSchema),
  });

  const { getMyTags } = useTags();

  return (
    <Box component={"form"} sx={css} onSubmit={handleSubmit(createTag)}>
      <Typography variant="h3">Create a Tag</Typography>
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
        {...register("hex")}
        id="outlined-basic"
        label="Pick a color"
        variant="outlined"
        error={!!errors.hex?.message}
        helperText={errors.hex?.message}
        type="color"
        sx={{
          width: "50%",
        }}
      />

      <Button variant="contained" color="success" type="submit">
        Create
      </Button>
    </Box>
  );
};

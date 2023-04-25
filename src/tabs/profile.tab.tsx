import { Box, Button, SxProps, TextField, Typography } from "@mui/material";
import { useTab } from "../contexts/tab.context";
import { TabIndexes } from "../types/tab-indexes";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Api } from "../api/axios";
import { ApiFeedbacks, ApiPaths } from "../types/api.paths";
import { useAlert } from "../contexts/alert.context";
import { useProfile } from "../contexts/profile.context";
import { useEffect } from "react";

interface IProfileProps {
  email: string;
  password: string;
  name: string;
}

const profileSchema = yup.object().shape({
  email: yup.string().required("Email is required").email("Must be an email"),
  name: yup
    .string()
    .required("Name is required")
    .min(4, "Name is too short")
    .max(20, "Name is too long"),
  password: yup.string().optional(),
});

export const ProfileTab = () => {
  const { tabValue } = useTab();

  const { alert, setAlert } = useAlert();

  useEffect(() => {
    getMyProfile();
  }, []);

  const { myProfile, getMyProfile } = useProfile();

  const updateProfile = async (props: IProfileProps) => {
    try {
      const obj = {
        ...props,
        password: props.password ? props.password : undefined,
        email: props.email === myProfile.email ? undefined : props.email,
        name: props.name === myProfile.name ? undefined : props.name,
      };
      await Api.post(
        ApiPaths.UPDATE_PROFILE + `${myProfile.id}`,
        JSON.stringify(obj)
      );
      setAlert({
        ...alert,
        open: true,
        severity: "success",
        message: ApiFeedbacks.UPDATE_PROFILE,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  const textFieldCss: SxProps = {
    width: "30%",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProfileProps>({
    resolver: yupResolver(profileSchema),
  });

  return tabValue === TabIndexes.PROFILE ? (
    <Box
      component={"form"}
      onSubmit={handleSubmit(updateProfile)}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <TextField
        {...register("name")}
        defaultValue={myProfile.name}
        id="outlined-basic"
        label="Name"
        variant="outlined"
        error={!!errors.name?.message}
        helperText={errors.name?.message}
        sx={textFieldCss}
      />
      <TextField
        {...register("email")}
        defaultValue={myProfile.email}
        id="outlined-basic"
        label="Email"
        variant="outlined"
        error={!!errors.email?.message}
        helperText={errors.email?.message}
        sx={textFieldCss}
      />
      <TextField
        {...register("password")}
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
        error={!!errors.password?.message}
        helperText={errors.password?.message}
        sx={textFieldCss}
      />

      <Button
        variant="contained"
        color="success"
        type="submit"
        sx={textFieldCss}
      >
        Update Changes
      </Button>
    </Box>
  ) : (
    <></>
  );
};

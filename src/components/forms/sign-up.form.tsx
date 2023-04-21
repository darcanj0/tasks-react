import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, SxProps, TextField, Typography } from "@mui/material";
import { Api } from "../../api/axios";
import { ApiPaths } from "../../types/api.paths";
import { useNavigate } from "react-router-dom";
import { AppPaths } from "../../types/app.paths";

interface ISignUpProps {
  email: string;
  password: string;
  name: string;
}

const signupSchema = yup.object().shape({
  email: yup.string().required("Email is required").email("Must be an email"),
  name: yup
    .string()
    .required("Name is required")
    .min(4, "Name is too short")
    .max(20, "Name is too long"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password is too short")
    .max(20, "Password is too long"),
});

export const SignForm = () => {
  const outerCss: SxProps = {
    height: "100%",
    width: "100%",
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  };

  const innerCss: SxProps = {
    height: "500px",
    width: "500px",
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  };

  const textFieldCss: SxProps = {
    width: "80%",
  };

  const navigate = useNavigate();

  const signUp = async (props: ISignUpProps) => {
    try {
      Api.post(ApiPaths.SIGNUP, props).then(() => {
        Api.post(ApiPaths.SIGNIN, {
          email: props.email,
          password: props.password,
        }).then(({ data }) => {
          localStorage.setItem(AppPaths.APP_TOKEN, data.token);
          navigate(AppPaths.HOME);
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpProps>({
    resolver: yupResolver(signupSchema),
  });

  return (
    <Box sx={outerCss}>
      <Box component={"form"} onSubmit={handleSubmit(signUp)} sx={innerCss}>
        <Typography variant="h4">Welcome to My Tasks App!</Typography>
        <TextField
          {...register("name")}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          error={!!errors.name?.message}
          helperText={errors.name?.message}
          sx={textFieldCss}
        />
        <TextField
          {...register("email")}
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

        <Button variant="contained" color="success" type="submit">
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

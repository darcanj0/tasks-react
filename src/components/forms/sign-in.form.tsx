import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, SxProps, TextField, Typography } from "@mui/material";
import { Api } from "../../api/axios";
import { ApiFeedbacks, ApiPaths } from "../../types/api.paths";
import { useNavigate } from "react-router-dom";
import { AppPaths } from "../../types/app.paths";
import { useAlert } from "../../contexts/alert.context";

interface ISignInProps {
  email: string;
  password: string;
}

const signInSchema = yup.object().shape({
  email: yup.string().required("Email is required").email("Must be an email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password is too short")
    .max(20, "Password is too long"),
});

export const SignInForm = () => {
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

  const { alert, setAlert } = useAlert();

  const signIn = async (props: ISignInProps) => {
    Api.post(ApiPaths.SIGNIN, {
      email: props.email,
      password: props.password,
    })
      .then(({ data }) => {
        localStorage.setItem(AppPaths.APP_TOKEN, data.token);
        navigate(AppPaths.HOME);
        setAlert({
          ...alert,
          open: true,
          message: ApiFeedbacks.SIGNIN,
          severity: "success",
        });
      })
      .catch((error: any) => {
        setAlert({
          ...alert,
          open: true,
          message: error.response.data.message as string,
          severity: "error",
        });
        console.error(error);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInProps>({
    resolver: yupResolver(signInSchema),
  });

  return (
    <Box sx={outerCss}>
      <Box component={"form"} onSubmit={handleSubmit(signIn)} sx={innerCss}>
        <Typography variant="h4">Welcome back!</Typography>
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

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            gap: "20px",
          }}
        >
          <Button
            variant="contained"
            color="success"
            type="submit"
            sx={{ width: "80%" }}
          >
            Sign In
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ width: "50%" }}
            onClick={() => navigate(AppPaths.SIGNUP)}
          >
            New User? Sign Now !
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

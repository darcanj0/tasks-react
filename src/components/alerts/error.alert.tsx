import { useAlert } from "../../contexts/alert.context";
import { Alert, Snackbar } from "@mui/material";

export const ErrorAlert = () => {
  const { alert, setAlert } = useAlert();

  const value = alert.open ? (
    <Snackbar
      anchorOrigin={{
        horizontal: "right",
        vertical: "top",
      }}
      open={alert.open}
      onClose={() => setAlert({ ...alert, open: false })}
      key={alert.vertical + alert.horizontal}
      autoHideDuration={5000}
    >
      <Alert
        onClose={() => setAlert({ ...alert, open: false })}
        severity={alert.severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {alert.message}
      </Alert>
    </Snackbar>
  ) : (
    <></>
  );

  return value;
};

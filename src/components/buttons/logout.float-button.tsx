import { Fab } from "@mui/material";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { Link } from "react-router-dom";
import { AppPaths } from "../../types/app.paths";

export const LogoutFloatButton = () => {
  return (
    <Link to={AppPaths.SIGNIN}>
      <Fab
        onClick={() => {
          localStorage.removeItem(AppPaths.APP_TOKEN);
        }}
        color="primary"
        aria-label="add"
        sx={{
          position: "absolute",
          left: 100,
          top: 80,
        }}
      >
        <MeetingRoomIcon />
      </Fab>
    </Link>
  );
};

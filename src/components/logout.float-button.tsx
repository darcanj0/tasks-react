import { Fab } from "@mui/material";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

export const LogoutFloatButton = () => {
  return (
    <Fab
      onClick={() => console.log("clicked")}
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
  );
};

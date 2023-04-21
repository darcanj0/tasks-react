import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const AddFloatButton = () => {
  return (
    <Fab
      onClick={() => console.log("clicked")}
      color="primary"
      aria-label="add"
      sx={{
        position: "absolute",
        right: 300,
        bottom: 100,
      }}
    >
      <AddIcon />
    </Fab>
  );
};

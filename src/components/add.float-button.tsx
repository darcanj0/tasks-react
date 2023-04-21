import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTab } from "../contexts/tab.context";

export const AddFloatButton = () => {
  const { tabValue } = useTab();

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

import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface AddFloatButton {
  onclick: () => void;
}

export const AddFloatButton = ({ onclick }: AddFloatButton) => {
  return (
    <Fab
      onClick={() => onclick()}
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

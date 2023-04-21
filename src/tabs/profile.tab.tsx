import { Box } from "@mui/material";
import { useTab } from "../contexts/tab.context";
import { TabIndexes } from "../types/tab-indexes";

export const ProfileTab = () => {
  const { tabValue } = useTab();

  return tabValue === TabIndexes.PROFILE ? (
    <Box>
      <h1>Profile</h1>
    </Box>
  ) : (
    <></>
  );
};

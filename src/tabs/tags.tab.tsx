import { Box, SxProps } from "@mui/material";
import { useTab } from "../contexts/tab.context";
import { TabIndexes } from "../types/tab-indexes";

export const TagsTab = () => {
  const { tabValue } = useTab();

  const css: SxProps = {
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid red",
  };

  return tabValue === TabIndexes.TAGS ? (
    <Box sx={css}>
      <h1>Tags</h1>
    </Box>
  ) : (
    <></>
  );
};

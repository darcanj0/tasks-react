import { Box, Typography } from "@mui/material";
import { Tag } from "../../types/tag";

export interface TagCardProps {
  tag: Tag;
}

export const TagCard = ({ tag }: TagCardProps) => {
  return (
    <Box
      sx={{
        background: tag.hex,
        height: "50px",
        width: "300px",
        textAlign: "center",
        alignItems: "center",
        display: "flex",
        justifyContent: "space-evenly",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h6">{tag.title}</Typography>
    </Box>
  );
};

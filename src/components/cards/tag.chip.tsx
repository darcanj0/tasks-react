import { Box, Typography } from "@mui/material";
import { Tag } from "../../types/tag";

interface TahChipProps {
  tag: Tag;
}

export const TagChip = ({ tag }: TahChipProps) => {
  return (
    <Box
      key={tag.id}
      sx={{
        minWidth: "100px",
        width: "100px",
        height: "30px",
        background: tag?.hex,
        borderRadius: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        fontSize={"15px"}
        overflow={"clip"}
        textOverflow={"ellipsis"}
        variant="h6"
      >
        {tag?.title}
      </Typography>
    </Box>
  );
};

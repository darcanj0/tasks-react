import { Box, IconButton, Typography } from "@mui/material";
import { Tag } from "../../types/tag";
import { Api } from "../../api/axios";
import { ApiPaths } from "../../types/api.paths";
import { useTags } from "../../contexts/tags.context";
import DeleteIcon from "@mui/icons-material/Delete";

export interface TagCardProps {
  tag: Tag;
}

export const TagCard = ({ tag }: TagCardProps) => {
  const deleteTag = async (tagId: string) => {
    try {
      Api.delete(ApiPaths.DELETE_TAG, {
        data: { tagsIds: [tagId] },
      }).then(() => {
        getMyTags();
      });
    } catch (error) {
      console.error(error);
    }
  };

  const { getMyTags } = useTags();

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
      <IconButton aria-label="delete" onClick={() => deleteTag(tag.id)}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

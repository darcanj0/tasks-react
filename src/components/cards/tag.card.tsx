import { Box, IconButton, Typography } from "@mui/material";
import { Tag } from "../../types/tag";
import { Api } from "../../api/axios";
import { ApiFeedbacks, ApiPaths } from "../../types/api.paths";
import { useTags } from "../../contexts/tags.context";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAlert } from "../../contexts/alert.context";

export interface TagCardProps {
  tag: Tag;
}

export const TagCard = ({ tag }: TagCardProps) => {
  const { alert, setAlert } = useAlert();

  const deleteTag = async (tagId: string) => {
    try {
      Api.delete(ApiPaths.DELETE_TAG, {
        data: { tagsIds: [tagId] },
      }).then(() => {
        getMyTags();
        setAlert({
          ...alert,
          open: true,
          severity: "success",
          message: ApiFeedbacks.DELETE_TAG,
        });
      });
    } catch (error: any) {
      setAlert({
        ...alert,
        open: true,
        message: error.response.data.message as string,
        severity: "error",
      });
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

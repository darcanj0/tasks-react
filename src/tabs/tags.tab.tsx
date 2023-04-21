import { Box, Modal, SxProps } from "@mui/material";
import { useTab } from "../contexts/tab.context";
import { TabIndexes } from "../types/tab-indexes";
import { useTags } from "../contexts/tags.context";
import { useEffect } from "react";
import { AppPaths } from "../types/app.paths";
import { useNavigate } from "react-router-dom";
import { CreateTagModal } from "../components/modals/create-tag.modal";

export interface TagsTabProps {
  openModal: boolean;
  onCloseModal: () => void;
}

export const TagsTab = ({ openModal, onCloseModal }: TagsTabProps) => {
  const { tabValue } = useTab();
  const { myTags, getMyTags } = useTags();

  const navigate = useNavigate();

  useEffect(() => {
    const isLogged = !!localStorage.getItem(AppPaths.APP_TOKEN);
    if (!isLogged) navigate(AppPaths.SIGNIN);
    getMyTags();
  }, []);

  const css: SxProps = {
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return tabValue === TabIndexes.TAGS ? (
    <>
      <Modal
        open={openModal}
        onClose={() => onCloseModal()}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CreateTagModal />
      </Modal>
      <Box sx={css}>
        <h1>Tags</h1>
      </Box>
    </>
  ) : (
    <></>
  );
};

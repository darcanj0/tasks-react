import { Box, Modal, SxProps } from "@mui/material";
import { useTab } from "../contexts/tab.context";
import { TabIndexes } from "../types/tab-indexes";
import { useTags } from "../contexts/tags.context";
import { useEffect } from "react";
import { AppPaths } from "../types/app.paths";
import { useNavigate } from "react-router-dom";
import { CreateTagModal } from "../components/modals/create-tag.modal";
import { TagCard } from "../components/cards/tag.card";

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

  const innerCss: SxProps = {
    display: "flex",
    height: "90%",
    width: "500px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "auto",
    gap: "20px",
  };

  const modalCss: SxProps = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return tabValue === TabIndexes.TAGS ? (
    <>
      <Modal open={openModal} onClose={() => onCloseModal()} sx={modalCss}>
        <CreateTagModal />
      </Modal>
      <Box sx={css}>
        <Box sx={innerCss}>
          {myTags.map((tag) => (
            <TagCard tag={tag} />
          ))}
        </Box>
      </Box>
    </>
  ) : (
    <></>
  );
};

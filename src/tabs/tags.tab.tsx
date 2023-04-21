import { Box, Modal, SxProps } from "@mui/material";
import { useTab } from "../contexts/tab.context";
import { TabIndexes } from "../types/tab-indexes";

export interface TagsTabProps {
  openModal: boolean;
  onCloseModal: () => void;
}

export const TagsTab = ({ openModal, onCloseModal }: TagsTabProps) => {
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
    <>
      <Modal open={openModal} onClose={() => onCloseModal()} sx={{}}>
        <h1>Olá, modal</h1>
      </Modal>
      <Box sx={css}>
        <h1>Tags</h1>
      </Box>
    </>
  ) : (
    <></>
  );
};

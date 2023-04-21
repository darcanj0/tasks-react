import { useState } from "react";
import { BottomNav } from "../components/navs/bottom.nav";
import { ContentContainer } from "../containers/content-container";
import { DefaultContainer } from "../containers/default-container";
import { ProfileTab } from "../tabs/profile.tab";
import { TagsTab } from "../tabs/tags.tab";
import { TasksTab } from "../tabs/tasks.tab";

export const HomePage = () => {
  const [openTagModal, setOpenTagModal] = useState(false);
  const [openTaskModal, setOpenTaskModal] = useState(false);

  return (
    <DefaultContainer>
      <ContentContainer
        setOpenTagModal={setOpenTagModal}
        setOpenTaskModal={setOpenTaskModal}
      >
        <TasksTab
          openModal={openTaskModal}
          onCloseModal={() => setOpenTaskModal(false)}
        />
        <TagsTab
          openModal={openTagModal}
          onCloseModal={() => setOpenTagModal(false)}
        />
        <ProfileTab />
      </ContentContainer>
      <BottomNav />
    </DefaultContainer>
  );
};

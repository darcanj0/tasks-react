import { BottomNav } from "./components/bottom.nav";
import { ContentContainer } from "./container/content-container";
import { DefaultContainer } from "./container/default-container";
import { TagsTab } from "./tabs/tags.tab";
import { TasksTab } from "./tabs/tasks.tab";

export const App = () => {
  return (
    <DefaultContainer>
      <ContentContainer>
        <TasksTab />
        <TagsTab />
      </ContentContainer>
      <BottomNav />
    </DefaultContainer>
  );
};

export default App;

import {
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { ContentContainer } from "./container/content-container";
import { DefaultContainer } from "./container/default-container";

export const App = () => {
  return (
    <DefaultContainer>
      <ContentContainer children={undefined}></ContentContainer>
      <BottomNavigation
        showLabels
        value={0}
        onChange={(event, newValue) => {
          console.log(newValue);
        }}
      >
        <BottomNavigationAction label="Tasks" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Tags" icon={<RestoreIcon />} />
      </BottomNavigation>
    </DefaultContainer>
  );
};

export default App;

import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonIcon from "@mui/icons-material/Person";
import { useTab } from "../../contexts/tab.context";

export const BottomNav = () => {
  const { tabValue, setTabValue } = useTab();

  return (
    <BottomNavigation
      showLabels
      value={tabValue}
      onChange={(_, newValue) => {
        setTabValue(newValue);
      }}
      style={{background: "#e1e1e5"}}
    >
      <BottomNavigationAction label="Tasks" icon={<AssignmentIcon />} />
      <BottomNavigationAction label="Tags" icon={<BookmarksIcon />} />
      <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
    </BottomNavigation>
  );
};

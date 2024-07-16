import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Home, Info, School, Work, Code, Folder } from '@mui/icons-material';
import { sections } from "../enums";

interface Props {
  HandleScroll: (e: sections) => void;
  ToggleSidebar?: (e: boolean) => void;
  isMdAndUp: boolean;
}

function SidebarContent(props: Props) {
  const sidebarItems = [
    "Home",
    "About",
    "Experience",
    "Education",
    "Stack",
    "Projects",
  ]

  const ItemIcon = (item: string) => {
    switch(item) {
    case "Home":
      return <Home className="sidebar-icon" />;
    case "About":
      return <Info className="sidebar-icon" />;
    case "Experience":
      return <Work className="sidebar-icon" />;
    case "Education":
      return <School className="sidebar-icon" />;
    case "Stack":
      return <Code className="sidebar-icon" />;
    case "Projects":
      return <Folder className="sidebar-icon" />;
    default:
      return <Work className="sidebar-icon" />;
    }
  }

  const ScrollToSection = (item: string) => {
    props.HandleScroll(sections[item.toUpperCase() as keyof typeof sections]);

    if (!props.isMdAndUp) {
      props.ToggleSidebar!(false);
    }
  }

  return (
    <List>
      {
        sidebarItems.map((item) => (
          <ListItem className="sidebar-item" key={item} disablePadding>
            <ListItemButton onClick={() => ScrollToSection(item)}>
              <ListItemIcon>
                { ItemIcon(item) }
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))
      }
    </List>
  )
}

export default SidebarContent;
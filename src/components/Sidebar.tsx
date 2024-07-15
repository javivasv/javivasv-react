import { Drawer } from "@mui/material";
import SidebarContent from "./SidebarContent";
import { sections } from "../enums";

interface Props {
  HandleScroll: (e: sections) => void;
  ToggleSidebar: (e: boolean) => void;
  open: boolean;
  isMdAndUp: boolean;
}

function Sidebar(props: Props) {
  const CloseSidebar = () => {
    props.ToggleSidebar(false)
  }

  return (
    <>
      {
        props.isMdAndUp &&
        <Drawer
          sx={{
            width: "200px",
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: "200px",
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <SidebarContent HandleScroll={props.HandleScroll} isMdAndUp={props.isMdAndUp} />
        </Drawer>
      } 
      {
        !props.isMdAndUp &&
        <Drawer
          sx={{
            width: "200px",
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: "200px",
              boxSizing: 'border-box',
            },
          }}
          open={props.open}
          onClose={CloseSidebar}
        >
          <SidebarContent HandleScroll={props.HandleScroll} ToggleSidebar={props.ToggleSidebar} isMdAndUp={props.isMdAndUp} />
        </Drawer>
      }
    </>
  )
}

export default Sidebar;
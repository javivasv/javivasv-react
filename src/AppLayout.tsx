import { useState, useRef } from 'react';
import { useMediaQuery, Grid, IconButton } from "@mui/material";
import { Menu } from '@mui/icons-material';
import Sidebar from "./components/Sidebar";
import Home from "./containers/Home";
import About from "./containers/About";
import Education from "./containers/Education";
import Experience from "./containers/Experience";
import Stack from "./containers/Stack";
import Projects from "./containers/Projects";
import { sections } from './enums';

function AppLayout() {
  const isMdAndUp = useMediaQuery('(min-width:900px)');
  const [openSidebar, setOpenSidebar] = useState(false);
  
  const sectionRefs = {
    home: useRef<HTMLDivElement | null>(null),
    about: useRef<HTMLDivElement | null>(null),
    experience: useRef<HTMLDivElement | null>(null),
    education: useRef<HTMLDivElement | null>(null),
    stack: useRef<HTMLDivElement | null>(null),
    projects: useRef<HTMLDivElement | null>(null),
  };

  const HandleScroll = (section: sections) => {
    if (sectionRefs[section].current) {
      sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ToggleSidebar = (toggle: boolean) => {
    setOpenSidebar(toggle);
  };

  return (
    <Grid className="h-100" container flexDirection={"row"}>
      <Sidebar HandleScroll={HandleScroll} ToggleSidebar={ToggleSidebar} open={openSidebar} isMdAndUp={isMdAndUp} />
      <Grid id={isMdAndUp ? "large-content-container" : "small-content-container"} className="h-100 thin-scrollbar" container item flexDirection={"column"} wrap="nowrap">
        {
          !isMdAndUp &&
          <IconButton id="sidebar-floating-button" onClick={() => ToggleSidebar(true)}>
            <Menu />
          </IconButton>
        }
        <div ref={sectionRefs.home}><Home /></div>
        <div ref={sectionRefs.about}><About /></div>
        <div ref={sectionRefs.experience}><Experience /></div>
        <div ref={sectionRefs.education}><Education /></div>
        <div ref={sectionRefs.stack}><Stack /></div>
        <div ref={sectionRefs.projects}><Projects /></div>
      </Grid>
    </Grid>
  )
}

export default AppLayout;
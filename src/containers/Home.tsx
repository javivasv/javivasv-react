import { useRef } from 'react';
import { Grid, Avatar, Typography, IconButton } from "@mui/material";
import { Mail, LinkedIn, GitHub, PictureAsPdf } from '@mui/icons-material';
import profile from "../images/home/profile.jpg";

function Home() {
  const downloadLink = useRef<HTMLAnchorElement | null>(null);

  const contactLinks = [
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/javier-vivas-veliz/",
    },
    {
      name: "github",
      link: "https://github.com/javivasv",
    },
    {
      name: "mail",
      link: "mailto:javivasv@gmail.com",
    },
    {
      name: "resume",
      link: "",
    },
  ]

  const LinkIcon = (name: string) => {
    switch(name) {
    case "mail":
      return <Mail />;
    case "linkedin":
      return <LinkedIn />;
    case "github":
      return <GitHub />;
    case "resume":
      return <PictureAsPdf />;
    default:
      return <Mail />;
    }
  }

  const HandleOpenLink = (name: string, link: string) => {
    if (name !== "resume") {
      window.open(link);
      return;
    }

    if (downloadLink.current) {
      downloadLink.current.click();
    }
  }

  return (
    <Grid id="home-container" className="section-container" container flexDirection={"row"}>
      <Grid id="avatar-container" container item flexDirection={"column"} alignContent="center" xs={12} md={5}>
        <Avatar alt="Javier Vivas" src={profile} sx={{ width: "240px", height: "240px" }} />
      </Grid>
      <Grid container item flexDirection={"column"} alignContent="center" xs={12} md={7} alignSelf="center">
        <Grid container flexDirection={"row"} justifyContent="center">
          <Typography id="home-title" variant="h3">
            Hey, I'm Javier
          </Typography>
        </Grid>
        <Grid container flexDirection={"row"} alignItems="center" justifyContent="center">
          {
            contactLinks.map((option) => (
              <IconButton key={option.name} className="link-button" onClick={() => HandleOpenLink(option.name, option.link)}>
                { LinkIcon(option.name) }
              </IconButton>
            ))
          }
          <a
            href="../documents/Javier Vivas - Resume.pdf"
            download="Javier Vivas - Resume.pdf"
            ref={downloadLink}
            style={{ display: 'none' }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home;
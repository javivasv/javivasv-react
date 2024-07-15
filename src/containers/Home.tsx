import { Grid, Avatar, Typography, IconButton } from "@mui/material";
import { Mail, LinkedIn, GitHub } from '@mui/icons-material';

function Home() {
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
  ]

  const LinkIcon = (name: string) => {
    switch(name) {
    case "mail":
      return <Mail />;
    case "linkedin":
      return <LinkedIn />;
    case "github":
      return <GitHub />;
    default:
      return <Mail />;
    }
  }

  const HandleOpenLink = (link: string) => {
    window.open(link);
  }

  return (
    <Grid id="home-container" className="section-container" container flexDirection={"row"}>
      <Grid id="avatar-container" container item flexDirection={"column"} alignContent="center" xs={12} md={5}>
        <Avatar alt="Javier Vivas" src={`src/images/home/profile.jpg`} sx={{ width: "240px", height: "240px" }} />
      </Grid>
      <Grid container item flexDirection={"column"} alignContent="center" xs={12} md={7} alignSelf="center">
        <Grid container flexDirection={"row"} justifyContent="center">
          <Typography variant="h3">
            Hey, I'm Javier
          </Typography>
        </Grid>
        <Grid className="link-buttons-row" container flexDirection={"row"} alignItems="center" justifyContent="center">
          {
            contactLinks.map((option) => (
              <IconButton key={option.name} className="link-button" onClick={() => HandleOpenLink(option.link)}>
                { LinkIcon(option.name) }
              </IconButton>
            ))
          }
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home;
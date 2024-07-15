import { Grid, Typography, Card, CardMedia, IconButton } from "@mui/material";
import { CatchingPokemon, Code, DataObject } from '@mui/icons-material';
import SectionTitle from "../components/SectionTitle";
import Carousel from 'react-material-ui-carousel'

function Projects() {
  const ndbImages = [
    "home-desktop",
    "home-mobile",
    "nuzlocke-desktop",
    "nuzlocke-mobile",
    "login-desktop",
  ];

  const ndbIcons = [
    {
      name: "website",
      link: "https://nuzlockedatabase.com/",
    },
    {
      name: "front",
      link: "https://github.com/javivasv/nuzlocke-database-v2-client-react",
    },
    {
      name: "back",
      link: "https://github.com/javivasv/nuzlocke-database-v2-server",
    },
  ]

  const ttpIcons = [
    {
      name: "front",
      link: "https://github.com/AvilaCrest-Software/track-to-power-frontend",
    },
    {
      name: "back",
      link: "https://github.com/AvilaCrest-Software/track-to-power-backend",
    },
  ]

  const ButtonIcon = (name: string) => {
    switch(name) {
    case "website":
      return <CatchingPokemon />;
    case "front":
      return <Code />;
    case "back":
      return <DataObject />;
    default:
      return <CatchingPokemon />;
    }
  }

  const HandleOpenLink = (link: string) => {
    window.open(link);
  }

  return (
    <Grid className="section-container light-to-dark" container flexDirection={"row"}>
      <Grid container item flexDirection={"column"}>
        <SectionTitle section="Projects" />
        <Grid className="section-content-container" container item flexDirection={"row"}>
          <Grid className="project-container" container item flexDirection={"column"} xs={12} md={6}>
            <Grid container item flexDirection={"row"}>
              <Typography variant="h5">
                Nuzlocke DataBase
              </Typography>
            </Grid>
            <Grid className="link-buttons-row" container item flexDirection={"row"}>
              {
                ndbIcons.map((item) => (
                  <IconButton key={item.name} className="link-button" onClick={() => HandleOpenLink(item.link)}>
                    { ButtonIcon(item.name) }
                  </IconButton>
                ))
              }
            </Grid>
            <Grid container item flexDirection={"row"}>
              <Carousel className="project-images-carousel" fullHeightHover={false}>
                {
                  ndbImages.map((image) => (
                    <Card key={image} className="project-card">
                      <CardMedia
                        key={image}
                        className="project-image"
                        component="img"
                        alt={image}
                        src={`../images/projects/ndb/${image}.png`}
                        sx={{
                          objectFit: "contain"
                        }}
                      />
                    </Card>
                  ))
                }
              </Carousel>
            </Grid>
          </Grid>
          <Grid container item flexDirection={"column"} xs={12} md={6}>
            <Grid  container item flexDirection={"row"}>
              <Typography variant="h5">
                Track To Power
              </Typography>
            </Grid>
            <Grid className="link-buttons-row" container item flexDirection={"row"}>
              {
                ttpIcons.map((item) => (
                  <IconButton key={item.name} className="link-button" onClick={() => HandleOpenLink(item.link)}>
                    { ButtonIcon(item.name) }
                  </IconButton>
                ))
              }
            </Grid>
            <Grid className="project-image-container" container item flexDirection={"row"} justifyContent="center">
              <Typography variant="h4">
                Coming soon
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Projects;
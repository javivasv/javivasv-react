import { Grid, Typography, Card, CardMedia, IconButton } from "@mui/material";
import { CatchingPokemon, Code, DataObject } from '@mui/icons-material';
import SectionTitle from "../components/SectionTitle";
import Carousel from 'react-material-ui-carousel'
import homeDesktop from "../images/projects/ndb/home-desktop.png"
import homeMobile from "../images/projects/ndb/home-mobile.png"
import nuzlockeDesktop from "../images/projects/ndb/nuzlocke-desktop.png"
import nuzlockeMobile from "../images/projects/ndb/nuzlocke-mobile.png"
import loginDesktop from "../images/projects/ndb/login-desktop.png"

function Projects() {
  const projects = [
    {
      name: "Nuzlocke DataBase",
      images: [
        homeDesktop,
        homeMobile,
        nuzlockeDesktop,
        nuzlockeMobile,
        loginDesktop,
      ],
      links: [
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
      ],
    },
    {
      name: "Track To Power",
      images: [],
      links: [
        {
          name: "front",
          link: "https://github.com/AvilaCrest-Software/track-to-power-frontend",
        },
        {
          name: "back",
          link: "https://github.com/AvilaCrest-Software/track-to-power-backend",
        },
      ],
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
    <Grid className="section-container" container flexDirection={"row"}>
      <Grid container item flexDirection={"column"}>
        <SectionTitle section="Projects" />
        <Grid className="section-content-container" container item flexDirection={"row"}>
          {
            projects.map((project) => (
              <Grid key={project.name} className="project-container" container item flexDirection={"column"} xs={12} md={6}>
                <Grid className="project-title-container" container item flexDirection={"row"}>
                  <Typography variant="h5">
                    { project.name }
                  </Typography>
                </Grid>
                <Grid className="project-card-container" container item flexDirection={"row"}>
                  <Card className="project-card">
                    <Grid className="project-links" container item flexDirection={"row"}>
                      {
                        project.links.map((item) => (
                          <IconButton key={item.name} className="link-button" onClick={() => HandleOpenLink(item.link)}>
                            { ButtonIcon(item.name) }
                          </IconButton>
                        ))
                      }
                    </Grid>
                    <Grid className="carousel-container" container item flexDirection={"row"} justifyContent="center">
                      {
                        project.images.length > 0 &&
                        <Carousel className="project-images-carousel" fullHeightHover={false}>
                          {
                            project.images.map((image) => (
                              <Card key={image} className="project-images-card">
                                <CardMedia
                                  key={image}
                                  className="project-image"
                                  component="img"
                                  alt={image}
                                  src={image}
                                  sx={{
                                    objectFit: "contain"
                                  }}
                                />
                              </Card>
                            ))
                          }
                        </Carousel>
                      }
                      {
                        project.images.length === 0 &&
                        <Typography className="coming-soon" variant="h4">
                          Coming soon
                        </Typography>
                      }
                    </Grid>
                  </Card>
                </Grid>
              </Grid>
            ))
          }
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Projects;
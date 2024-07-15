import { Grid, Typography, Card, CardMedia } from "@mui/material";
import { LocationOn, Call, Mail } from '@mui/icons-material';
import SectionTitle from "../components/SectionTitle";

function About() {
  const contactInfo = [
    {
      name: "address",
      data: "Davenport, Florida, United States",
    },
    {
      name: "phone",
      data: "(+1) 863-348-8877",
    },
    {
      name: "mail",
      data: "javivasv@gmail.com",
    },
  ]

  const InfoIcon = (name: string) => {
    switch(name) {
    case "address":
      return <LocationOn className="contact-icon" />;
    case "phone":
      return <Call className="contact-icon" />;
    case "mail":
      return <Mail className="contact-icon" />;
    default:
      return <LocationOn className="contact-icon" />;
    }
  }

  return (
    <Grid className="section-container light-to-dark" container flexDirection={"row"}>
      <Grid container item flexDirection={"column"}>
        <SectionTitle section="About" />
      </Grid>
      <Grid className="section-content-container" container item flexDirection={"row"} justifyContent="center">
        <Grid className="about-col" container item flexDirection={"column"} alignContent="center" xs={12} md={7}>
          <Grid className="about-text-container" container flexDirection={"row"}>
            <Typography variant="h5">
              Javier Vivas
            </Typography>
          </Grid>
          <Grid className="about-text-container" container flexDirection={"row"}>
            <Typography variant="body1">
              I'm a Bachelor of Science in Computer Engineer graduated from
              Universidad Simón Bolívar in Caracas, Venezuela. I currently live
              in Davenport, Florida, USA. I'm an American resident and a
              Venezuelan and Italian citizen. I speak both spanish and english.
            </Typography>
          </Grid>
          <Grid className="about-text-container" container flexDirection={"row"}>
            <Typography variant="body1">
              As a software developer, I focus primarily in frontend development
              using ReactJS and VueJS. Furthermore, I have experience in backend
              development using NodeJS and in database management using MongoDB.
            </Typography>
          </Grid>
          <Grid className="about-text-container" container flexDirection={"row"}>
            <Typography variant="body1">
              I'm a huge Attack On Titan and Star Wars fan and enjoy playing
              videogames (Zelda and Pokemon fan), listen to music (mostly rock and
              metal), working out and play basketball. I would like to be a videogame
              streamer at some point.
            </Typography>
          </Grid>
          <div className="empty-space" />
          {
            contactInfo.map((option) => (
              <Grid key={option.name} className="contact-info" container flexDirection={"row"} alignItems="center">
                { InfoIcon(option.name) }
                <Typography variant="body1">
                  { option.data }
                </Typography>
              </Grid>
            ))
          }
        </Grid>
        <Grid id="about-image-container" className="about-col" container item flexDirection={"column"} alignContent="center" xs={12} md={5}>
          <Card className="about-image-card">
            <CardMedia
              component="img"
              alt=""
              src={`src/images/about/image.jpg`}
              sx={{
                objectFit: "contain"
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default About;
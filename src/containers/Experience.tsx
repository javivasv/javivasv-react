import { useMediaQuery, Grid, Typography } from "@mui/material";
import { Work } from '@mui/icons-material';
import SectionTitle from "../components/SectionTitle";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Experience() {
  const isXs = useMediaQuery('(max-width:600px)');

  const experienceItems = [
    {
      title: "Front-End Developer - Angular",
      company: "Schneider Electric",
      location: "Louisville, Kentucky, Unites States",
      dates: "Jan 2025 - Present",
    },
    {
      title: "Frontend Engineer",
      company: "JP Global Digital",
      location: "Miami, Florida, Unites States",
      dates: "Nov 2021 - June 2024",
    },
    {
      title: "Fullstack Developer",
      company: "BP Developments",
      location: "Caracas, Venezuela",
      dates: "Jan 2021 - Oct 2021",
    },
    {
      title: "Software Developer",
      company: "Universidad Simón Bolívar",
      location: "Caracas, Venezuela",
      dates: "Jan 2020 - Dec 2020",
    },
  ];

  return (
    <Grid className="section-container" container flexDirection={"row"}>
      <Grid container item flexDirection={"column"}>
        <SectionTitle section="Experience" />
        <Grid className="section-content-container" container item flexDirection={"row"}>
          <VerticalTimeline>
            {
              experienceItems.map((item) => (
                <VerticalTimelineElement
                  key={item.title}
                  className="vertical-timeline-element"
                  contentArrowStyle={{ borderRight: '7px solid #3fc915be' }}
                  date={item.dates}
                  icon={<Work />}
                >
                  <Grid container item flexDirection={"row"}>
                    <Grid container item flexDirection={"column"} xs={12}>
                      <Grid container item flexDirection={"row"} justifyContent="space-between">
                        <Typography className="font-bold" variant="body1">
                          { item.title }
                        </Typography>
                        {
                          !isXs &&
                          <Typography variant="body1">
                            { item.location }
                          </Typography>
                        }
                      </Grid>
                      <Grid container item flexDirection={"row"} justifyContent="space-between">
                        <Typography variant="body1">
                          { item.company }
                        </Typography>
                      </Grid>
                      {
                        isXs &&
                        <Grid container item flexDirection={"row"}>
                          <Typography variant="body1">
                            { item.location }
                          </Typography>
                        </Grid>
                      }
                    </Grid>
                  </Grid>
                </VerticalTimelineElement>
              ))
            }
          </VerticalTimeline>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Experience;
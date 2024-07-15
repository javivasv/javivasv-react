import { Grid, Typography } from "@mui/material";
import { School, WorkspacePremium } from '@mui/icons-material';
import SectionTitle from "../components/SectionTitle";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Education() {
  const educationItems = [
    {
      name: "React Testing Library with Jest / Vitest",
      institution: "Udemy",
      location: null,
      link: "https://www.udemy.com/certificate/UC-754f32cb-c03e-42d1-878a-544a2eaa3c74/",
      license: true,
    },
    {
      name: "Single Page Web Applications with AngularJS",
      institution: "Coursera – Johns Hopkins University",
      location: null,
      link: "https://www.coursera.org/account/accomplishments/verify/Z24HKJ4Y3TAH",
      license: true,
    },
    {
      name: "CS50's Web Programming with Python and JavaScript",
      institution: "edX – Harvard University",
      location: null,
      link: "https://courses.edx.org/certificates/04b55435fa4749b09687acd6d2ed99fb",
      license: true,
    },
    {
      name: "Programming for the Web with JavaScript",
      institution: "edX – University of Pennsylvania",
      location: null,
      link: "https://courses.edx.org/certificates/83760d7cc05a4c59b8062ec8e04de73a",
      license: true,
    },
    {
      name: "Bachelor of Science in Computer Engineering",
      institution: "Universidad Simón Bolívar",
      location: "Caracas, Venezuela",
      link: null,
      license: false,
    },
  ];

  return (
    <Grid className="section-container light-to-dark" container flexDirection={"row"}>
      <Grid container item flexDirection={"column"}>
        <SectionTitle section="Education" />
        <Grid className="section-content-container" container item flexDirection={"row"}>
          <VerticalTimeline>
            {
              educationItems.map((item) => (
                <VerticalTimelineElement
                  key={item.name}
                  className="vertical-timeline-element"
                  contentArrowStyle={{ borderRight: '7px solid #3fc915be' }}
                  icon={item.license ? <WorkspacePremium /> : <School />}
                >
                  <Grid container item flexDirection={"row"}>
                    <Typography variant="body1">
                      { item.name }
                    </Typography>
                  </Grid>
                  <Grid container item flexDirection={"row"}>
                    <Typography variant="body1">
                      {
                        item.link &&
                        <a
                          className="website-link"
                          href={item.link}
                          target="_blank"
                        >
                          { item.institution }
                        </a>
                      }
                      {
                        !item.link &&
                        item.institution
                      }
                    </Typography>
                  </Grid>
                  {
                    item.location &&
                    <Grid container item flexDirection={"row"}>
                      <Typography variant="body1">
                        { item.location }
                      </Typography>
                    </Grid>
                  }
                </VerticalTimelineElement>
              ))
            }
          </VerticalTimeline>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Education;
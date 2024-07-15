import { Grid, Typography } from "@mui/material";
import SectionTitle from "../components/SectionTitle";

function Stack() {
  const stack = [
    {
      name: "TypeScript",
      icon: "typescript",
    },
    {
      name: "JavaScript",
      icon: "javascript",
    },
    {
      name: "HTML",
      icon: "html",
    },
    {
      name: "CSS",
      icon: "css",
    },
    {
      name: "ReactJS",
      icon: "react",
    },
    {
      name: "Redux",
      icon: "redux",
    },
    {
      name: "Material UI",
      icon: "materialui",
    },
    {
      name: "VueJS",
      icon: "vue",
    },
    {
      name: "Vuex",
      icon: "vuex",
    },
    {
      name: "Vuetify",
      icon: "vuetify",
    },
    {
      name: "Jest",
      icon: "jest",
    },
    {
      name: "Vite",
      icon: "vite",
    },
    {
      name: "Vitest",
      icon: "vitest",
    },
    {
      name: "NodeJS",
      icon: "node",
    },
    {
      name: "MongoDB",
      icon: "mongodb",
    },
    {
      name: "Python",
      icon: "python",
    },
    {
      name: "Django",
      icon: "django",
    },
    {
      name: "AngularJS",
      icon: "angular",
    },
    {
      name: "Java",
      icon: "java",
    },
  ]

  return (
    <Grid className="section-container dark-to-light" container flexDirection={"row"}>
      <Grid container item flexDirection={"column"}>
        <SectionTitle section="Stack" />
        <Grid className="section-content-container" container item flexDirection={"row"}>
          {
            stack.map((item) => 
              <Grid className="stack-col" key={item.name} container item flexDirection={"column"} xs={6} md={4} lg={3}>
                <Grid container flexDirection={"row"} alignItems="center">
                  <img
                    className="stack-image"
                    src={`src/images/stack/${item.icon}.png`}
                    alt={item.name}
                  />
                  <Typography variant="body1">
                    { item.name }
                  </Typography>
                </Grid>
              </Grid>
            )
          }
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Stack;
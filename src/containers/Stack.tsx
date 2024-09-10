import { useMediaQuery, Grid, Typography } from "@mui/material";
import SectionTitle from "../components/SectionTitle";
import typescript from "../images/stack/typescript.png"
import javascript from "../images/stack/javascript.png"
import html from "../images/stack/html.png"
import css from "../images/stack/css.png"
import react from "../images/stack/react.png"
import redux from "../images/stack/redux.png"
import materialui from "../images/stack/materialui.png"
import vue from "../images/stack/vue.png"
import vuex from "../images/stack/vuex.png"
import vuetify from "../images/stack/vuetify.png"
import jest from "../images/stack/jest.png"
import vite from "../images/stack/vite.png"
import vitest from "../images/stack/vitest.png"
import node from "../images/stack/node.png"
import mongodb from "../images/stack/mongodb.png"
import python from "../images/stack/python.png"
import django from "../images/stack/django.png"
import angular from "../images/stack/angular.png"
import java from "../images/stack/java.png"
import csharp from "../images/stack/csharp.png"
import aspnet from "../images/stack/aspnet.png"

function Stack() {
  const is500 = useMediaQuery('(max-width:500px)');

  const stack = [
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "ReactJS",
      icon: react,
    },
    {
      name: "Redux",
      icon: redux,
    },
    {
      name: "Material UI",
      icon: materialui,
    },
    {
      name: "VueJS",
      icon: vue,
    },
    {
      name: "Vuex",
      icon: vuex,
    },
    {
      name: "Vuetify",
      icon: vuetify,
    },
    {
      name: "Jest",
      icon: jest,
    },
    {
      name: "Vite",
      icon: vite,
    },
    {
      name: "Vitest",
      icon: vitest,
    },
    {
      name: "NodeJS",
      icon: node,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "AngularJS",
      icon: angular,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "ASP.NET",
      icon: aspnet,
    },
  ]

  return (
    <Grid className="section-container" container flexDirection={"row"}>
      <Grid container item flexDirection={"column"}>
        <SectionTitle section="Stack" />
        <Grid className="section-content-container" container item flexDirection={"row"}>
          {
            stack.map((item) => 
              <Grid className="stack-col" key={item.name} container item flexDirection={"column"} xs={6} md={4} lg={3}>
                <Grid container flexDirection={"row"} alignItems="center" justifyContent={is500 ? "center" : "start"}>
                  <img
                    className="stack-image"
                    src={item.icon}
                    alt={item.name}
                  />
                  {
                    !is500 &&
                    <Typography variant="body1">
                      { item.name }
                    </Typography>
                  }
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
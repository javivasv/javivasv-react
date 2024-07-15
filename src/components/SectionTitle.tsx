import { Grid, Typography, Divider } from "@mui/material";

interface Props {
  section: string;
}

function SectionTitle(props: Props) {
  return (
    <>
      <Grid className="section-title-container" container item flexDirection={"row"}>
        <Typography variant="h3">
          { props.section }
        </Typography>
      </Grid>
      <Grid className="section-title-divider-container" container item flexDirection={"row"}>
        <Divider className="section-title-divider" />
      </Grid>
    </>
  )
}

export default SectionTitle;
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Style from "./style";
const styles = Style;

export const MyCard = props => {
  const { classes, naslov, cijena, slika, tezina, id, history } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea id="area" onClick={() => history.push(`/Proizvod/${id}`)}>
        <CardMedia
          component="img"
          alt="slika"
          className={classes.media}
          height="250"
          image={slika}
          title="slika"
        />
        <CardContent classes={{ root: classes.naslov }}>
          <Typography
            noWrap
            className={classes.content}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {naslov}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography className={classes.button}>{tezina} KG</Typography>
        <Typography className={classes.button} style={{ marginLeft: "auto" }}>
          {cijena} KM
        </Typography>
      </CardActions>
    </Card>
  );
};
export default withStyles(styles)(MyCard);

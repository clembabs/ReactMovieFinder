import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Grid,
  Container,
  Card,
  CardMedia,
  Typography,
  CardActions,
  CardContent,
  Link,
} from "@material-ui/core";

function Movie({movies}) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.movieGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {movies.map((movie) => (
            <Grid item key={movie.imdbID} xs={12} sm={6} md={4}>
              <Card className={classes.movie}>
                <CardMedia
                  className={classes.movieMedia}
                  image={
                    movie.Poster === "N/A"
                    ? "https://bulma.io/images/placeholders/128x128.png"
                    : movie.Poster
                  }
                  title={movie.Title}
                />
                <CardContent className={classes.movieContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {movie.Title}
                  </Typography>
                  <Typography>
                  <small>{movie.Year}</small>
                  <br />
                  {movie.Plot}
                  <br />
                  <small>Rating: {movie.Rating}</small>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link
                      variant="button"
                      color="inherit"
                      href="omdbapi.com"
                    >
                      Visit Site
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  movieGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  movie: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  movieMedia: {
    paddingTop: "56.25%", // 16:9
  },
  movieContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default Movie;
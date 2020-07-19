import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { CssBaseline, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

const mainFeaturedPost = {
  title: 'Movie Finder',
  description:
    "An App that fetches from Omdb Api to give you details of movies",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

export default function Details() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <CssBaseline />
    <Container  maxWidth="lg">
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${mainFeaturedPost.image})` }}>
       {/* Increase the priority of the hero background image */}
       {<img style={{ display: 'none' }} src={mainFeaturedPost.image} alt={mainFeaturedPost.imageText} />}
    <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h4" color="inherit" gutterBottom>
              {mainFeaturedPost.title}
            </Typography>
            <Typography variant="h6" color="inherit" paragraph>
              {mainFeaturedPost.description}
            </Typography>
            <Link variant="subtitle1" href="#">
              {mainFeaturedPost.linkText}
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
    </Container>
    </React.Fragment>
    
  );
}

Details.propTypes = {
  mainFeaturedPost: PropTypes.object,
};



// import React from 'react'
// import {
//     CssBaseline,
//     Typography,
//     Container,
//     Link,
//     Button,
//     Grid
//   } from "@material-ui/core";
//   import { makeStyles } from '@material-ui/core/styles';

// function Details() {
//     const classes = useStyles();
//     return (
//         <React.Fragment>
//         <CssBaseline>
//          {/*Hero Unit*/}
//          <div className={classes.heroContent}>
//          <Container maxWidth="sm">
//            <Typography
//              component="h1"
//              variant="h2"
//              align="center"
//              color="textPrimary"
//              gutterBottom
//            >
//              Movie Searcher
//            </Typography>
//            <Typography
//              variant="h5"
//              align="center"
//              color="textSecondary"
//              paragraph
//            >
//              An App that fetches from Omdb Api to give you details of
//              movies
//            </Typography>

//            <div className={classes.heroButtons}>
//              <Grid container spacing={2} justify="center">
//                <Grid item>
//                  <Button variant="contained" color='secondary'>
//                    <Link
//                      variant="button"
//                      color="inherit"
//                      href="omdbapi.com"
//                    >
//                      Visit Site
//                    </Link>
//                  </Button>
//                </Grid>
//              </Grid>
//            </div>
//          </Container>
//        </div>
//         </CssBaseline>
//         </React.Fragment>
//     )
// }

// const mainFeaturedPost = {
//   title: 'Title of a longer featured blog mainFeaturedPost',
//   description:
//     "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this mainFeaturedPost's contents.",
//   image: 'https://source.unsplash.com/random',
//   imgText: 'main image description',
//   linkText: 'Continue reading…',
// };

// const useStyles = makeStyles((theme) => ({
//     icon: {
//       marginRight: theme.spacing(2),
//     },
//     heroContent: {
//       backgroundColor: theme.palette.background.paper,
//       padding: theme.spacing(8, 0, 6),
//     },
//     heroButtons: {
//       marginTop: theme.spacing(4),
//     },
//     cardGrid: {
//       paddingTop: theme.spacing(8),
//       paddingBottom: theme.spacing(8),
//     },
//     card: {
//       height: "100%",
//       display: "flex",
//       flexDirection: "column",
//     },
//     cardMedia: {
//       paddingTop: "56.25%", // 16:9
//     },
//     cardContent: {
//       flexGrow: 1,
//     },
//     footer: {
//       backgroundColor: theme.palette.background.paper,
//       padding: theme.spacing(6),
//     },
//   }));

// export default Details

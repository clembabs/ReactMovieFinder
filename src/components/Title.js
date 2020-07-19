import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Title(props) {
  const classes = useStyles();
  const { children } = props;

  return (
    <React.Fragment>
      <AppBar  color='secondary' position="relative">
      <Toolbar className={classes.toolbar} >
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {children}
        </Typography>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Title.propTypes = {
  children: PropTypes.string,
};








// import React from "react";
// import { CssBaseline,AppBar,Toolbar,Typography } from "@material-ui/core";


// export function Title({ children }) {
//   return (
//     <React.Fragment>
//       <CssBaseline >
      
//         <AppBar color='secondary' position="relative">
//           <Toolbar>
//             <Typography variant="h6" color="inherit" noWrap>
//               {children}
//             </Typography>
//           </Toolbar>
//         </AppBar>
//     </CssBaseline>
//     </React.Fragment>
//   );
// }


// export default Title;

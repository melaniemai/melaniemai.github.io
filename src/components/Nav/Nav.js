import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  useScrollTrigger,
  useTheme,
  Link,
  List,
  ListItem,
  ListItemButton,
} from '@mui/material'

const pages = ["Home", "About", "Projects", "Contact"]

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Nav = (props) => {
  const theme = useTheme()

  return (
    <>
    <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ fontFamily: "Work Sans", }}>
              M99
            </Typography>
            <List sx={{ marginLeft: "auto", display: "flex", direction: "row", }}> 
              <ListItem disablePadding >
                <ListItemButton >
                  <Typography 
                    variant="" 
                    sx={{ 
                      fontFamily: "Work Sans", 
                      fontSize: { xs: "0.8rem", md: "1rem" },
                    }}>
                      WORKS
                  </Typography>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Typography 
                    sx={{ 
                      fontFamily: "Work Sans", 
                      fontSize: { xs: "0.8rem", md: "1rem" }, 
                    }}>
                      ABOUT
                  </Typography>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link
                    href="mailto:melaniesmai@outlook.com" 
                    underline="none"
                    sx={{ 
                      fontFamily: "Work Sans", 
                      fontSize: { xs: "0.8rem", md: "1rem" },
                      color: "#fff",
                    }}>
                      CONTACT
                  </Link>
                </ListItemButton>
              </ListItem>
            </List>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}

export default Nav;
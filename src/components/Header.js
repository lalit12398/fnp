import React from "react";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

import { LayoutStyles } from "./layout.style";
import Logo from "../assets/images/fnp_logo.png";

const Header = (props) => {
  const { open, handleDrawerOpen } = props;
  const classes = LayoutStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          <img src={Logo} alt="Logo" className={clsx(classes.appLogo)} />
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

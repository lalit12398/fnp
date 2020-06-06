import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import { useTheme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import CakeIcon from "@material-ui/icons/Cake";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import SpaIcon from '@material-ui/icons/Spa';
import Collapse from "@material-ui/core/Collapse";
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import { LayoutStyles } from "./layout.style";

const Sidebar = (props) => {
  const { open, handleDrawerClose } = props;
  const [itemIndex, setItemIndex] = useState("");
  const [childOpen, setChildOpen] = useState(false);
  const handleClick = (itemIndex) => {
    setChildOpen(!childOpen);
    setItemIndex(itemIndex);
  };
  const theme = useTheme();
  const classes = LayoutStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button>
          <HomeIcon />
          <ListItemText className={classes.sidebarListText} primary={"Home"} />
        </ListItem>
        <ListItem button>
          <InfoIcon />
          <ListItemText
            className={classes.sidebarListText}
            primary={"About Us"}
          />
        </ListItem>
        <ListItem button onClick={() => handleClick(1)}>
          <CakeIcon />
          <ListItemText className={classes.sidebarListText} primary={"Cakes"} />
          {childOpen && itemIndex === 1 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={childOpen && itemIndex === 1} unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <CakeIcon />
              <ListItemText
                className={classes.sidebarListText}
                primary={"Chocolate Cakes"}
              />
            </ListItem>
            <ListItem button className={classes.nested}>
              <CakeIcon />
              <ListItemText
                className={classes.sidebarListText}
                primary={"Vanilla Cakes"}
              />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick(2)}>
          <LocalFloristIcon />
          <ListItemText
            className={classes.sidebarListText}
            primary={"Flowers"}
          />
          {childOpen && itemIndex === 2 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={childOpen && itemIndex === 2} unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <SpaIcon />
              <ListItemText
                className={classes.sidebarListText}
                primary={"Roses"}
              />
            </ListItem>
            <ListItem button className={classes.nested}>
              <FilterVintageIcon />
              <ListItemText
                className={classes.sidebarListText}
                primary={"Lilies"}
              />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button>
          <ContactSupportIcon />
          <ListItemText
            className={classes.sidebarListText}
            primary={"Contact Us"}
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;

import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductList from "./pages/ProductList/ProductList";
import clsx from "clsx";
import { LayoutStyles } from "./components/layout.style";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const [open, setOpen] = React.useState(false);
  const classes = LayoutStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />{" "}
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      <BrowserRouter>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Route path={"/"} component={ProductList} />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

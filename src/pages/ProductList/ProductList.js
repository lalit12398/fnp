import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import ProductCard from "./ProductCard";
import { ProductListStyles } from "./ProductList.styles";
import Axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const ProductList = () => {
  const classes = ProductListStyles();
  const [productListing, setProductListing] = useState([]);
  const [favourites, setFavourites] = useState({});

  const [scrollCount, setScrollCount] = useState(0);

  async function getProductsListingData() {
    try {
      let { data } = await Axios.get(
        "http://www.mocky.io/v2/5ed68221340000480106dae9%E2%80%8B"
      );
      setProductListing(productListing.concat(data));
      setScrollCount(scrollCount + 1);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getProductsListingData();

    let favourites = JSON.parse(localStorage.getItem("favourites"));
    setFavourites((favourites) || {});
  }, []);

  const toggleFavouriteHandler = (id) => {
    let allFav = { ...favourites };

    if (favourites[id]) {
      delete allFav[id];
    } else {
      allFav[id] = true;
    }
    setFavourites(allFav);
    localStorage.setItem("favourites", JSON.stringify(allFav));
  };

  function ProductBox() {
    return (
      <React.Fragment>
        {productListing.map((product, index) => {
          let id = product.sku + product.title.split(" ").join("-");
          return (
            <Grid item xs={12} md={4} sm={6} lg={3} key={id}>
              <ProductCard
                product={product}
                id={id}
                toggleFavouriteHandler={toggleFavouriteHandler}
                isFavourite={favourites[id]}
              />
            </Grid>
          );
        })}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <InfiniteScroll
        dataLength={productListing.length}
        next={getProductsListingData}
        hasMore={scrollCount <= 3}
        loader={<h4>Loading...</h4>}
        className={classes.scrollBox}
      >
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={2}>
            <ProductBox />
          </Grid>
        </Grid>
      </InfiniteScroll>
    </div>
  );
};

export default ProductList;

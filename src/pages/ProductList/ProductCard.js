import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { ProductListStyles } from "./ProductList.styles";
import RupeeIcon from "../../assets/images/rupee.svg";
import Rating from "@material-ui/lab/Rating";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function ProductCard(props) {
  const { product, toggleFavouriteHandler, id, isFavourite } = props;
  const classes = ProductListStyles();

  const handleClickRedirection = (url) => {
    window.location.replace(url);
  };
  return (
    <Card className={classes.productCard}>
      <div onClick={() => handleClickRedirection(product.landingPage)}>
        <CardActionArea>
          <CardMedia
            className={classes.dproductMedia}
            image={product.imgSrc}
            title="Contemplative Reptile"
          />
          <CardContent className={classes.productInfo}>
            <h3>{product.title}</h3>
            <p>
              <img src={RupeeIcon} className={classes.rupeeIcon} />
              <span className={classes.sellingPrice}>
                {product.sellingPrice}
              </span>
            </p>
            <div className={classes.discountBox}>
              {product.discountPercentage && (
                <span className={classes.discount}>
                  {product.discountPercentage}% OFF
                </span>
              )}
              {product.discountPercentage && (
                <span className={classes.original}>
                  <s>
                    <img src={RupeeIcon} style={{ width: "8px" }} />
                    <Typography variant="caption">
                      {Math.round(
                        (product.sellingPrice /
                          (100 - product.discountPercentage)) *
                          100
                      )}
                    </Typography>
                  </s>
                </span>
              )}
            </div>
            <div className={classes.ratingBox}>
              <span>
                <Rating name="read-only" value={product.ratingCount} readOnly />
              </span>
              <span className={classes.reviewText}>
                {product.reviewCount} Reviews
              </span>
            </div>
          </CardContent>
        </CardActionArea>
      </div>
      {product.bestSeller && <p className={classes.bestSeller}>Best Seller</p>}

      {isFavourite ? (
        <FavoriteIcon
          className={classes.selectedFavIcon}
          onClick={() => {
            toggleFavouriteHandler(id);
          }}
        />
      ) : (
        <FavoriteBorderIcon
          className={classes.favIcon}
          onClick={() => {
            toggleFavouriteHandler(id);
          }}
        />
      )}
    </Card>
  );
}

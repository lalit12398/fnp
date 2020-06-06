import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core";

export const ProductListStyles = makeStyles(() => {
  const theme = useTheme();
  return {
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    productCard: {
      position: "relative",
      maxWidth: 345,
    },
    dproductMedia: {
      height: 300,
    },
    productLink: {
      textDecoration: "none",
    },
    productInfo: {
      textAlign: "center",
    },
    bestSeller: {
      position: "absolute",
      top: 0,
      width: "71px",
      backgroundColor: "#008539",
      color: "#fff",
      padding: "5px 20px",
    },
    discount: {
      color: "#008539",
      fontWeight: 600,
    },
    discountBox: {
      display: "flex",
      minHeight: "20px",
      width: "110px",
      justifyContent: "space-between",
      margin: "0 auto",
      fontSize: "14px",
    },
    sellingPrice: {
      fontSize: "25px",
      fontWeight: "500",
    },
    rupeeIcon: {
      width: "10px",
      marginBottom: "7px",
      marginRight: "3px",
    },
    ratingBox: {
      display: "flex",
      width: "240px",
      margin: "0 auto",
      justifyContent: "center",
    },
    reviewText: {
      marginLeft: "6px",
      marginTop: "6px",
    },
    scrollBox: {
      overflow: "hidden!important",
    },
    favIcon: {
        position: "absolute",
        top: "10px",
        right: "10px",
      },
    selectedFavIcon: {
      position: "absolute",
      top: "10px",
      right: "10px",
      fill: "#008000",
    },
  };
});

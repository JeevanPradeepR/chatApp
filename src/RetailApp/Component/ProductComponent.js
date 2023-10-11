import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Rating from "@mui/material/Rating";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ShoppingCartCheckout from "@mui/icons-material/ShoppingCartCheckout";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { products, selectedProduct } from "../Reducer/productReducer";
import { getInCategory } from "../Service/productServie";

import "../Component/style.css";
function Products({ items }) {
  const dispatch = useDispatch();
  let [quantity, setQuantity] = useState(0);
  const [category, getCategory] = useState();
  const categories = useSelector((state) => state.product.category);
  console.log("categories.selected === items.category",categories.selected === items.category, categories.selected, items.category)
  // items.quantity = 0;
 
  return (
    <div
      style={{
        display: "inline-block",
        paddingLeft: "30px",
        paddingBottom: "30px",
      }}
    >
      {categories.selected === items.category  ? (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              className="card-img"
              component="img"
              height="140"
              image={items.image}
              alt="product"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {items.title.toString().slice(0, 10)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {items.description.toString().slice(0, 100)}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              {items.category}
            </Button>
            <Rating
              name="half-rating-read"
              defaultValue={items.rating.rate}
              precision={0.5}
              readOnly
            />
            <CurrencyRupeeIcon />
            {items.price}
            <ShoppingCartCheckout />
            {quantity}
            <AddCircleIcon
              onClick={() => {
                setQuantity(quantity++);
                dispatch(selectedProduct(items.id));
              }}
            />
          </CardActions>
        </Card>
      ) : null}
    </div>
  );
}

export default Products;

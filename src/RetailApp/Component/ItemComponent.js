import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Rating from "@mui/material/Rating";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllCart } from "../Service/productServie";
import Products from "./ProductComponent";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';


function Items() {
  const item = useSelector((state) => state.product.itemId);
  console.log("zzz", item);

  // Creating new set
  let set = new Set(item);

  // converting to set
  let items = Array.from(set);
  const [cart, getCart] = useState([]);
  let [totalAmount, setAmount] = useState(0);
  useEffect(() => {
    if (cart) {
      items.forEach((id) => {
        getAllCart(id).then((json) => {
          getCart((cart) => [...cart, json]);
          console.log(json);
          setAmount((totalAmount += json.price));
        });
      });
      console.log("check call time");
    }
  }, []);
  return (
    <div>
      <Card
        style={{
          float: "right",
          textAlign: "left",
          paddingBottom: "10%",
          paddingRight: "5%",
        }}
      >
        <Paper square elevation={3}>
          <Table>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{ fontSize: 16 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <b>
                    Price ({items.length} {items.length > 1 ? "items" : "item"})
                  </b>
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  sx={{ fontSize: 16 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <b> ₹{totalAmount.toFixed(2)}</b>
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{ fontSize: 16 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <b>Discount </b>
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontSize: 16 }} color="green" gutterBottom>
                  <b>
                    {" "}
                    -5% (₹{((totalAmount.toFixed(2) * 5) / 100).toFixed(2)})
                  </b>
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{ fontSize: 16 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <b>Delivery Charge</b>
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontSize: 16 }} color="green" gutterBottom>
                  <b>+2%(₹{((totalAmount.toFixed(2) * 2) / 100).toFixed(2)})</b>
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{ fontSize: 16 }}
                  color="text.primary"
                  gutterBottom
                >
                  <b>Total Amount</b>
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  sx={{ fontSize: 16 }}
                  color="text.primary"
                  gutterBottom
                >
                  <b>
                    ₹{(
                      totalAmount -
                      (totalAmount * 5) / 100 +
                      (totalAmount * 2) / 100
                    ).toFixed(2)}
                  </b>
                </Typography>
              </TableCell>
            </TableRow>
          </Table>
        </Paper>
        <CardContent></CardContent>
        <CardActions>
          <Button size="small">Place Order</Button>
        </CardActions>
        <Typography
                  sx={{ fontSize: 12 }}
                  color="#878787"
                  gutterBottom
                >
             <HealthAndSafetyIcon color="secondary"  size="xs"/>     <b>Safe and Secure Payments. Easy returns. <br/>100% Authentic products.</b>
                </Typography>
      </Card>
      {cart &&
        cart.map((product) => (
          <div
            key={product.id}
            style={{
              display: "inline-block",
              paddingLeft: "30px",
              paddingBottom: "30px",
            }}
          >
            <Card sx={{ display: "flex", maxWidth: 500, maxHeight: 200 }}>
              <CardMedia
                component="img"
                sx={{ width: 100, height: 100 }}
                image={product.image}
                alt="Live from space album cover"
              />

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto", textAlign: "left" }}>
                  <Typography component="p" variant="h7">
                    <b> {product.title.toString().slice(0, 40)} </b>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description.toString().slice(0, 100)}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    <Stack spacing={2} alignItems="left">
                      <Stack direction="row" spacing={2}>
                        <Chip
                          size="small"
                          label={product.category}
                          color="primary"
                        />
                        <div>₹{" "}
                        {product.price *
                          item.filter((a) => a === product.id).length}</div>
                        
                      </Stack>
                    </Stack>
                  </Typography>

                  <TextField
                    size="small"
                    sx={{ width: "50px", padding: "0px", marginLeft: "50px" }}
                    InputLabelProps={{ shrink: true }}
                    defaultValue={item.filter((a) => a === product.id).length}
                  />
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                ></Box>
              </Box>
            </Card>
          </div>
        ))}
    </div>
  );
}
export default Items;

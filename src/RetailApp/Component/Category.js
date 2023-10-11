import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import DvrIcon from "@mui/icons-material/Dvr";
import DiamondIcon from '@mui/icons-material/Diamond';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import StorefrontIcon from '@mui/icons-material/Storefront';
import {useSelector, useDispatch} from 'react-redux';
import {category} from '../Reducer/productReducer'
export default function LabelBottomNavigation() {
  const dispatch = useDispatch(); 
  const [value, setValue] = React.useState("all");

  const handleChange = (event, newValue) => {
    dispatch(category({selected:newValue}))
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: "100%" }} value={value} onChange={handleChange}>
        <BottomNavigationAction
        label="All"
        value="All"
        icon={<StorefrontIcon />}
      />
      <BottomNavigationAction
        label="Electronics"
        value="electronics"
        icon={<DvrIcon />}
      />
      <BottomNavigationAction
        label="Jewelery"
        value="jewelery"
        icon={<DiamondIcon />}
      />
      <BottomNavigationAction
        label="Men's Clothing"
        value="men's clothing"
        icon={<ManIcon />}
      />
      <BottomNavigationAction
        label="Women's Clothing"
        value="women's clothing"
        icon={<WomanIcon />}
      />
    </BottomNavigation>
  );
}

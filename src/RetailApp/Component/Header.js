import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useDispatch} from 'react-redux';
import { selectedTab } from '../Reducer/productReducer';
import CustomizedBadges from './CartIcon';
import LabelBottomNavigation from './Category'
function ButtonAppBar() {
    const dispatch = useDispatch();
  return (
    <Box sx={{ flexGrow: 1 }} style={{paddingBottom:"10px",position:"sticky",top:"0px",zIndex:"1"}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}
          onClick={()=>dispatch(selectedTab({selected:'product'}))}>
            Shopping Cart
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}
          onClick={()=>dispatch(selectedTab({selected:'cart'}))}
          >
            <CustomizedBadges/>      
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <LabelBottomNavigation/>
    </Box>
  );
}
export default ButtonAppBar;
import getAllProducts,{getAllCart} from "../Service/productServie";
import { useEffect, useState } from "react";
import Products from "./ProductComponent";
import ButtonAppBar from "./Header";
import {useSelector} from 'react-redux';
import Items from './ItemComponent';

function App(){
    const tabs = useSelector((state)=>state.product.tab)
    console.log(tabs)
    const [products, getProducts] = useState()

    useEffect(() => {
       getAllProducts().then(json=>{getProducts(json);console.log(json)})
   }, []);
   
   return( <div style={{width:"100%"}}> 
   <ButtonAppBar className="headerbutton"/>
   {tabs.selected === 'product'?
    products && products.map((product) => (<Products items={product}></Products>))
    :   <Items />

   }
    </div>   
   )
}
export default App;
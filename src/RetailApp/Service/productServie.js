const getAllProducts =  async () =>{
   const res = await fetch('https://fakestoreapi.com/products');
    const json = await res.json();
    return json;
}

const getAllCart = async (id) =>{
    if(id){
    const res = await fetch('https://fakestoreapi.com/products/'+id);
    const json = await res.json();
    return json;
    }
}

const getAllCategory =  async () =>{
    const res = await fetch('https://fakestoreapi.com/products/categories');
    const json = await res.json();
    return json;
}

const getInCategory =  async (id) =>{
    const res = await fetch('https://fakestoreapi.com/products/category/'+id);
    const json = await res.json();
    return json;
}

export default getAllProducts;
export {getAllCart, getAllCategory, getInCategory};

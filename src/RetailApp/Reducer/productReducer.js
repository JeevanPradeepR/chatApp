import {createSlice} from '@reduxjs/toolkit';
const productReducer = createSlice({
    name: "product",
    initialState: {value:{},tab:{selected:'product'},itemId:[], 
    category: {data: {selected:'all'}}},
    reducers:{
        products:(state,action)=>{
            state.value = action.payload;
        },
        selectedTab:(state,action)=>{
            state.tab = action.payload;
        },
        selectedProduct:(state,action)=>{
            state.itemId.push(action.payload);
        },
        category:(state,action)=>{
            state.category = action.payload;
        }
    }
})

export default productReducer.reducer;
export const {products,selectedTab,selectedProduct,category} = productReducer.actions
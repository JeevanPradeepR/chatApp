import { createSlice } from '@reduxjs/toolkit';

const DictionarySlice = createSlice({
    name:"disctionary",
    initialState: {value:''},
    reducers:{
        Search:(state,action) => {
            state.value = action.payload;
        }
    }
})

export default DictionarySlice.reducer;
export const {Search} = DictionarySlice.actions;
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState: {value:{name:'',age:'',email:''}},
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state, action) =>{
            state.value ={value:{name:'',age:'',email:''}}

        }
    }
})

export default userSlice.reducer;
export const {login,logout} = userSlice.actions;
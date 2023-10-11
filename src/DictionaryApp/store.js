import { configureStore } from '@reduxjs/toolkit';
import DictionarySlice from './reducer';

const Store = configureStore({
    reducer:{
        dictionary: DictionarySlice
    }
})

export default Store;
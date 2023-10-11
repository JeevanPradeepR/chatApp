// import './App.css';
import LoginInfo from './LoginInfo/loginInfo';

import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userSlice from './LoginInfo/user';

import RetailApp from './RetailApp';

import DictionaryApp from './DictionaryApp/disctionary';

import DemoTest from './DemoApp/demo';
import WifiChat from './WifiApp/WifiChat';
import Chat from './Chat/chat' 

//https://fakestoreapi.com/products
const store  = configureStore({
      reducer:{
        user: userSlice
      }
})

function App(){

  return (
    <div className="App">
      {/* <Provider store={store}>
        <LoginInfo/>
      </Provider>    */}
      {/* <RetailApp/> */}
      {/* <DictionaryApp/> */}
      {/* <DemoTest/> */}
      {/* <WifiChat/> */}
      <Chat/>
    </div>
  );
}

export default App;

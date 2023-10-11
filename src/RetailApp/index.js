import { Provider } from "react-redux";
import store from "./store";
import App from "./Component/Body";
function RetailApp(){

    return(
    <Provider store={store}>
        <App/>
    </Provider>
    )
}

export default RetailApp;
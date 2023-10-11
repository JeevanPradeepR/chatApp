import {Provider} from 'react-redux';
import Store from './store'
import Dictionary from './mainpage';

function DictionaryApp(){
    return(
        <Provider store={Store}>
            <Dictionary/>
        </Provider>
    )
}

export default DictionaryApp;

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { changeTitle } from "common/redux/reducers/title";

export default () => {

    const axiosInstance = axios.create();

    const store = createStore(
        changeTitle, 
        {}, 
        applyMiddleware(thunk.withExtraArgument(axiosInstance)
    ));
    return store;
};
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Redux from "redux";
import { Provider as ReduxProvider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { renderRoutes } from 'react-router-config';
import thunk from 'redux-thunk';
import Routes from '../client/Routes';
import { JssProvider } from "react-jss";
import axios from 'axios';
import {
    MuiThemeProvider,
    createGenerateClassName
} from "@material-ui/core/styles";

import theme from "../common/theme/theme";
import { changeTitle } from "common/redux/reducers/title";

const preloadedState = (window as any)["__PRELOADED_STATE__"];
delete (window as any)["__PRELOADED_STATE__"];

const axiosInstance = axios.create();

const store = createStore(
    changeTitle, 
    window.INITIAL_STATE, 
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

ReactDOM.hydrate(
    <ReduxProvider store={store}>
        <Router>
            <JssProvider generateClassName={createGenerateClassName()}>
                <MuiThemeProvider theme={theme}>
                    <React.Fragment>
                        <CssBaseline />
                        <div>{renderRoutes(Routes)}</div>
                    </React.Fragment>
                </MuiThemeProvider>
            </JssProvider>
        </Router>
    </ReduxProvider>,
    document.getElementById("root")
);

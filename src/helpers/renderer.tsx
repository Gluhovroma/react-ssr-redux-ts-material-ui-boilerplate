import * as React from "react";
import * as ReactDOM from "react-dom/server";
import { Provider as ReduxProvider } from "react-redux";
import { StaticRouter as Router } from "react-router-dom";
import { SheetsRegistry } from "react-jss";
import { JssProvider } from "react-jss";
import { renderRoutes } from 'react-router-config';
import {
    MuiThemeProvider,
    createGenerateClassName
} from "@material-ui/core/styles";
import Routes from '../client/Routes';
import theme from "../common/theme/theme";

export default (req:any, store:any, context:any) => {

    const sheetsRegistry = new SheetsRegistry();
    const sheetsManager = new Map();

    const content = ReactDOM.renderToString(
            <ReduxProvider store={store}>
                <Router location={req.path} context={{}}>
                    <JssProvider
                        registry={sheetsRegistry}
                        generateClassName={createGenerateClassName()}
                    >
                        <MuiThemeProvider
                            theme={theme}
                            sheetsManager={sheetsManager}
                        >
                          <div>{renderRoutes(Routes)}</div>
                        </MuiThemeProvider>
                    </JssProvider>
                </Router>
            </ReduxProvider>
        );
        const appInitialState = JSON.stringify(store.getState()).replace(
            /</g,
            "\\u003c"
        );
        const appCSS = sheetsRegistry.toString();


        return `
        <!DOCTYPE html>
        <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,500">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Chakra+Petch:300,400,500">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,500">
                <title>TypeScript ReactJS SSR App</title>
                <style>
                    body {
                        margin: 0px;
                        padding: 0px;
                    }
                </style>
                <style id="jss-server-side">${appCSS}</style>
            </head>
            <body>
                <main id="root">${content}</main>
                <script>
                    window["__PRELOADED_STATE__"] = ${appInitialState}
                </script>
                <script type="application/javascript" src="bundle.js"></script>
            </body>
        </html>
        `;
};
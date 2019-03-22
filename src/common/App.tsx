import * as React from "react";
import {renderRoutes} from 'react-router-config';
import AppBar from "common/containers/AppBar/AppBar.component";
import { withStyles, Theme } from "@material-ui/core";

interface Props {
    route: any
}

const styles = (theme: Theme) => ({
    "@global": {
      // MUI typography elements use REMs, so you can scale the global
      // font size by setting the font-size on the <html> element.
      html: {
        fontSize: 16,
        [theme.breakpoints.up("xs")]: {
          fontSize: 12
        },
        [theme.breakpoints.up("sm")]: {
          fontSize: 14
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 16
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 18
        }
      }
    }
 });

class App extends React.Component<Props, {}> {
    public render() {
        return (
            <React.Fragment>
                <AppBar />
                {renderRoutes(this.props.route.routes)}
            </React.Fragment>
        );
    }
}

export default {
    component: withStyles(styles)(App)
};
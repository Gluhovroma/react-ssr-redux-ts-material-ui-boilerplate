import * as React from "react";
import {
    AppBar as BaseAppBar,
    Typography,
    Grid,
    Toolbar,
    withStyles
} from "@material-ui/core";

import style from "./AppBar.style";

interface AppBarProps {
    classes: any;
}

class AppBar extends React.Component<AppBarProps> {
    constructor(props: AppBarProps) {
        super(props);
    }

    public render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <BaseAppBar position="static">
                    <Toolbar className={classes.toolbar}>
                        <Grid container>
                            <Grid item xs>
                                <Typography variant="title" color="textSecondary">
                                    Test APP
                                </Typography>
                            </Grid>
                            <Grid item container xs>
                                <Typography variant="title" color="textPrimary">
                                    Hello World!
                                </Typography>
                            </Grid> 
                             <Grid item container xs>
                                <Typography color="textSecondary" variant="title" className={classes.title}>
                                    Other text
                                </Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </BaseAppBar>
            </React.Fragment>
        );
    }
}

export default withStyles(style)(AppBar);

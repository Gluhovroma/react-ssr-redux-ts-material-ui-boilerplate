import * as React from "react";
import { connect } from "react-redux";
import * as cn from 'classnames';
import { Grid, Typography, Card, CardContent } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { RouteConfigComponentProps } from "react-router-config";
import { Store } from "common/redux/store";
import { changeTitle } from "common/redux/action";
const ConnectionsImage = require('./hero-circuit-bg.svg');  
import style from "./Docs.style";

interface Props {
    title: string;
    updateTitle: any;
    route: RouteConfigComponentProps,
    classes: any
}

class Docs extends React.Component<Props> {
    private titleList: string[];
    constructor(props: Props) {
        super(props);

        this.titleList = [
            "Hello World!",
            "High five from React",
            "Wow. Much skills."
        ];

        this.setRandomTitle = this.setRandomTitle.bind(this);
    }

    public setRandomTitle() {
        let titleIndex = this.titleList.indexOf(this.props.title) + 1;
        if (titleIndex >= this.titleList.length) {
            titleIndex = 0;
        }

        const newTitle = this.titleList[titleIndex];
        this.props.updateTitle(newTitle);
    }

    public render() {

        const { classes } = this.props;

        return (
            <div className={classes.Docs}>  
                <span dangerouslySetInnerHTML={{__html: ConnectionsImage}} />       
                <Typography color="primary" align="center" variant="h3" gutterBottom>Components Api</Typography>
                <Typography color="primary" align="center" variant="subtitle2" gutterBottom>Not sure where to start? We’ve put together some handy guides and reference documentation you can use to start building.</Typography>
                <Grid container spacing={24} md={12} xs={12}>  
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                    
                    </Grid>  
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state: Store) => {
    return {
        title: state.title
    };
};

const mapDispatchToProps = {
    updateTitle: changeTitle
};

export default {
    component: connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(Docs))
};

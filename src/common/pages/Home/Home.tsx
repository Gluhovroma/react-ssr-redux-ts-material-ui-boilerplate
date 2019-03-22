import * as React from "react";
import { connect } from "react-redux";
import * as cn from 'classnames';
import { Grid, Typography, Paper } from "@material-ui/core"; 
import { withStyles } from "@material-ui/core";
import { RouteConfigComponentProps } from "react-router-config";
import { Store } from "common/redux/store";
import { changeTitle } from "common/redux/action";
import CustomTable from '../../components/CustomTable/CustomTable'
import style from "./Home.style";
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/Button/Button';
interface HomeProps {
    title: string;
    updateTitle: any;
    route: RouteConfigComponentProps,
    classes: any
}
interface State {
    isServer: boolean
}

class Home extends React.Component<HomeProps, State> {
    private titleList: string[];
    
    constructor(props: HomeProps) {
        super(props);
        this.state = {
            isServer: true
        }
        this.titleList = [
            "Hello World!",
            "High five from React",
            "Wow. Much skills."
        ];

        this.setRandomTitle = this.setRandomTitle.bind(this);
    }
    public componentDidMount() {
        this.setState({isServer: false});
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
            <div className={classes.Home}>             
                <Grid container className={classes.gridContainer}>
                    <Grid item md={6} xs={12} className={classes.gridItem}>
                        <Paper elevation={0}  className={classes.Paper}>
                            <CustomTable />
                        </Paper>
                        
                    </Grid>
                    <Grid item md={6} xs={12} className={classes.gridItem}>
                        <Paper elevation={0}  className={classes.Paper}>
                            <CustomButton variant="contained" color="primary" >My CustomButton</CustomButton>
                            
                        </Paper>
                        <Paper elevation={0}  className={classes.Paper}>
                            <CustomButton variant="outlined" color="primary" >My CustomButton</CustomButton>                            
                        </Paper>
                        <Paper elevation={0}  className={classes.Paper}>
                            <CustomInput />                 
                        </Paper>
                       
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
    component: connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(Home))
};

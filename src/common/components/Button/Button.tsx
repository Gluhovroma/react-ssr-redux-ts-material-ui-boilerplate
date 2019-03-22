
import {
    withStyles, Button, Theme
} from "@material-ui/core";

export default withStyles((theme: Theme) => ({
    containedPrimary: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main
    },
    outlinedPrimary: {
        color: theme.palette.grey[500],
        border: '1px solid' + theme.palette.grey[500],
        backgroundColor: theme.palette.common.white,
        '&:hover': {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.common.white,
        }   
    },
    containedSecondary: {
        color: theme.palette.common.black
    },    
    root: {
        borderRadius: "7.5px",
        padding: "7px 7px 7px 7px"
    }

  }))(Button);

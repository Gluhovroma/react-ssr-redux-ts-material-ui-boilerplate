
import {
    withStyles, InputBase
} from "@material-ui/core";

export default withStyles(theme => ({  
    root: {
        backgroundColor: theme.palette.common.white,
        borderStyle: "solid",
        borderColor: "#a5a0a0",
        borderRadius: "12px",
        borderWidth: "1px",
        padding: "1px 10px 2px"
    },
    input: {
        padding: 0
    }

  }))(InputBase);

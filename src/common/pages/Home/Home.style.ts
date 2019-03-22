import { createStyles, Theme } from "@material-ui/core";

const style = (theme: Theme) => createStyles({
    Home: {
        overflow: "hidden"
    },
    gridContainer: {
        alignItems: "center",
        display: "flex",
        justifyContent: "center"
    },
    Paper: {
        padding: theme.spacing.unit * 2,
        backgroundColor: "transparent"
    }
});

export default style;
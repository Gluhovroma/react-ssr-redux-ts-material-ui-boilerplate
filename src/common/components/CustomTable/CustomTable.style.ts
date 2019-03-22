import { createStyles, Theme } from "@material-ui/core";

const style = (theme: Theme) => createStyles({
    CustomTable: {
        background: theme.palette.primary.main,
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },  
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },    
    '@media (max-width: 767px)': {
        
    },
});

export default style;

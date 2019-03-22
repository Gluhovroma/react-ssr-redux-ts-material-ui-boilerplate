import * as React from "react";
import {
    withStyles
} from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import style from "./CustomTable.style";


const CustomTableCell = withStyles(theme => ({
    head: {
    //   backgroundColor: theme.palette.primary.light,
      color: theme.palette.grey[500],

    },
    body: {
      fontSize: 14,
    },
    root: {
        padding: "4px 5px 4px 5px",
        border: "none"
    }
  }))(TableCell);

  const CustomTableRow = withStyles(theme => ({   
   
    root: {
        padding: "4px 5px 4px 5px",
        height: '20px',
        border: "none"
    }
  }))(TableRow);




let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}
  
  const rows = [
    createData('1', 159, 6.0, 24, 4.0),
    createData('1', 237, 9.0, 37, 4.3),
    createData('1', 262, 16.0, 24, 6.0),
    createData('1', 305, 3.7, 67, 4.3),
    createData('1', 356, 16.0, 49, 3.9),
  ];


interface Props {
    classes: any;
}

class CustomTable extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                <TableHead>
                    <CustomTableRow>
                        <CustomTableCell padding="checkbox"></CustomTableCell>
                        <CustomTableCell align="left">Заголовок</CustomTableCell>
                        <CustomTableCell align="left">Заголовок</CustomTableCell>
                        <CustomTableCell align="left">Заголовок</CustomTableCell>
                        <CustomTableCell align="left">Заголовок</CustomTableCell>
                    </CustomTableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                    <CustomTableRow className={classes.row} key={row.id}>
                        <CustomTableCell>
                        {row.name}
                        </CustomTableCell>
                        <CustomTableCell align="left">{row.calories}</CustomTableCell>
                        <CustomTableCell align="left">{row.fat}</CustomTableCell>
                        <CustomTableCell align="left">{row.carbs}</CustomTableCell>
                        <CustomTableCell align="left">{row.protein}</CustomTableCell>
                    </CustomTableRow>
                    ))}
                </TableBody>
                </Table>
          </Paper>
        );
    }
}

export default withStyles(style)(CustomTable);

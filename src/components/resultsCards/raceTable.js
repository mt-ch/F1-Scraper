import React from 'react';
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
import '../../css/App.scss'

const columns = [
    { id: 'pos', label: 'Pos' },
    { id: 'name', label: 'Driver'},
    { id: 'time', label: 'Time', align: 'center'},
    { id: 'points', label: 'Points',  align: 'center'},
];

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#6b6392',
    borderRadius: '1em',
    margin: 'auto',
    padding: '0.5em'
  },
  container: {
    maxHeight: 400,
  },
  tCell: {
    color: 'white',
    fontSize: '0.9em',
    margin: 'auto',
    border: 0,
    padding: '0.3em'
  },
  tCellHeader: {
    padding: '0.2em',
    minWidth: '1em',
    backgroundColor: '#6b639200',
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Orbitron',
    fontSize: '0.9em',
  },
  tPage: {
    color: 'white',
    fontFamily: 'Orbitron',
    margin: 0
  }
});

export default function QualTable({data}) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  if(data !== true){
    return (
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table size='small' stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    className={classes.tCellHeader}
                    key={column.id}
                    align={column.align}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow className={classes.tRow} hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell className={classes.tCell} key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          className={classes.tPage}
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          labelRowsPerPage={'Drivers:'}
        />
      </Paper>
    );
  }
  else{
    return(
      <div>
      </div>
    )
  }
}
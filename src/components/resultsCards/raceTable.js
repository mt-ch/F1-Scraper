import React from 'react';
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
import '../../css/App.scss'

const columns = [
    { id: 'pos', label: 'Pos', maxWidth: 5 },
    { id: 'name', label: 'Driver', maxWidth: 10 },
    { id: 'time', label: 'Time', maxWidth: 5,  align: 'center'},
    { id: 'points', label: 'Points', maxWidth: 5,  align: 'center'},
];

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: '#6b6392',
    borderRadius: '1em'
  },
  container: {
    maxHeight: 400,
  },
  tRow: {
  },
  tCell: {
    color: 'white',
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
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, backgroundColor:'#6b639200', color:'white', fontWeight:'bold', fontFamily:'Orbitron' }}
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
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          style={{color:'white', fontFamily:'Orbitron'}}
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
import React from 'react';
// material ui imports
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

function Matches({data}) {
    return (
        <TableContainer component={Paper} style={{ 
        width: '87.5%', padding: '1rem', minWidth: 650, 
        marginTop: '1.5rem', marginLeft: '3.5rem' }}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Bond</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Certainty of Execution</TableCell>
                <TableCell align="right">Engage</TableCell>
                <TableCell align="right">Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((bond) => (
                <TableRow key={bond.name}>
                  <TableCell component="th" scope="row">
                    {bond.name}
                  </TableCell>
                  <TableCell align="right">
                      {bond.type}
                  </TableCell>
                  <TableCell align="center"
                  style={bond.certainty > 3 
                    ? {color: '#0091ca'} 
                    : {color: '#8a8a8a'}} >
                    {bond.certainty > 3 
                    ? bond.certainty + ' Hot' 
                    : bond.certainty + ' Not' }
                  </TableCell>
                  <TableCell align="right">
                    <IconButton aria-label="menu">
                      <CheckIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton aria-label="menu">
                      <ClearIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    }

export default Matches

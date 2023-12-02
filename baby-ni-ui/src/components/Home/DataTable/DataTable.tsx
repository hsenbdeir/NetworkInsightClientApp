import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Result } from "../../../models/User/IResult";
import { IFiterValues } from "../../../models/AggregatedData/IFiterValues";
import TablePagination from "@mui/material/TablePagination";
import LineChartComponent from "./LineChartComponent";

interface HeadCell {
  disablePadding: boolean;
  id: keyof Result;
  label: string;
  numeric: boolean;
}
// use of Styled components from Material UI.


const headCells: readonly HeadCell[] = [
  { id: "time", numeric: false, disablePadding: false, label: "Time", },
  { id: "rfInputPower", numeric: false, disablePadding: false, label: "RFInputPower", },
  { id: "maxRxLevel", numeric: false, disablePadding: false, label: "maxRxLevel", },
  { id: "rsL_Deviation", numeric: true, disablePadding: false, label: "rsL_Deviation", },
  { id: "neType", numeric: false, disablePadding: false, label: "NeType", },
  { id: "neAlias", numeric: false, disablePadding: false, label: "NeAlias", }
];

type Props = {
  gridData: any; 
  handleChangeDataRequest: any; 
  getGridData: IFiterValues;
};
export default function EnhancedTable(props: Props) {
  const { gridData } = props;
  const [visibleHeadCells, setVisibleHeadCells] = React.useState<readonly HeadCell[]>(headCells);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  React.useEffect(() => {
    // Filter the headCells based on the selected globalFilterValue
    const filteredHeadCells = headCells.filter(
      (cell) => cell.id === 'time' || cell.id === 'rfInputPower' || cell.id === 'maxRxLevel' || cell.id === 'rsL_Deviation' || gridData.some((row: any) => row[cell.id])
    );

    setVisibleHeadCells(filteredHeadCells);
  }, [gridData, props.getGridData.globalFilterValue]);


  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={'small'}>
            <TableHead>
              <TableRow>
                {visibleHeadCells.map((headcells: any) => (
                  <TableCell key={headcells.id} sx={{ textAlign: 'left', fontWeight: 'bold', backgroundColor: '#f2f2f2' }}>{headcells.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {gridData.length > 0 ? (
                gridData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any, index: any) => (
                  <TableRow key={index}>
                    {visibleHeadCells.map((cell) => (
                      <TableCell key={cell.id} sx={{ borderBottom: '1px solid #ddd', padding: '12px' }}>{row[cell.id]}</TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={visibleHeadCells.length} align="center" sx={{ borderBottom: '1px solid #ddd', padding: '12px' }}>
                    No data available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={gridData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ borderTop: '1px solid #ddd' }}
        />
      </Paper>

      <LineChartComponent data={gridData} />
    </Box>
  );

}


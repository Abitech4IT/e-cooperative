import styled from "@emotion/styled";
import {
  TableCell,
  TableHead,
  TableRow,
  tableCellClasses,
} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function TableHeadRow() {
  return (
    <TableHead>
      <StyledTableRow>
        <StyledTableCell align="center" sx={{ fontSize: 15 }}>
          FirstName
        </StyledTableCell>
        <StyledTableCell align="center" sx={{ fontSize: 15 }}>
          LastName
        </StyledTableCell>
        <StyledTableCell align="center" sx={{ fontSize: 15 }}>
          Email
        </StyledTableCell>
        <StyledTableCell align="center" sx={{ fontSize: 15 }}>
          PhoneNumber
        </StyledTableCell>
        <StyledTableCell align="center" sx={{ fontSize: 15 }}>
          TotalSavings
        </StyledTableCell>
        <StyledTableCell></StyledTableCell>
        <StyledTableCell></StyledTableCell>
      </StyledTableRow>
    </TableHead>
  );
}

export default TableHeadRow;

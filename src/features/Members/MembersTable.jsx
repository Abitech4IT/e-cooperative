import { Paper, Table, TableContainer } from "@mui/material";
import TableHeadRow from "./TableHeadRow";
import TableBodyRow from "./TableBodyRow";

function createData(firstName, lastName, email, phoneNum, totalSavings) {
  return { firstName, lastName, email, phoneNum, totalSavings };
}

const rows = [
  createData("Abubakr", "Wahab", "abu@gmail.com", "09012876812", 100000),
  createData("Gafar", "Oyewumi", "abu@gmail.com", "09012876812", 120000),
  createData("Nurudeen", "Bello", "abu@gmail.com", "09012876812", 130000),
  createData("Rukayat", "Minkail", "abu@gmail.com", "09012876812", 150000),
  createData("Masturo", "Abdulateef", "abu@gmail.com", "09012876812", 200000),
];

function MembersTable() {
  return (
    <TableContainer sx={{ mt: 5 }} component={Paper}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHeadRow />
        <TableBodyRow rows={rows} />
      </Table>
    </TableContainer>
  );
}

export default MembersTable;

import { TablePagination, TableRow } from "@mui/material";
import TablePaginationActions from "./TablePaginationActions";

function Pagination({
  rows,
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
}) {
  return (
    <TableRow>
      <TablePagination
        rowsPerPageOptions={[3, 5, 10, 25, { label: "All", value: -1 }]}
        colSpan={5}
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        SelectProps={{
          inputProps: {
            "aria-label": "rows per page",
          },
          native: true,
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={TablePaginationActions}
      />
    </TableRow>
  );
}

export default Pagination;

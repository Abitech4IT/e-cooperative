import { Grid, Typography } from "@mui/material";
import MembersTable from "../features/Members/MembersTable";
import TableOperationsButtons from "../features/Members/TableOperationsButtons";
function Members() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Typography variant="h4">Members</Typography>
        </Grid>
        <TableOperationsButtons />
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <MembersTable />
        </Grid>
      </Grid>
    </>
  );
}

export default Members;

import { Button, ButtonGroup, Grid } from "@mui/material";
import SelectSortBy from "../../ui/SelectSortBy";

function TableOperationsButtons() {
  return (
    <>
      <Grid item xs={4}>
        <ButtonGroup sx={{ backgroundColor: "#fff" }}>
          <Button
            variant="text"
            sx={{
              color: "#111827",
              ":hover": { backgroundColor: "#673ab7", color: "#fff" },
            }}
          >
            All
          </Button>
          <Button
            variant="text"
            sx={{
              color: "#111827",
              ":hover": { backgroundColor: "#673ab7", color: "#fff" },
            }}
          >
            Active
          </Button>
          <Button
            variant="text"
            sx={{
              color: "#111827",
              ":hover": { backgroundColor: "#673ab7", color: "#fff" },
            }}
          >
            non Active
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid item sx={4}>
        <SelectSortBy />
      </Grid>
    </>
  );
}

export default TableOperationsButtons;

import { Box, Button, Card, CardContent, Divider, Grid, IconButton, InputAdornment, InputBase, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Toolbar, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function createData(
  name: string,
  hireDate: Date,
  employmentStatus: string,
  position: string,
  location: string,
) {
  return { name, hireDate, employmentStatus, position, location };
}

const rows = [
  createData('Frozen yoghurt', new Date(), 'Full Time', 'Yogurt Barista', 'Icon City'),
  createData('Ice cream sandwich', new Date(), 'Part Time', 'Yogurt Barista', 'Icon City'),
  createData('Eclair', new Date(), 'Part Time', 'Yogurt Barista', 'Gurney'),
  createData('Cupcake', new Date(), 'Part Time', 'Supervisor', 'Gurney'),
  createData('Gingerbread', new Date(), 'Full Time', 'Manager', 'Icon City')
];


export default function Employees() {
  return (
    <Box>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h3">
            Employees
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Complete list of employees
          </Typography>
        </Box>
      </Toolbar>
      <Box component="section" >
        <Toolbar>
          <Box >
            <Card variant="outlined">
              <CardContent>
                <Typography variant="overline" gutterBottom>
                  Total employees
                </Typography>
                <Typography variant="h5" component="div">
                  {rows.length}
                </Typography>

              </CardContent>
            </Card>

          </Box>
        </Toolbar>
        <Toolbar>
          <Box sx={{ flexGrow: 1, paddingTop: 2 }} >
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <TextField
                  component={Paper}
                  id="input-with-icon-textfield"
                  label="Search"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>
          <Button variant="contained" startIcon={<AddIcon />}>
            Add employee
          </Button>
        </Toolbar>

        <Box component="section" sx={{ p: 3 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
              <TableHead>
                <TableRow>
                  <TableCell>Employees</TableCell>
                  <TableCell>Hire Date</TableCell>
                  <TableCell>Employment Status</TableCell>
                  <TableCell>Position</TableCell>
                  <TableCell>Location</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.hireDate.toString()}</TableCell>
                    <TableCell>{row.employmentStatus}</TableCell>
                    <TableCell>{row.position}</TableCell>
                    <TableCell>{row.location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>


    </Box>

  );
}

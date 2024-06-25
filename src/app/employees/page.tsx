'use client';

import { Box, Button, Card, CardContent, Divider, Grid, IconButton, InputAdornment, InputBase, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Toolbar, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AgGridReact } from 'ag-grid-react';
import { useState } from "react";
import './employee.css'
import { ColDef, GridOptions } from "ag-grid-community";

function createData(
  name: string,
  hireDate: string,
  employmentStatus: string,
  position: string,
  location: string,
) {
  return { name, hireDate, employmentStatus, position, location };
}

const rows = [
  createData('Frozen yoghurt', new Date().toString(), 'Full Time', 'Yogurt Barista', 'Icon City'),
  createData('Ice cream sandwich', new Date().toString(), 'Part Time', 'Yogurt Barista', 'Icon City'),
  createData('Eclair', new Date().toString(), 'Part Time', 'Yogurt Barista', 'Gurney'),
  createData('Cupcake', new Date().toString(), 'Part Time', 'Supervisor', 'Gurney'),
  createData('Gingerbread', new Date().toString(), 'Full Time', 'Manager', 'Icon City')
];


export default function Employees() {

  const [quickFilterText, setQuickFilterText] = useState<string>("");

  const rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

  // Column Definitions: Defines the columns to be displayed.
  const colDefs: ColDef[] = [
    { field: "name" },
    { field: "hireDate" },
    { field: "employmentStatus" },
    { field: "position" },
    { field: "location" }
  ]

  const gridOptions: GridOptions = {
    autoSizeStrategy: {
      type: 'fitGridWidth',
      defaultMinWidth: 100
    },
    columnDefs: colDefs
  }

  const onSearch = (event: any) => {
    console.log(event.target.value);
    setQuickFilterText(event.target.value);
  }


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
          <Box>
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
                  onChange={onSearch}
                />
              </Grid>
            </Grid>
          </Box>
          <Button variant="contained" startIcon={<AddIcon />}>
            Add employee
          </Button>
        </Toolbar>

        <Box component="section" sx={{ p: 3 }}>
          <div
            className="ag-theme-quartz-dark" // applying the grid theme
            style={{ height: 500 }} // the grid will fill the size of the parent container
          >
            <AgGridReact
              rowData={rows}
              gridOptions={gridOptions}
              quickFilterText={quickFilterText}
            />
          </div>
        </Box>
      </Box>


    </Box>

  );
}

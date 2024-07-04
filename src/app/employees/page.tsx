'use client';

import { Box, Button, Card, CardContent, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import './employee.css'
import EmployeeProfile from "./employee-profile";
import { DataGrid, GridAutosizeOptions, GridCellParams, GridColDef, GridRenderCellParams, GridToolbar } from "@mui/x-data-grid";
import EditIcon from '@mui/icons-material/Edit';
import { EmploymentStatus, OutletLocation } from "@/constants/employee";
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteEmployeeDialog from "./delete-employee";


function createData(
  name: string,
  hireDate: string,
  employmentStatus: string,
  position: string,
  location: string,
) {
  return { id: Math.random(), name, hireDate, employmentStatus, position, location };
}

interface RowData {
  id: number,
  name: string,
  hireDate: string,
  employmentStatus: string,
  position: string,
  location: string,
}

const rows: RowData[] = [
  createData('Frozen yoghurt', new Date().toString(), EmploymentStatus.FullTime, 'Yogurt Barista', OutletLocation.IconCity),
  createData('Ice cream sandwich', new Date().toString(), EmploymentStatus.PartTime, 'Yogurt Barista', OutletLocation.IconCity),
  createData('Eclair', new Date().toString(), EmploymentStatus.PartTime, 'Yogurt Barista', OutletLocation.Gurney),
  createData('Cupcake', new Date().toString(), EmploymentStatus.PartTime, 'Supervisor', OutletLocation.Gurney),
  createData('Gingerbread', new Date().toString(), EmploymentStatus.FullTime, 'Manager', OutletLocation.IconCity)
];


export default function Employees() {

  const [open, setOpen] = useState<boolean>(false);
  const [employee, setEmployee] = useState<RowData | undefined>();

  const [openDelete, setOpenDelete] = useState<boolean>(false);

  const handleEditButton = (params: GridRenderCellParams<RowData>) => {
    setEmployee(params.row);
    setOpen(true);
  };
  // Column Definitions: Defines the columns to be displayed.
  const colDefs: GridColDef[] = [
    { field: "name", headerName: 'Name' },
    { field: "hireDate", headerName: 'Hire Date' },
    { field: "employmentStatus", headerName: 'Employment Status' },
    { field: "position", headerName: 'Position' },
    { field: "location", headerName: 'Location' },
    {
      field: "action",
      headerName: 'Action',
      renderCell: (params: GridRenderCellParams<RowData>) => (
        <div>
          <IconButton aria-label="delete" onClick={() => handleEditButton(params)}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={() => handleDeleteButton(params)}>
            <DeleteIcon />
          </IconButton>
        </div>
      )
    }
  ]

  const autosizeOptions: GridAutosizeOptions = {
    columns: ['name', 'hireDate', 'employmentStatus', 'position', 'location'],
    includeHeaders: true,
    includeOutliers: true
  }

  const handleDeleteButton = () => {
    setOpenDelete(true);
  }

  const handleDeleteClose = () => {
    setOpenDelete(false);
  }

  const handleClickOpen = () => {
    setEmployee(undefined);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
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
          <Box sx={{ flexGrow: 1, paddingTop: 2 }} >
            <Grid container spacing={2}>
              <Grid item xs={2}>
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
              </Grid>
            </Grid>
          </Box>

          <Button variant="contained" startIcon={<AddIcon />} onClick={handleClickOpen}>
            Add employee
          </Button>
          <EmployeeProfile open={open} onClose={handleClose} employee={employee} />
          <DeleteEmployeeDialog open={openDelete} onClose={handleDeleteClose}></DeleteEmployeeDialog>
        </Toolbar>
        <Box component="section" sx={{ p: 3 }}>
          <div
            style={{ height: 500, width: '100%' }} // the grid will fill the size of the parent container
          >
            <DataGrid rows={rows} columns={colDefs} autosizeOnMount={true} autosizeOptions={autosizeOptions} slots={{ toolbar: GridToolbar }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                },
              }} />
          </div>
        </Box>
      </Box>
    </Box>
  );
}

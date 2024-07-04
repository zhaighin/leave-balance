'use client';

import { EmploymentStatus, OutletLocation, RowData } from "@/constants/employee";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, TextFieldProps } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useEffect, useState } from "react";


interface DialogProps {
  open: boolean;
  onClose: () => void;
  employee?: RowData
}

export default function EmployeeProfile(props: DialogProps) {
  const { onClose, open, employee } = props;
  const [employmentStatus, setEmploymentStatus] = useState<string>(EmploymentStatus.FullTime);
  const [location, setLocation] = useState<string>(OutletLocation.IconCity);


  useEffect(() => {
    if (employee) {
      setEmploymentStatus(employee.employmentStatus);
      setLocation(employee.location);
    } else {
      // Reset back to full time
      setEmploymentStatus(EmploymentStatus.FullTime);
      setLocation(OutletLocation.IconCity);
    }
  }, [employee])

  const handleEmploymentStatusChange = (event: SelectChangeEvent) => {
    setEmploymentStatus(event.target.value as EmploymentStatus);
  }

  const handleLocationChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value);
  }

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{employee ? 'Edit Employee' : 'Add New Employee'}</DialogTitle>
      <DialogContent>
        <Box component="form" sx={{ paddingTop: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth id="employee-name" label="Employee name" defaultValue={employee?.name} />
            </Grid>
            <Grid item xs={12}>
              <DatePicker aria-label="Hire Date" label="Hire Date"
                slotProps={{
                  textField: {
                    fullWidth: true
                  },
                }} />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="employment-status-label">Employment Status</InputLabel>
                <Select
                  labelId="employment-status-label"
                  id="employment-status"
                  label="Employment Status"
                  value={employmentStatus}
                  onChange={handleEmploymentStatusChange}
                >
                  <MenuItem value={EmploymentStatus.FullTime}>Full Time</MenuItem>
                  <MenuItem value={EmploymentStatus.PartTime}>Part Time</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Position" defaultValue={employee?.position} />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="location-label">Location</InputLabel>
                <Select
                  labelId="location-label"
                  id="location"
                  label="Location"
                  value={location}
                  onChange={handleLocationChange}
                >
                  <MenuItem value={OutletLocation.IconCity}>Icon City</MenuItem>
                  <MenuItem value={OutletLocation.Gurney}>Gurney Plaza</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}

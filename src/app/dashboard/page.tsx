'use client';

import { EmploymentStatus } from "@/constants/employee";
import { Dashboard } from "@mui/icons-material";
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [employmentStatus, setEmploymentStatus] = useState<EmploymentStatus>(EmploymentStatus.FullTime);
  const [location, setLocation] = useState<string>('ICON_CITY');

  const handleEmploymentStatusChange = (event: SelectChangeEvent) => {
    setEmploymentStatus(event.target.value as EmploymentStatus);
  }

  const handleLocationChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value);
  }

  return (
    <Box component="form" sx={{ flexGrow: 1, paddingTop: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField id="employee-name" label="Employee name" />
        </Grid>
        <Grid item xs={12}>
          <DatePicker aria-label="Hire Date" label="Hire Date" />
        </Grid>
        <Grid item xs={12}>
          <FormControl>
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
          <TextField label="Position" />
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <InputLabel id="location-label">Location</InputLabel>
            <Select
              labelId="location-label"
              id="location"
              label="Location"
              value={location}
              onChange={handleLocationChange}
            >
              <MenuItem value='ICON_CITY'>Icon City</MenuItem>
              <MenuItem value='GURNEY_PLAZA'>Gurney Plaza</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>

  );
}

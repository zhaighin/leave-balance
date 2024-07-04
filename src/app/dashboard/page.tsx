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
    <div>Dashboard</div>

  );
}

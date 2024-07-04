'use client';

import { EmploymentStatus } from "@/constants/employee";
import { Dashboard } from "@mui/icons-material";
import { Box, Button, ButtonGroup, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Tab, Tabs, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import Image from "next/image";
import { useState } from "react";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import InsightsIcon from '@mui/icons-material/Insights';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
};

export default function Home() {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange}>
        <Tab icon={<ShowChartIcon />} iconPosition="start" label="Monthly situation" {...a11yProps(0)} />
        <Tab icon={<EventAvailableIcon />} iconPosition="start" label="Leaves" {...a11yProps(1)} />
        <Tab icon={<InsightsIcon />} iconPosition="start"label="Annual situation" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>Content for Tab 1</TabPanel>
      <TabPanel value={value} index={1}>Content for Tab 2</TabPanel>
      <TabPanel value={value} index={2}>Content for Tab 3</TabPanel>
    </Box>
  );
}

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image'
import Link from 'next/link';


const pages = ['Dashboard', 'Employees', 'Reports'];

export default function Header() {
  return (

    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
          <Image
            src="/logo.png"
            width={100}
            height={60}
            alt="app logo"
          />
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page}
              color='inherit'
            >
              <Link href={`/${page.toLowerCase()}`}>{page}</Link>
            </Button>
          ))}
        </Box>

        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>



  );
}
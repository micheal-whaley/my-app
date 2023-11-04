import * as React from 'react';
import '../App.css';
//import Button from '@mui/material/Button';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/material/Menu';


export default function Home() {

    return (
        <div>
           <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                    Photos
                    </Typography>
                </Toolbar>
                </AppBar>
             <Breadcrumbs aria-label="breadcrumb">
                <Typography color="white">Home</Typography>
                <Link underline="hover" color="white" href="/login">
                    Login
                </Link>
                <Link
                    underline="hover"
                    color="white"
                    href="/about"
                >
                    About
                </Link>
            </Breadcrumbs>
        </div>
    );
}
"use client"
import { Typography, Grid, Box, Button} from "@mui/material";
import Image from "next/image";
import Layout from '../components/appbar'
// import { createMuiTheme } from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';
// import green from '@material-ui/core/colors/green';
//import download from 'images/download.jpeg'
import { createTheme } from '@mui/material/styles';
import { useRouter } from "next/navigation";
import { SignedIn, SignedOut, SignIn } from '@clerk/nextjs'


export default function ViewCircle() {


  return (
    <>
    <SignedOut>
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{minHeight: '100vh',
        backgroundColor: 'black',
          
      }}
      >
      <Box>
      <Layout />
      </Box>
      <Box 
      sx = {{
        width: '100vw',
        mb: 6, 
        display: 'inline', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(1,1,1,300.2)), url("/images/orbits.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        }}>
          <Box sx = {{pt: 40}}>
            
        <Typography variant = 'h2'  style={{ color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Sign in to view circles</Typography>
        </Box>
  

        
        </Box>

        
    </Grid>
    </SignedOut>
</>

  )
}
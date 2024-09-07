"use client"
import { Typography, Grid, Box, Button, Paper, TextField} from "@mui/material";
import Image from "next/image";
import Layout from '../components/appbar'
import { createTheme } from '@mui/material/styles';
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function AddCircle() {

    const [name, setName] = useState('')
    const [about, setAbout] = useState('')

    const handleSubmit = async () => {
        body: JSON.stringify({text}) // Ensures backend expects text
    }

    // Integrate feature to save text
  return (
    
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
        backgroundImage: '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        }}>
          <Box sx = {{pt: 40}}>
            <Paper sx={{p: 4, width: '50%', bgcolor: 'white', border: 5, borderColor: 'gray'}}>
                <Typography sx = {{mb: 1}}>Create yourCircle</Typography>
                <TextField value={name}
                onChange={(e) => setName(e.target.value)}
                label = "Enter Name"
                fullWidth
                multiline
                rows={1}
                variant="outlined"
                sx={{
                    mb: 2
                }}
                >
                </TextField>

                <TextField value={about}
                onChange={(e) => setAbout(e.target.value)}
                label = "About"
                fullWidth
                multiline
                rows={1}
                variant="outlined"
                sx={{
                    mb: 2
                }}
                >
                </TextField>


            </Paper>
        </Box>



      </Box>
    </Grid>
  )
}
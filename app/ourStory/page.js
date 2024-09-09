"use client"
import { Typography, Grid, Box, Button, Paper} from "@mui/material";
import Image from "next/image";
import Layout from '../components/appbar'
// import { createMuiTheme } from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';
// import green from '@material-ui/core/colors/green';
//import download from 'images/download.jpeg'
import { createTheme } from '@mui/material/styles';
import { useRouter } from "next/navigation";


export default function Home() {



  const Router = useRouter()

  const goStory = () => {
    Router.push("ourStory")
  }
  return (
    <>
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
            
        <Typography variant = 'h2'  style={{ color: 'white', textAlign: 'center', fontWeight: 'bold'}}>OUR STORY </Typography>
        </Box>
        <Box style={{textAlign: 'center'}}>
            <Paper style={{backgroundColor: 'transparent', width: '80%', padding: '20px', margin: 'auto' }}>
            <Typography variant = 'h5'style={{ color: 'white', textAlign: 'center'}}>YourCircle began with a group of college students who discovered that sharing their favorite things - comics, gadgets, even stories - bought them closer together. We wanted to make that connection for everyone, so we created a space where sharing is not just about giving just about giving, but about deepening relationships and building a stronger community. In yourCircle, every shared item becomes a new memory, every exhange a step towards getting something more meaningful. Join us and turn everyday moments into lasting connections.</Typography>
            </Paper>
  
            </Box>



        </Box>

        



    </Grid>
</>

  )
}
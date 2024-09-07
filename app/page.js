"use client"
import { Typography, Grid, Box, Button} from "@mui/material";
import Image from "next/image";
import Layout from './components/appbar'
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
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(1,1,1,300.2)), url("/images/mainPageWallpaper.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        }}>
          <Box sx = {{pt: 40}}>
        <Typography variant = 'h2'  style={{ color: 'white', textAlign: 'center', fontWeight: 'bold'}}>YOUR CIRCLE AWAITS</Typography>
        <Typography variant = 'h2'style={{ color: 'white', textAlign: 'center'}}>share freely, connect deeply</Typography>
        <Typography  style= {{color: 'white', textAlign: 'center'}}>Join yourCircle to freely share, deeply connect, and strengthen relationships through giving and recieving</Typography>

        
        </Box>

        <Grid container justifyContent='center'>
        <Button 
          fullWidth={false}
          style={{justifyContent: "center", textAlign: 'center'}}
          variant = 'contained' 
          color='primary'
          sx = {{borderRadius: 28}}
          >Discover your circle</Button>
        </Grid>



      </Box>
    </Grid>
  )
}
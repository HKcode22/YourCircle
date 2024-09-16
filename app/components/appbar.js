
import {SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import {AppBar, Box, Button, Container, CssBaseline, Drawer, Grid, IconButton, List, ListItem, ListItemText, Toolbar, Typography} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import Link from "next/link";
import { useRouter } from "next/navigation";

const Layout = ({ children }) => {



    const Router = useRouter()

    // const goSignIn = () => {

    // }

    const goStory = () => {
      Router.push("ourStory")
    }

    const goView = () => {
        Router.push("viewCircle")
    }

    return(
        <>
        {/* Navigation */}
      <AppBar position={"fixed"} style={{background: 'transparent', boxShadow: 'none', margin: 0, padding: 0}}>
      <Toolbar style={{justifyContent: 'center'}}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Button href = '/' variant={"body1"} style = {{color: 'white'}}>
                yourCircle
            </Button>

            <Box sx = {{textAlign: 'center', justifyContent: 'center'}}>

            {/* <Button variant={"body1"} style = {{color: 'white'}}>
                Home
            </Button> */}

            <Button onClick = {goStory} variant={"body1"} style = {{color: 'white'}}>
                Our Story
            </Button>

            <Button onClick = {goView} variant={"body1"} style = {{color: 'white'}}>
                View Circles
            </Button>
        </Box>

        {/* <Button variant={"body1"} style = {{color: 'white'}}>
            Join Us
        </Button> */}

        <SignedOut>
            <Button href="/sign-in" variant={"body1"} style = {{color: 'white'}}>
                Login
            </Button>
        </SignedOut>

        <SignedIn>
            <Button variant={"body1"} style = {{color: 'white'}}>
                <UserButton />
            </Button>
        </SignedIn>


        </Box>


      </Toolbar>
    </AppBar>
    

            <Container sx={{marginTop: 0, padding: 0}}>
                {children} 
            </Container>
        </>
    );
}
export default Layout
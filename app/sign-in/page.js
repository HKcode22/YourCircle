import { SignIn } from '@clerk/nextjs'
import { AppBar, Container, Toolbar, Typography, Box, Button } from "@mui/material";
import Link from 'next/link'

export default function SignUpPage(){
    return(
        <Container maxWidth="sm">
     

            <Box 
            display="flex"
            flexDirection="column" 
            alignItems="center" 
            justifyContent="center">
                <SignIn/>
            </Box>



        </Container>
    )
}
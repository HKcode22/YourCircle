"use client"
import { SignIn } from '@clerk/nextjs'
import { AppBar, Container, Toolbar, Typography, Box, Button } from "@mui/material";
import Link from 'next/link'
import { useNavigate} from "react-router-dom";
import { useRouter } from 'next/navigation';

export default function SignUpPage(){

    const router = useRouter();
    return(
        <Container maxWidth="sm">

            <Button onClick={() => router.back()}>Back</Button>


            <Box 
            display="flex"
            flexDirection="column" 
            alignItems="center" 
            justifyContent="center">
                <Typography variant='h4'>
                    Sign In
                </Typography>
                <SignIn/>
            </Box>



        </Container>
    )
}
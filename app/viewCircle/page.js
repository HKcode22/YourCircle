
"use client"
import { Typography, Grid, Box, Button, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Layout from '../components/appbar'; // Ensure this path is correct
import { SignedIn, SignedOut } from '@clerk/nextjs';

export default function ViewCircle() {
    return (
        <>
            <SignedIn>
                <Grid container sx={{ minHeight: '100vh', backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
                    <Layout />
                    <Box sx={{
                        width: '100vw',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '100vh',
                        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(1, 1, 1, 0.2)), url("/images/orbits.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                        <Button
                            color="primary"
                            aria-label="add"
                            size="large"
                            sx={{
                                borderRadius: '50%', // Perfect circle
                                padding: 2,
                                fontSize: '1.25rem',
                                width: 56, // Ensures the size is enough for the icon and clickable area
                                height: 56,
                            }}
                        >
                            Add Circle 
                        </Button>
                    </Box>
                </Grid>
            </SignedIn>

            <SignedOut>
                <Grid container sx={{ minHeight: '100vh', backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
                    <Layout />
                    <Typography variant="h2" sx={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
                        Sign in to view circles
                    </Typography>
                </Grid>
            </SignedOut>
        </>
    );
}

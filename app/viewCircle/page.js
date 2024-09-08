
"use client"
import { Card, Typography, Grid, Box, Button, IconButton, CardContent } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Layout from '../components/appbar'; // Ensure this path is correct
import { SignedIn, SignedOut } from '@clerk/nextjs';
import db from '@/firebase';
import { useState, useEffect } from "react";


// Fetch data
const Circle = ({ circleId }) => {
    // useState to store the circle data fetched from the Firestore DB
    const [circle, setCircle] = useState(null);

    // indicates whether data is still being fetched 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // aync function to fetch circle data
        const fetchCircle = async() => {
            try{
                const doc = await db.collection('circles').doc(circleId).get(); // fetch circle based on circle id from db

                if(doc.exists){
                    setCircle(doc.data()); // if circle data exist, update the circle state with fetched data
                }
                else{
                    alert.log("Circle does not exist!") // if circle doesn't exist, display error message (change it so that it alerts the window)
                }
            }
            catch (error){
                console.error("Error fetching circle: ", error)
            }              
        
        setLoading(false); // loading is set to false when operation is complete 
        };

        fetchCircle(); // Call fetch circle function
    }, [circleId]); // This effect depends on circleId, so it reruns when circleId changes

    if(loading){
        return <Typography>Loading...</Typography>
    }





    return (
        <>

        {/* when your signed in */}
            <SignedIn> 
                <Grid container sx={{ minHeight: '100vh', backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
                    <Layout />
                    <Card>

                    {/* Background Box */}
                    <Box sx={{
                        width: '100vw',
                        flexDirection: 'column',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '100vh',
                        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(1, 1, 1, 0.2)), url("/images/orbits.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                        <IconButton
                            color="primary"
                            aria-label="add"
                            size="large"
                            
                            sx={{
                                borderWidth: 0,
                                borderStyle: 'solid',
                                backgroundColor: 'rgba(0, 0, 0, 1.0)',
                                borderRadius: '50%', // Perfect circle
                                padding: 2,
                                fontSize: '1.25rem',
                                width: 200, // Ensures the size is enough for the icon and clickable area
                                height: 200,
                                '&:hover':{
                                    backgroundColor: 'rgba(0, 0, 0, 1.0)'
                                }
                            }}
                        >
                            <AddIcon />
                        </IconButton>
                        {circle ? (
                            <CardContent>
                                <Typography variant='h5'> {circle.name} </Typography>
                                <Typography variant="body2" color="text.secondary"> {circle.description} </Typography>
                            </CardContent>
                        ): (
                            <Typography variant = "h5" style = {{ color: 'white' }}sx = {{p: 2}}>
                                No circle found
                            </Typography>
                        )}

                        
                    </Box>
                    </Card>
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
};

export default Circle;

"use client"
import { Card, Typography, Grid, Box, Button, IconButton, CardContent, Modal, Paper, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Layout from '../components/appbar'; // Ensure this path is correct
import { SignedIn, SignedOut } from '@clerk/nextjs';
import { useState, useEffect } from "react";
import axios from 'axios'; // Import axios for making HTTP requests

const Circle = ({ circleId }) => {
    const [isClient, setClient] = useState(false);

    useEffect(() => {
        setClient(true); // Component did mount
    }, []);

    // useState for modal
    const [openMod, setOpenMod] = useState(false);
    const handleOpen = () => setOpenMod(true);
    const handleClose = () => setOpenMod(false);

    const [groupName, setName] = useState('');
    const [about, setAbout] = useState('');

    // useState to store the circle data fetched from the SQL DB
    const [circle, setCircle] = useState(null);
    const [loading, setLoading] = useState(true);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: '#0a0a0a',
        p: 4,
        borderRadius: 2,
    };

    const saveName = async () => {
        if (!groupName) {
            alert("Please enter a name");
            return;
        }

        try {
            const response = await axios.post('/api/groups', {
                name: groupName,
                description: about,
                createdAt: new Date()
            });
            console.log('Group created successfully!');
            setName('');
            setAbout('');
        } catch (error) {
            alert("Error creating group: ", error);
        }
    };

    useEffect(() => {
        const fetchCircle = async () => {
            try {
                const response = await axios.get(`/api/circles/${circleId}`);
                const data = response.data;
                if (data) {
                    setCircle(data);
                } else {
                    console.log("Circle does not exist!");
                }
            } catch (error) {
                console.error("Error fetching circle: ", error);
            }
            setLoading(false);
        };

        fetchCircle();
    }, [circleId]);

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <>
            <SignedIn>
                {/* Remainder of the JSX structure */}
            </SignedIn>
            <SignedOut>
                {/* Signed out view */}
            </SignedOut>
        </>
    );
};

export default Circle;

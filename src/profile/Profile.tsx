import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';

function Profile(): JSX.Element {
    
    const [profileData, setProfileData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch profile data when the component mounts
        const fetchProfileData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/profile-data', { withCredentials: true });
                setProfileData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching profile data:', error);
                setLoading(false);
            }
        };

        fetchProfileData();
    }, []); // Empty dependency array to run effect only once when component mounts

    if (loading) {
        return <p>Loading...</p>; // Display loading indicator while data is being fetched
    }

    if (!profileData) {
        return <p>Error: Profile data not found</p>; // Display error message if data is not available
    }

    // Once data is loaded, render profile information
    return (
        <div className="profile-wrapper">
            <h2>Welcome, {profileData[0].username}!</h2>
            <p>Your email is: {profileData[0].email}</p>
            <p>Your role is: {profileData[0].role}</p>
        </div>
    );
}

export default Profile;

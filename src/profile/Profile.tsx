import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile(): JSX.Element {
    const [profileData, setProfileData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch profile data when the component mounts
        const fetchProfileData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/profile');
                setProfileData(response.data);
                setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error('Error fetching profile data:', error);
                setLoading(false); // Set loading to false on error as well
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
        <div>
            <h2>Welcome, {profileData.username}!</h2>
            {/* Display other profile information here */}
        </div>
    );
}

export default Profile;

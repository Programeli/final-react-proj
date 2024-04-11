import React from "react";
import './Home.css';
import Profile from "../profile/Profile.tsx";

export default function Home():JSX.Element{

    return(

        <div className="home-wrapper">

            <div className="home-content">
                
                <h1>Welcome to our home page!</h1>
                <Profile/>
                <div className="p-wrapper">
                    <p>Please visit the about us tab to learn more!</p>
                </div>

            </div>    
           
        </div>

    );

}
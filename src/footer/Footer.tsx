import React from "react";
import { SocialIcon } from "react-social-icons";
import './Footer.css';

export default function Footer():JSX.Element{

    return(

        <div className="footer-wrapper">

            <div className="left">

                <p>Thanks for visiting Our website</p>

                <div className="contact-footer">

                    <p style={{fontWeight: 'bold'}}>Contact Information:</p>

                    <ul>
                        <li><b>Phone:</b> +123 456 789</li>
                        <li><b>Email:</b> 7DnXJ@example.com</li>
                        <li><b>Address:</b> 123 Main St, Anytown Israel</li>
                        <li><b>Hours:</b> 9am - 5pm</li>
                    </ul>

                </div>

            </div>

            <div className="mid">

                <p>© 2024 Caffe Barista Co.</p>
                
            </div>

            <div className="right">

                <p>Socials</p>

                <div className="socials">
                    <SocialIcon url="https://twitter.com" network="x"/>
                    <SocialIcon url="https://facebook.com" network="facebook" bgColor="black"/>
                    <SocialIcon url="https://instagram.com" network="instagram" bgColor="black"/>
                    <SocialIcon url="https://tiktok.com" network="tiktok"/>
                </div>

            </div>


        </div>

    );

}
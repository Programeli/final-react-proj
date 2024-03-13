import React from "react";
import "./Contact.css";

export default function Contact():JSX.Element {
    
    return(

        <div className="contact-wrapper">

            <div className="contact-content">
               
                <h1>Contact Us</h1>
         
                <form action="#" method="POST">

                    <input type="text" placeholder="Full Name"/>
                    <input type="email" placeholder="Email"/>
                    <textarea placeholder="Please write your message here!"></textarea>
                    <button type="submit">Submit</button>

                </form>
            
            </div>

        </div>
    
    );

}
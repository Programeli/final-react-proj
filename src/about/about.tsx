import React from "react";
import './About.css';

export default function About():JSX.Element {
    
    return(
      
        <div className="about-wrapper">
 
            <div className="about-content">

                <div className="about-textarea">
                    <h1>About Us</h1>
                    <pre className="about-content-pre">A café is a type of restaurant which typically serves coffee and tea, in addition to light refreshments such as baked goods or snacks. The term "café" comes from the French word meaning "coffee".<br/><br/>

                    A café setting is known as a casual social environment where you can find people reading newspapers and magazines, playing board games, studying or chatting with others about current events. It is also regarded as a place where information can be exchanged.<br/><br/>

                    A café is sometimes called a coffeehouse or a coffee shop or tea shop in English, a café in French and a bar in Italian (cafe or café is the common spelling used in English, French, Spanish, Portuguese et al. however the word is spelled "caffè" in Italian). It shares some characteristics of a bar and some characteristics of a restaurant given its selection of foods and beverages served, but is distinct from a cafeteria which is a type of restaurant where customers can choose from many dishes displayed on a serving line. In some countries, cafés are designed to more closely resemble restaurants whereby offering a range of hot meals and possibly licensed to serve alcohol. Most British cafés however, do not sell alcohol likely due to the prominent pub culture.
                    </pre>

                </div>

                <div className="about-images">

                    <img src="/assets/about/outside-caffe.jpg" alt="outside caffe"/>
                    <img src="/assets/about/bar.jpg" alt="caffe bar" />
                    <img src="/assets/about/coffee-shop.jpg" alt="coffee shop" />

                </div>


            </div>
            
        
        </div>

    );
}

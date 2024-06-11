import { useState } from 'react';
import './About.css';
import "./ShoppingList.css";

function About() {  
    const [contactVisible, setContactVisible] = useState(false);

    function showData() {
        setContactVisible(!contactVisible);
    }

    return (
        <div className="about page">
            <h3>Roneisha Still</h3>

        {contactVisible ? (
        <div className="box">
            <p>
             For inquiries please contact The Potato Haven via email @ <b>roneisha.still@gmail.com</b>
            </p>
        </div> 
       ) : null}

        <button onClick={showData} className="btn btn-outline-dark">View Contact Info</button>
        </div>
    );
}

export default About;

/*
on click -> fn showData
showData console logs a message
*/
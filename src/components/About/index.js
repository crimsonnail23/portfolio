import React from 'react';
import profilePic from '../../assets/images/profile.jpg'

function About(){
    return(
        <section>
            <img src={profilePic} />
            <h1 id="about">This Is Who I Am</h1>
            <p>I am an upcoming fullstack webdeveloper which means 
               I can work on both front and back-end.</p>
        </section>
    )
}

export default About
import React from 'react';
import profilePic from '../../assets/images/profile.jpg'
//this page will feature basic information about me.
function About(){
    return(
        <section>
            <img src={profilePic} alt="profile pic of site creator" />
            <h1 id="about">This Is Who I Am</h1>
            <p>I am an upcoming fullstack webdeveloper which means 
               I can work on both front and back-end.  
               <br/>
               I have created many different types of sites from a single page application like this profile, to more complex sites like the Dream or Nightmare site.</p>
               <p>The Dream or Nightmare site was a project that I worked with others. It has a functional front-end and back-end. I worked on both front and back. 
                <br/>I also have made many other dynamic projects that can be seen in the Porfolio secion of this profile.
               </p>
        </section>
    )
}

export default About